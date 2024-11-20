import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import Image from "next/image";
import frontendCert from "../public/frontend-cert.png"
import fullstack from "../public/fullstack.png"
import codathon from "../public/codathon.png"
export default function Certs(){
    return(
        <section id="certs my-40 ">
             <div className="flex flex-col items-center justify-center w-full text-center ">
          <h1 className="sm:text-[2.5em] text-[2rem] font-semibold">
           MY CERTIFICATIONS
          </h1>
          <div className="h-[2px] mt-5 w-[110px] bg-accent mb-[30px] flex justify-center items-center">
            <div className="h-[4px] w-[40px] bg-primary"></div>
          </div>
        </div>
        <div className="w-full overflow-hidden">

        <Carousel className="md:ml-20 relative">
            <div className="flex justify-end *:w-[20em] relative w-full mb-10 px-8 *:h-12 items-end">
              <div className="flex items-center justify-end gap-2 ">
                 <CarouselPrevious className="relative bg-primary p-5 text-accent dark:text-slate-100" variant={"outline"}/>
                 <CarouselNext className="relative bg-primary p-5 text-accent dark:text-slate-100" variant={"outline"}/>
              </div>
            </div>
           <CarouselContent className="*:basis-[20em] md:flex md:w-full md:justify-center md:items-center">
                <CarouselItem>
                <div className="flex flex-col gap-3">
                  <div>
                    <Image
                      src={frontendCert}
                      className="w-full rounded-md max-w-[20em]"
                      alt="Akasintech's webdeves frontend web development certificate image"
                    />
                  </div>
                  <div>
                    <p>
                      Certificate of achievement for successful completion of Frontend
                      Website Development Training in Webdeves
                    </p>
                    <p className="text-[13px] my-2">24th November 2023</p>
                  </div>
                </div>
                </CarouselItem>
                <CarouselItem>
                <div className="flex flex-col gap-3">
            <div>
              <Image
                src={fullstack}
                className="w-full rounded-md max-w-[20em]"
                alt="Akasintech's Innovation Growth hub(IGhub) Fullstack web development certificate image"
              />
            </div>
            <div>
              <p>
                This certificate was awarded to me upon
                completion of Innovation Growth Hub Developers and Netpreneurs
                Fellowship Fullstack Website Development Training
              </p>
              <p className="text-[13px] my-2">19th December 2023</p>
            </div>
          </div>
                </CarouselItem>
                <CarouselItem>
                <div className="flex flex-col gap-3">
            <div>
              <Image src={codathon} className="w-full rounded-md max-w-[20em]" alt="webdeves certificate participation in the 2023 codathon" />
            </div>
            <div>
              <p>
                For participating in Codathon 2023 <br />
                The Webdeves 3hrs long coding competition
              </p>
              <p className="text-[13px] my-2">Held on 21th November 2023</p>
            </div>
          </div>
                </CarouselItem>
           </CarouselContent>
        </Carousel>
        </div>
        </section>
    )
}