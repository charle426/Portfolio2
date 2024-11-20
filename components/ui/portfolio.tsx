import { Eye } from "lucide-react";
import stove from "../public/Screenshot (293).png";
import ggm from "../public/Screenshot (294).png";
import nairaMe from "../public/Screenshot (296).png";
import bitbit from "../public/Screenshot (298).png";
import nstve from "../public/Screenshot (4).png";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
export default function Portfolio(){
    return(
        <section id="portfolio" className="">
          
      <section
        id="portfolio"
        className=""
      >
        <div className="flex flex-col items-center justify-center w-full text-center ">
          <h1 className="sm:text-[2.5em] text-[2rem] font-semibold">PORTFOLIO</h1>
          <p className="max-w-[700px]"></p>
          <div className="h-[2px] mt-5 w-[110px] bg-accent mb-[30px] flex justify-center items-center">
            <div className="h-[4px] w-[40px] bg-primary"></div>
          </div>
        </div>
        <Carousel className="md:pl-24">
        <div className="flex justify-end *:w-[20em] relative w-full mb-10 px-8 *:h-12 items-end">
              <div className="flex items-center justify-end gap-2 ">
                 <CarouselPrevious className="relative bg-primary p-5 text-accent dark:text-slate-100" variant={"outline"}/>
                 <CarouselNext className="relative bg-primary p-5 text-accent dark:text-slate-100" variant={"outline"}/>
              </div>
            </div>
          <CarouselContent className="*:basis-[25em]">
          <CarouselItem className="flex flex-col gap-3">
            <div>
              <Image
                src={stove}
                alt="stove website made by akasintech"
                className="w-full rounded-md"
              />
            </div>
            <div>
              <p className="text-sm">
                This project was built to help solve to the problem of having to
                lift heavy LPG gas cylinders and going all the way to a gas
                station for a refill why not do get a refill from the comfort of
                your home in Africa
              </p>
              <p className="text-xs my-2">
                reactJS, Tailwind, framer-motion and Firebase
              </p>
              <p className="text-sm">
                <a
                  href="stove.netlify.app"
                  className="text-blue-500 text-xs"
                >
                  <Eye /> visit website
                </a>
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col gap-3">
            <div>
              <Image
                src={nairaMe}
                alt="stove website made by akasintech"
                className="w-full rounded-md"
              />
            </div>
            <div>
              <p className="text-sm">
                In collaboration with NairaMe I was able to built them a better
                website than what they once had
              </p>
              <p className="text-xs my-2">
                reactJS, Tailwind, framer-motion
              </p>
              <p className="text-sm">
                <a
                  href="nairame.netlify.app"
                  className="text-blue-500 text-xs"
                >
                  <Eye /> visit website
                </a>
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col gap-3">
            <div>
              <Image src={ggm} alt="website made by akasintech" className="w-full rounded-md" />
            </div>
            <div>
              <p className="text-sm">
                Built a ministries website to help promote my pastor`s ministry
                and vision
              </p>
              <p className="text-xs my-2">
                reactJS, Tailwind, framer-motion and Firebase
              </p>
              <p className="text-sm">
                <a href="ggm.netlify.app" className="text-blue-500 text-xs">
                  <Eye /> visit website
                </a>
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col gap-3">
            <div>
              <Image
                src={bitbit}
                alt="stove website made by akasintech"
                className="w-full rounded-md"
              />
            </div>
            <div>
              <p className="text-sm">
                Built a crypto website not fully for the purpose for trading but
                to encourage trading and convince people to download the bitbit
                app and trade
              </p>
              <p className="text-xs my-2">reactJS, Tailwind</p>
              <p className="text-sm">
                <a
                  href="bitbit.netlify.app"
                  className="text-blue-500 text-xs"
                >
                  <Eye /> visit website
                </a>
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col gap-3">
            <div>
              <Image
                src={nstve}
                alt="new stove website made by akasintech"
                className="w-full rounded-md"
              />
            </div>
            <div>
              <p className="text-sm">
                New updated Stove project that offers not just gasoline delivery but other services like waste disposal, e-commerce, bill payment, and even booking of flights and hotels 
              </p>
              <p className="text-xs my-2">NextJS, Typescript, Tailwind</p>
              <p className="text-sm">
                <a
                  href="nstve.netlify.app"
                  className="text-blue-500 text-xs"
                >
                  <Eye /> visit website
                </a>
              </p>
            </div>
          </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
        </section>
    )
}