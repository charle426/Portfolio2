"use client"
import Image from "next/image";
import img from "../public/church_me_cropped.jpg";
import TypingAnimation from "./typed";
import {motion} from "framer-motion"
export default function Hero() {
  const MotionImage = motion.create(Image)
  return (
    <section id="hero" className="">
      <div className="flex justify-center md:gap-20 min-h-[100vh] gap-8 md:flex-row-reverse flex-col-reverse items-center relative">
        <div className="flex flex-col gap-2 w-full">
          <div className="text-3xl md:text-5xl font-medium">
            <h2 className="text-primary text-5xl translate-y-[5px] mb-3 md:text-7xl">
              Hi
            </h2>
            <h2>Am Akachukwu Charles</h2>
          </div>
          <p className="text-primary text-small">Akachi for short 😉</p>
          <h3 className="text-xxl ">
            <TypingAnimation classname="text-3xl font-medium"/>
            
          </h3>
        </div>
        <div className="w-full min-h-[20em] flex justify-end">
          <div className="bg-transparent justify-center items-center flex rounded-full border-4 overflow-hidden p-1 m-1 md:h-[30em] md:w-[30em] border-primary border-spacing-2 w-auto h-fit">
            <MotionImage
            transition={{duration: "1.2", type: "spring"}}
            initial={{width: "50px", height: "50px"}}
            whileInView={{width: "auto", height: "auto"}}
              src={img}
              alt="A Picture Akachukwu Charles(Akasintech)"
              className="shrink-0 h-full rounded-full w-full md:h-[30em] md:w-[30em] aspect-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
