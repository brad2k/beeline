import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";
import { createImageUrlBuilder } from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface Route {
  _id: string;
  title: string;
  slug: { current: string };
  stravaRouteId: string;
  area: "all" | "sf" | "north" | "south";
  image: SanityImageSource;
  summary: string;
  description: PortableTextBlock[];
  distance: number;
  elevation: number;
  difficulty: "super easy" | "easy" | "moderate" | "difficult";
  tags?: string[];
}
