import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import {FaWhatsapp} from "react-icons/fa"

export default function Footer(){
    return (
      <section className="bg-accent rounded-t-3xl mt-10">
        <div className="flex flex-col justify-center items-center py-7">
          <h2 className="font-semibold mb-8 md:text-[3rem] text-[2rem]">
            AkasinTech
          </h2>
          <div className="w-full justify-center items-center my-5">

          <div className="flex items-center justify-center gap-3 w-full shrink">
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
          <div className="mb-3">
            <p>
              © Copyright <b>AkasinTech</b>. All Rights Reserved
            </p>
          </div>
          <div>
            <p>Designed by AkasinTech</p>
          </div>
        </div>
      </section>
    );
}