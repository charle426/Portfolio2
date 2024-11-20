"use client"
import { Home, MailIcon, Server, User, File, X,} from "lucide-react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
export default function Navbar() {
    const [pageNav, setPageNav] = useState<string>("hero")
    console.log(pageNav)
    const handleScroll = (id : string) => {
        const section = document.getElementById(id) as HTMLElement;

        if (section instanceof HTMLElement) {
            section.scrollIntoView({ behavior: 'smooth' });
            setPageNav(id)
          } else {
            console.error(`Element with ID "${id}" not found or not an HTML element.`);
          }
      };
      useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                       if (entry.isIntersecting ) {
                        setPageNav(entry.target.id)
                      } else {
                        console.error(`Element with ID "" not found or not an HTML element.`);
                      } 
                    })
            },{ threshold: 0.3 })
            const heroSection = document.getElementById("hero") as HTMLElement;
            const aboutSection = document.getElementById("about") as HTMLElement;
            const resumeSection = document.getElementById("resume") as HTMLElement;
            const contactSection = document.getElementById("contact") as HTMLElement;
            const portfolioSection = document.getElementById("portfolio") as HTMLElement;
            observer.observe(heroSection)
            observer.observe(aboutSection)
            observer.observe(resumeSection)
            observer.observe(contactSection)
            observer.observe(portfolioSection)
            
      }, [])
  return (
    <section>
    <nav className="relative md:hidden w-full flex justify-end">
        <Drawer direction="left" >
            <DrawerTrigger className="fixed py-3 px-1 bg-primary text-white top-[60px] z-50 left-[-10px] rounded-md">
            <FaAngleRight/>
            </DrawerTrigger>
            <DrawerContent className="bg-accent">
            <section className="navbar duration-300 flex mt-8">
                <DrawerClose className="fixed p-2 bg-primary text-white top-[20px] z-50 right-3 rounded-full">
                    <X/>
                </DrawerClose>
        <div className="flex flex-col gap-5 items-start pl-5">
            <DrawerClose
            onClick={() => handleScroll("hero")}
              className={
                pageNav === "hero"
                  ? "bg-primary drop-shadow text-accent rounded-full group hover:gap-2 duration-300 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-accent hover:bg-primary hover:text-accent drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold h-10 w-10 flex justify-center items-center">
                <Home />
              </span>
              <span className="text-[18px] duration-300 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Home
              </span>
            </DrawerClose>
            <DrawerClose
            onClick={() => handleScroll("about")}
              className={
                pageNav === "about"
                  ? "bg-primary drop-shadow text-accent rounded-full group hover:gap-2 duration-300 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-accent hover:bg-primary hover:text-accent drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold h-10 w-10 flex justify-center items-center">
                <User />
              </span>
              <span className="text-[18px] duration-300 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                About
              </span>
            </DrawerClose>
            <DrawerClose
            onClick={() => handleScroll("resume")}
              className={
                pageNav === "resume"
                  ? "bg-primary drop-shadow text-accent rounded-full group hover:gap-2 duration-300 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-accent hover:bg-primary hover:text-accent drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold h-10 w-10 flex justify-center items-center">
                <File />
              </span>
              <span className="text-[18px] duration-300 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Resume
              </span>
            </DrawerClose>
            <DrawerClose
            onClick={() => handleScroll("portfolio")}
              className={
                pageNav === "portfolio"
                  ? "bg-primary drop-shadow text-accent rounded-full group hover:gap-2 duration-300 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-accent hover:bg-primary hover:text-accent drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold h-10 w-10 flex justify-center items-center">
                <Server />
              </span>
              <span className="text-[18px] duration-300 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Portfolio
              </span>
            </DrawerClose>
            <DrawerClose
            onClick={() => handleScroll("contact")}
              className={
                pageNav === "contact"
                  ? "bg-primary drop-shadow text-accent rounded-full group hover:gap-2 duration-300 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-accent hover:bg-primary hover:text-accent drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold h-10 w-10 flex justify-center items-center">
                <MailIcon />
              </span>
              <span className="text-[18px] duration-300 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Contact
              </span>
            </DrawerClose>
        </div>
      </section>
            </DrawerContent>
        </Drawer>
    </nav>
    <nav className="relative w-full hidden md:flex">
            <section className="navbar duration-300 z-[1000] fixed flex md:translate-x-0 translate-x-[300px] top-[20%] opacity-0 md:opacity-100">
        <div className="flex flex-col gap-5 items-start pl-5">
            <div
            onClick={() => handleScroll("hero")}
              className={
                pageNav === "hero"
                  ? "bg-primary drop-shadow text-accent rounded-full group hover:gap-2 duration-300 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-accent hover:bg-primary hover:text-accent drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold h-10 w-10 flex justify-center items-center">
                <Home />
              </span>
              <span className="text-[18px] duration-300 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Home
              </span>
            </div>
            <div
            onClick={() => handleScroll("about")}
              className={
                pageNav === "about"
                  ? "bg-primary drop-shadow text-accent rounded-full group hover:gap-2 duration-300 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-accent hover:bg-primary hover:text-accent drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold h-10 w-10 flex justify-center items-center">
                <User />
              </span>
              <span className="text-[18px] duration-300 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                About
              </span>
            </div>
            <div
            onClick={() => handleScroll("resume")}
              className={
                pageNav === "resume"
                  ? "bg-primary drop-shadow text-accent rounded-full group hover:gap-2 duration-300 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-accent hover:bg-primary hover:text-accent drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold h-10 w-10 flex justify-center items-center">
                <File />
              </span>
              <span className="text-[18px] duration-300 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Resume
              </span>
            </div>
            <div
            onClick={() => handleScroll("portfolio")}
              className={
                pageNav === "portfolio"
                  ? "bg-primary drop-shadow text-accent rounded-full group hover:gap-2 duration-300 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-accent hover:bg-primary hover:text-accent drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold h-10 w-10 flex justify-center items-center">
                <Server />
              </span>
              <span className="text-[18px] duration-300 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Portfolio
              </span>
            </div>
            <div
            onClick={() => handleScroll("contact")}
              className={
                pageNav === "contact"
                  ? "bg-primary drop-shadow text-accent rounded-full group hover:gap-2 duration-300 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
                  : "bg-accent hover:bg-primary hover:text-accent drop-shadow rounded-full group hover:gap-2 duration-200 flex items-center justify-center md:p-3 p-2 md:gap-0 gap-2 hover:w-auto"
              }
            >
              <span className="text-[20px] font-semibold h-10 w-10 flex justify-center items-center">
                <MailIcon />
              </span>
              <span className="text-[18px] duration-300 md:w-0 w-auto group-hover:w-auto overflow-hidden">
                Contact
              </span>
            </div>
        </div>
      </section>
    </nav>
    </section>
  )
}
