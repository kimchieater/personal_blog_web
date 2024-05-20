import { SanityDocument } from "next-sanity";
import { client, sanityFetch } from "@/sanity/client";
import Link from "next/link";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

const POST_QUERY = `*[_type == "post"]{
  _id,
  "text": array::join(content[].children[].text, " "),
  slug,
  date,
  title,
  tech,
  image,
}|order(date desc)
`


const { projectId, dataset } = client.config();


export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const PostCards = async () =>{
  const posts = await sanityFetch<SanityDocument[]>({query: POST_QUERY});
  
  const {
    title,
    date,
    image,
    content,
  } = posts;



  return (
    <div className="mt-10 grid grid-cols-1 grid-rows-1 gap-6 md:grid-cols-2 md:grid-rows-2 animate-fadeIn">
      {
        posts.map((post, index)=>{
          

          return(
            <div className="border-[1px] border-solid border-neutral-950 rounded-md" >
        <div className="flex justify-between p-5 border-b-[1px] border-solid border-neutral-950" key={index}>
          <p>{new Date(post.date).toLocaleDateString()}</p>
          <Link href='/'>Read link</Link>
        </div>
        <div className="p-5">
          <h1 className="font-bold text-2xl">{post.title}</h1>
          <div className="max-h-[120px] h-[120px]">
            
          </div>
          <p>{post.text.slice(0,300)} ...</p>
        </div>
      </div>
          ) 
        })
      }
      
    </div>
  )
}

export default PostCards
