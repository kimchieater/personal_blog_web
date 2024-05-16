import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import Hero from "./components/hero/page";
import LatestPost from "./components/mainComp/latestpost/page";







export default async function Home() {


  return (
    <main className="mt-2">
      <Hero></Hero>
      <LatestPost></LatestPost>
      <div></div>
    </main>
  );
}
