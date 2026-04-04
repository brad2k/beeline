"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    __STRAVA_EMBED_BOOTSTRAP__?: () => void;
  }
}

export default function StravaEmbed({ routeId }: { routeId: string }) {
  useEffect(() => {
    window.__STRAVA_EMBED_BOOTSTRAP__?.();
  }, []);

  return (
    <>
      <div
        className="strava-embed-placeholder"
        data-embed-type="route"
        data-embed-id={routeId}
        data-full-width="true"
        data-style="standard"
        data-from-embed="true"
      ></div>
      <Script src="https://strava-embeds.com/embed.js" />
    </>
  );
}
