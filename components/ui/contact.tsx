"use client"
import { LocateFixed, Mail, PhoneCall } from "lucide-react";
import Form from "./contact-form";

export default function Contact(){
    return(
        <section id="contact" className="md:pl-20">
      <div className="flex flex-col items-center justify-center w-full text-center ">
        <h1 className="sm:text-[2.5em] text-[2rem] font-semibold">CONTACT</h1>
        <p className="max-w-[700px]"></p>
        <div className="h-[2px] mt-5 w-[110px] bg-accent mb-[30px] flex justify-center items-center">
          <div className="h-[4px] w-[40px] bg-primary"></div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-5 items-start">
        <div className="flex flex-col w-full max-w-[550px] gap-5">
          <div className="flex gap-3 group">
            <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-white duration-300">
              <PhoneCall />
            </div>
            <div>
              <h3 className="text-[23px] font-semibold">Call:</h3>
              <p className="text-[15px]">+234 81 271 877 91</p>
            </div>
          </div>
            <a href="mailto:webcheif01@gmail.com" className="flex gap-3 group">
               <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-white duration-300">
              <Mail />
            </div>
            <div>
              <h3 className="text-[23px] font-semibold">Email:</h3>
              <p className="text-[15px]">webcheif01@gmail.com</p>
            </div>
            </a>
           
          <div className="flex gap-3 group">
            <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-white duration-300">
              <LocateFixed />
            </div>
            <div>
              <h3 className="text-[23px] font-semibold">Location:</h3>
              <p className="text-[15px]">
                Abia State Nigeria
              </p>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
    )
}