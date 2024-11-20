"use client"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import {FaWhatsapp} from "react-icons/fa"
export default function Social_Nav(){
    return(
        <div className="w-full py-3 px-3 md:px-6 bg-accent mb-3">
            <div className="flex justify-between text-primary font-medium text-2xl items-center">
                <h1 onClick={() => window.scrollTo(0, 0)} className="cursor-pointer">
                AKASINTECH
            </h1>
            <div>
            <div className="flex items-center gap-1 md:gap-3 w-full shrink">
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/charles_akachi">
            <div className="rounded-full w-[35px] h-[35px] text-[18px] flex items-center justify-center bg-primary text-white shadow">
              <Twitter />
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/akasintech?igsh=YzIjTk1oDg3Zg==">
            <div className="rounded-full w-[35px] h-[35px] text-[18px] flex items-center justify-center bg-primary text-white shadow">
              <Instagram />
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61565756834268">
            <div className="rounded-full w-[35px] h-[35px] text-[18px] flex items-center justify-center bg-primary text-white shadow">
              <Facebook />
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/qr/S6NAECTPRBB4J1">
            <div className="rounded-full w-[35px] h-[35px] text-[18px] flex items-center justify-center bg-primary text-white shadow">
              <FaWhatsapp />
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/uzoma-akachi-664696281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <div className="rounded-full w-[35px] h-[35px] text-[18px] flex items-center justify-center bg-primary text-white shadow">
              <Linkedin />
            </div>
          </a>
        </div>
            </div>
            </div>
            
        </div>
    )
}