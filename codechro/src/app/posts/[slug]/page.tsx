import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { fetchPost } from '@/sanity/fetchPost';
import { client } from '@/sanity/client';
import Link from 'next/link';

// This function gets called at build time
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const slugs = await client.fetch(query);

  return slugs.map((slug: { slug: string }) => ({
    slug: slug.slug,
  }));
}

// This function fetches the post data based on the slug
async function getPost(slug: string) {
  const post = await fetchPost(slug);
  if (!post) {
    notFound();
  }
  return post;
}



export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  return (
    <article className="mt-10 px-10 animate-fadeIn">
      <div>
      <Link href="/posts" className="underline">Go back</Link>
      <h1 className="text-[2rem] font-bold mb-3">{post.title}</h1>
      <div>
      <p>{new Date(post.date).toLocaleDateString()}</p>

      </div>
      </div>
      <div className="h-[300px] w-[100%] mt-5">
      { post.imageUrl && (
        <img className="object-cover h-[100%] w-[100%]"
          src={post.imageUrl}
          alt={post.imageUrl}
        />
      )}
      </div>
            <div className="mt-[30px] flex justify-center">
        <div className="h-[2px] w-[100px] bg-black"></div>
      </div>
      <div className="mt-5 tracking-widest">
        <h1>{post.text}</h1>

      <div></div>
      </div>
    </article>
  );
}