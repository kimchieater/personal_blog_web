import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import Hero from "./components/hero/page";
import Link from "next/link";


const POST_QUERY = `*[_type == 'post']{_id, title, slug, date, content}|order(date desc)`;


export default async function Home() {

  const posts = await sanityFetch<SanityDocument[]>({query: POST_QUERY});

  console.log(posts)
  return (
    <main className="mt-2">
      <Hero></Hero>
      
    </main>
  );
}
