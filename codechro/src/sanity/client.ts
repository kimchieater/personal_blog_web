import "server-only";
import { createClient, type QueryParams } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "dfhzf4hs",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  try {
    return await client.fetch<QueryResponse>(query, params, {
      next: {
        revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
        tags,
      },
    });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    throw new Error("Failed to fetch data from Sanity");
  }
}