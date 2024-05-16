import CssLogo from "../svg/cssLogo";
import HtmlLogo from "../svg/htmlLogo";
import JsLogo from "../svg/jsLogo";
import ReactLogo from "../svg/reactLogo";
import NextLogo from "../svg/nextLogo";
import TailwindLogo from "../svg/tailwindLogo";
import NodeJsLogo from "../svg/nodejsLogo";
import SanityLogo from "../svg/sanityLogo";


const Hero = () =>{
  return(
    <div className="min-h-[400px] overflow-hidden flex mt-[200px] ">
      <div className="max-h-[200px] animate-slide flex gap-[100px]"> 
        <HtmlLogo></HtmlLogo>  
        <CssLogo></CssLogo>
        <JsLogo></JsLogo>
        <ReactLogo></ReactLogo>
        <NextLogo></NextLogo>
        <TailwindLogo></TailwindLogo>
        <NodeJsLogo></NodeJsLogo>
        <SanityLogo></SanityLogo>
      </div>
      <div className="max-h-[200px] animate-slide flex gap-[100px]"> 
        <HtmlLogo></HtmlLogo>  
        <CssLogo></CssLogo>
        <JsLogo></JsLogo>
        <ReactLogo></ReactLogo>
        <NextLogo></NextLogo>
        <TailwindLogo></TailwindLogo>
        <NodeJsLogo></NodeJsLogo>
        <SanityLogo></SanityLogo>
      </div>
    </div>
  )
}

export default Hero;