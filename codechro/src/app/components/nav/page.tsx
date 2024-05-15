
import Link from "next/link"

const Nav = () => {
  return(
    <div>
    <div className="flex justify-between items-center leading-2 pb-5">
      <Link href="/"><span className="font-bold text-xl">Code</span><span className="font-light">Chornicles</span></Link>
      <ul className="flex gap-2 text-lg">
        <Link href="/post">Posts</Link>
        <Link href="/aboutme">About Me</Link>
        <Link href="/dashboard" className="font-bold">Admin</Link>
      </ul>
    </div>
    <div className="flex gap-6 justify-stretch :">
        <div className="h-[1px] bg-neutral-950 flex-auto"></div>
        <div className="h-[1px] bg-neutral-950 flex-auto"></div>
      </div>
    </div>
  )
}

export default Nav