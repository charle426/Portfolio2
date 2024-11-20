import About from "@/components/ui/about";
import Certs from "@/components/ui/cert";
import Contact from "@/components/ui/contact";
import Hero from "@/components/ui/hero";
import Portfolio from "@/components/ui/portfolio";
import Resume from "@/components/ui/resume";
import Skills from "@/components/ui/skills";
import Social_Nav from "@/components/ui/social-nav";
import { ModeToggle } from "@/components/ui/toogle";

export default function Home() {
  return (
    <>
    <Social_Nav/>
    <ModeToggle/>
      <div className="px-5">
        <Hero/>
        <About/>
      </div>
      <Certs/>
      <Skills/>
      <div className="px-5">
        <Resume/>
      </div>
        <Portfolio/>
      <div className="px-5">
         <Contact/>
      </div>
       
      
    
    </>
  );
}
