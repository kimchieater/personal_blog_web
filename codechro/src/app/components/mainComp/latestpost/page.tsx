import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import Link from "next/link";




const POST_QUERY = `*[_type == "post"]{title, date, "text":content[].children[].text} | order(date desc)`

const LatestPost = async () =>{
  const post = await sanityFetch<SanityDocument[]>({query: POST_QUERY});

  const summary = post[0].text[0].slice(0,155)



  return(
    <div className="mt-[100px]">
      <div className="flex gap-6 justify-stretch">
        <div className="h-[1px] bg-neutral-950 flex-auto"></div>
        <div className="h-[1px] bg-neutral-950 flex-auto"></div>
      </div>
      <div className="grid grid-cols-2 mt-[100px]">
      <h1 className="font-bold text-3xl">{post[0].title}</h1>
      <p>{`${summary}...`}</p>
      </div>
      <div className="flex justify-between mt-[20px]">
        <p>{new Date(post[0].date).toLocaleDateString()}</p>
        <Link href='/'>Read</Link>
      </div>
      <div className="mt-[100px] flex justify-center">
        <div className="h-[2px] w-[40px] bg-black"></div>
      </div>
    </div>
  )
}

export default LatestPost
