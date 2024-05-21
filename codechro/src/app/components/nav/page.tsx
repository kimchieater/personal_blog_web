
import Link from "next/link"

const Nav = () => {
  return(
    <div className="">
    <div className="flex justify-between items-center leading-2 pb-5 text-xs xs:text-lg">
      <Link href="/"><span className="font-bold text-md xs:text-xl">Code</span><span className="font-light">Chronicles</span></Link>
      <ul className="flex gap-2 text-md">
        <Link href="/posts">Posts</Link>
        <Link href="/aboutme" className="font-bold">About Me</Link>
      </ul>
    </div>
    <div className="flex gap-5 animate-fadeIn items-center">
        <div className="h-[1px] bg-neutral-950 flex-auto"></div>
        <div className="h-[1px] bg-neutral-950 flex-auto"></div>
      </div>
    </div>
  )
}

export default Nav