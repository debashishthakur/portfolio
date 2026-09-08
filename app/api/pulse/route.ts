import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/* Unique-visitor counter. "Unique" means one count per browser: the first
   request sets a year-long first-party cookie and increments; every request
   after that only reads. No IPs, no fingerprinting, nothing stored about the
   visitor beyond the single running total.

   Storage is Upstash Redis over REST (Vercel → Storage → Upstash, free tier
   injects the env vars). Until those exist, this returns { count: null } and
   the header widget simply stays hidden — the deploy never breaks.

   The route is named "pulse" rather than "visitors" so adblock filter lists
   do not eat it. */

export const dynamic = "force-dynamic";

const KEY = "visitors:unique";
const COOKIE = "dw_v";

function creds() {
  return {
    url: process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN,
  };
}

async function redis(cmd: string): Promise<number | null> {
  const { url, token } = creds();
  const res = await fetch(`${url}/${cmd}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const body = (await res.json()) as { result: unknown };
  const n = Number(body.result);
  return Number.isFinite(n) ? n : null;
}

export async function GET() {
  const { url, token } = creds();
  if (!url || !token) return NextResponse.json({ count: null });

  const jar = await cookies();
  const seen = jar.get(COOKIE);

  try {
    const count = seen ? await redis(`get/${KEY}`) : await redis(`incr/${KEY}`);
    const res = NextResponse.json({ count });
    if (!seen && count !== null) {
      res.cookies.set(COOKIE, "1", {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
        sameSite: "lax",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
    }
    return res;
  } catch {
    return NextResponse.json({ count: null });
  }
}
