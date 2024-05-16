import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import Hero from "./components/hero/page";
import LatestPost from "./components/mainComp/latestpost/page";



const POST_QUERY = `*[_type=="post"]`;



export default async function Home() {

  const posts = await sanityFetch<SanityDocument[]>({query: POST_QUERY});



  return (
    <main className="mt-2">
      <Hero></Hero>
      <LatestPost></LatestPost>
      <div ></div>
    </main>
  );
}
