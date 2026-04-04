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

export async function getRoute(slug: string): Promise<Route | null> {
  try {
    return await client.fetch(
      `*[_type == "route" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      stravaRouteId,
      area,
      image,
      summary,
      "description": description[]{_key, ...},
      distance,
      elevation,
      difficulty,
      tags
    }`,
      { slug },
    );
  } catch (error) {
    console.error("Failed to fetch route:", error);
    return null;
  }
}

export async function getRoutes(): Promise<Route[]> {
  try {
    return await client.fetch(
      `*[_type == "route"] | order(title asc) {
      _id,
      title,
      slug,
      stravaRouteId,
      area,
      image,
      summary,
      "description": description[]{_key, ...},
      distance,
      elevation,
      difficulty,
      tags
    }`,
    );
  } catch (error) {
    console.error("Failed to fetch routes:", error);
    return [];
  }
}
