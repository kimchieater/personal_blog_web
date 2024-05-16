import React from "react";
import {SanityDocument} from 'next-sanity';


interface LatestPostProps {
  posts: SanityDocument[];
}


const LatestPost: React.FC<LatestPostProps> = ({posts}) =>{
  return(
    <div className="mt-[100px] border-solid border-4 border-neutral-900 grid grid-cols-1 grid-rows-10">
      <div className="border-solid border-4 border-neutral-600 p-5 bg-red-700"></div>
      <div className="border-solid border-4 border-neutral-600 p-5 bg-red-700"></div>
      <div className="border-solid border-4 border-neutral-600 p-5 bg-red-700"></div>
      <div className="border-solid border-4 border-neutral-600 p-5 bg-red-700"></div>
      <div className="border-solid border-4 border-neutral-600 p-5 bg-red-700"></div>
      
    </div>
  )
}

export default LatestPost;