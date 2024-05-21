import Image from "next/image"




const AboutMe = ()=>{
  return(
    <div className="grid grid-cols-1 2xl:grid-cols-2 h-[100%] animate-fadeIn">
      <div className="object-fill justify-self-center mt-8">
        <Image src="/aboutMe.avif" width="500" height="500" className="rounded-md" alt=""></Image>
      </div>
      <div className="mt-8">
        <h1 className="font-bold text-[2rem]">Mathew "Jason" Jeong - Web Developer, Software Engineer, and Kimchi Eater</h1>
        
        <p className="mt-10"><span className="inline-block text-[2rem] ml-5">M</span>y name is Jason Jeong, and I am a passionate Web Developer. I have a deep love for coding and am always excited to learn more and build innovative solutions. My expertise lies in using modern technologies such as Next.js, Tailwind CSS, Express.js, MongoDB, and TypeScript. These tools enable me to create dynamic, responsive, and efficient web applications that meet the needs of users and businesses alike.</p>
        
        <p className="mt-2"><span className="inline-block text-[2rem] ml-5">I</span> enjoy every aspect of web development, from designing intuitive user interfaces to writing robust backend logic. Building seamless and engaging user experiences while ensuring the underlying code is efficient and scalable is what drives me. Whether I am working on the front end or the back end, I am always eager to tackle new challenges and enhance my skills. My goal is to continue growing as a developer and contributing to projects that make a meaningful impact.</p>
      </div>
    </div>
  )
}

export default AboutMe