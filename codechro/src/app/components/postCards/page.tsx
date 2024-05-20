import { SanityDocument } from "next-sanity";
import { client, sanityFetch, urlFor } from "@/sanity/client";
import Link from "next/link";



const POST_QUERY = `*[_type == "post"] | order(date desc)[0...4] {
  _id,
  "text": array::join(content[].children[].text, " "),
  slug,
  date,
  title,
  tech,
  "imageUrl": image.asset->url,
}`;

const PostCards = async () => {
  const posts = await sanityFetch<SanityDocument[]>({ query: POST_QUERY });

  return (
    <div className="mt-10 grid grid-cols-1 grid-rows-1 gap-6 md:grid-cols-2 md:grid-rows-2 animate-fadeIn">
      {posts.map((post) => {
        const imageUrl = post.imageUrl ? urlFor(post.imageUrl) : null;
        return (
          <div
            key={post._id}
            className="border-[1px] border-solid border-neutral-950 rounded-sm"
          >
            <div className="flex justify-between p-5 border-b-[1px] border-solid border-neutral-950">
              <p>{new Date(post.date).toLocaleDateString()}</p>
              <Link href={`/posts/${post.slug.current}`}>Read more</Link>
            </div>
            <div className="p-5">
              <h1 className="font-bold text-2xl">{post.title}</h1>
              <div className="max-h-[120px] h-[120px] overflow-hidden my-5 rounded-sm">
                {imageUrl && (
                  <img
                    src={imageUrl.width(800).url()}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <p>{post.text.slice(0, 300)} ...</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCards;