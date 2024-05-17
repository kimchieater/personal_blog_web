import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";


const POST_QUERY = `*[_type == "post"]{title, date, "text":content[].children[].text} | order(date desc)`

const PostCards = async () =>{
  const post = await sanityFetch<SanityDocument[]>({query: POST_QUERY});
  
  return (
    <div className="mt-10 grid grid-cols-1 grid-rows-1 gap-6 md:grid-cols-2 md:grid-rows-2">
      <div className="border-[1px] border-solid border-neutral-950 ">
        <div className="flex justify-between p-5 border-b-[1px] border-solid border-neutral-950">
          <p>date</p>
          <p>Read link</p>
        </div>
        <div className="p-5">
          <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis aut et odio molestiae pariatur aperiam atque voluptatum deleniti animi?</h1>
          <div className="h-[120px]">
            image
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic assumenda explicabo eos autem laboriosam temporibus nisi. Dicta quas omnis, est, ad animi alias vel cumque aut voluptatibus nemo dolorem, adipisci ratione quidem eum tenetur odio excepturi cum. Vitae, eius ex.</p>
        </div>
      </div>
    </div>
  )
}

export default PostCards
