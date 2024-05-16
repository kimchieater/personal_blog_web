import React from "react";
import {SanityDocument} from 'next-sanity';


interface LatestPostProps {
  posts: SanityDocument[];
}


const LatestPost: React.FC<LatestPostProps> = ({posts}) =>{
  return(
    <div className="mt-[100px]">
      {

      }

    </div>
  )
}

export default LatestPost;