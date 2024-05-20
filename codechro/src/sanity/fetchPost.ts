import { client } from "@/sanity/client";

export async function fetchPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    "text": array::join(content[].children[].text, " "),
    "slug": slug.current,
    date,
    title,
    tech,
    "imageUrl": image.asset->url
  }`;
  
  const params = { slug };

  const post = await client.fetch(query, params);
  return post;

}
