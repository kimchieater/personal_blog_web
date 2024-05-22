'use client'

import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useState } from "react";



const List = () => {

  const [posts, setPosts] = useState<SanityDocument[]>([])  
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;
  
  useLayoutEffect(()=>{
    client.fetch(`
        *[_type == "post"]{title, "slug": slug.current, tech, date, "text": array::join(content[].children[].text, " ")} | order(date desc)
      `).then((data) => setPosts(data)).catch(console.error)
  }, [])


  const handleNext = () => {
    if (startIndex + itemsPerPage < posts.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };


  const handlePrevious = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="mt-5">
        {posts.slice(startIndex, startIndex + itemsPerPage).map((a, i) => (
          <div className="flex" key={i}>
            <Link href={`/posts/${a.slug}`} className="flex-1">
              {a.title}
            </Link>
            <p className="flex-1">{new Date(a.date).toLocaleDateString()}</p>
            <p className="flex-1">{a.tech}</p>
          </div>
        ))}
        <div className="bg-neutral-950 h-[1px] w-[200px] mx-auto my-5"></div>
        <div className="flex justify-center gap-5 items-center">
          <button
            className="border border-neutral-950 rounded-sm py-2 px-3"
            onClick={handlePrevious}
            disabled={startIndex === 0}
          >
            left
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= posts.length}
            className="border border-neutral-950 rounded-sm py-2 px-3"
          >
            right
          </button>
        </div>
      </div>
    </div>
  );
};

export default List