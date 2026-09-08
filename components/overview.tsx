import { MapPin, Mail } from "lucide-react";
import { Panel, PanelBody, Plate } from "@/components/panel";
import { profile } from "@/data/profile";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>
      <PanelBody className="space-y-2.5">
        <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
          <div className="flex items-center gap-4 font-mono text-sm">
            <Plate>
              <Mail strokeWidth={1.5} />
            </Plate>
            <p className="min-w-0 truncate">
              <a
                className="underline-offset-4 hover:underline"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-sm">
            <Plate>
              <MapPin strokeWidth={1.5} />
            </Plate>
            <p className="min-w-0 truncate">
              <a
                className="underline-offset-4 hover:underline"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.locationQuery)}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                {profile.location}
              </a>
            </p>
          </div>
        </div>
      </PanelBody>
    </Panel>
  );
}
