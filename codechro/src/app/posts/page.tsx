import { sanityFetch, urlFor } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

import List from "../components/list/page";

const POST_QUERY = `*[_type == "post"] | order(date desc)[0...4] {
  _id,
  "text": array::join(content[].children[].text, " "),
  slug,
  date,
  title,
  tech,
  "imageUrl": image.asset->url,
}`;

const Posts = async () => {
  const posts = await sanityFetch<SanityDocument[]>({ query: POST_QUERY });

  return (
    <div>
      <div>
        <List posts={posts}></List>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 animate-fadeIn mt-10">
        {posts.map((a, i) => {
          const summary = a.text.slice(0, 100);
          return (
            <div key={i} className="border border-neutral-950 py-2">
              <div className="flex justify-between px-3 mb-2">
                <h1 className="font-bold">{a.title}</h1>
                <p>{new Date(a.date).toLocaleDateString()}</p>
              </div>
              <div className="h-[200px] max-h-[200px]">
                <img src={a.imageUrl} className="object-cover w-[100%] h-[100%]"></img>
              </div>
              <p className="px-3">{summary}</p>
              <Link href={`/posts/${a.slug.current}`} className="justify-end flex px-3 font-bold">
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;