import { client, sanityFetch, urlFor } from "@/sanity/client"
import { SanityDocument } from "next-sanity";
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


const Posts = async ()=>{

  const posts = await sanityFetch<SanityDocument[]>({ query: POST_QUERY });
  
  return(
    <div className="grid grid-cols-1 mt-10 gap-5 animate-fadeIn">

      {
        posts.map((a,i) => {
          const imageUrl = a.imageUrl ? urlFor(a.imageUrl) : null;
          const summary = a.text.slice(0,200);

          return(
            <div className="border-solid border rounded-sm border-neutral-950" key={a._id}>
            <div className="border-b border-b-neutral-950">
            <h1 className="p-2">{a.title}</h1>
            </div>
            <div className="flex justify-between p-2">
            
            <h3>{new Date(a.date).toLocaleDateString()}</h3>
            <Link href={`/posts/${a.slug.current}`}>Read more</Link>
            </div>
            <div className="h-[100px] w-full object-cover">
              {imageUrl && (
                  <img
                    src={imageUrl.url()}
                    alt={a.title}
                    className="w-full h-full object-cover"
                  />
                )}
            </div>
            <p className="p-2">{summary}...</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Posts