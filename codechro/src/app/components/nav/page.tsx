
import Link from "next/link"

const Nav = () => {
  return(
    <div className="">
    <div className="flex justify-between items-center leading-2 pb-5">
      <Link className="hover:tracking-[.6rem] transition-all duration-300" href="/"><span className="font-bold text-xl">Code</span><span className="font-light">Chronicles</span></Link>
      <ul className="flex gap-7 text-lg">
        <Link href="/posts">Posts</Link>
        <Link href="/aboutme" className="font-bold">About Me</Link>
      </ul>
    </div>
    <div className="flex gap-6 animate-fadeIn">
        <div className="h-[1px] bg-neutral-950 flex-auto"></div>
        <div className="h-[1px] bg-neutral-950 flex-auto"></div>
      </div>
    </div>
  )
}

export default Nav