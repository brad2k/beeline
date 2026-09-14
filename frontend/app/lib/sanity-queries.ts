import { cacheLife } from "next/cache";
import { client, type Route } from "./sanity";

export async function getRoute(slug: string): Promise<Route | null> {
  "use cache";
  cacheLife("days");

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
  "use cache";
  cacheLife("days");

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
