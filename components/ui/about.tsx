"use client"
import aboutme from "../public/me.jpg"
import Image from "next/image";
import {motion} from "framer-motion"
import { FaAngleRight } from "react-icons/fa";

export default function About(){
  const MotionImage = motion.create(Image)
    function calculateAge(birthdate: string): number {
        const birth = new Date(birthdate);
        const today = new Date();
        
        let age = today.getFullYear() - birth.getFullYear();
        const monthDifference = today.getMonth() - birth.getMonth();
  
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
          age--;
        }
  
        return age;
      }
      const age : number = calculateAge("2004-06-26")
        return (
    <section id="about" className="bg-accent py-20 px-3 mb-5 rounded-3xl">
      <div className="flex flex-col items-center justify-center w-full text-center ">
        <h1 className="sm:text-[2.5em] text-[2rem] font-semibold">ABOUT</h1>
        <p className="max-w-[700px]"></p>
        <div className="h-[2px] mt-5 w-[110px] bg-accent mb-[30px] flex justify-center items-center">
          <div className="h-[4px] w-[40px] bg-primary"></div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col item-center justify-center mb-10 md:gap-10 gap-5">
        <div className="w-full flex items-center justify-center">
          <MotionImage
          transition={{type: "spring", duration:"2.2s"}}
          initial={{borderRadius: "10px"}}
          whileInView={{borderRadius: "120px 100px 70px 83px / 101px 55px 70px 69px"}}
            src={aboutme}
            loading="lazy"
            alt="A Picture of Akasintech (Akachukwu charles)"
            className="w-full max-w-[300px] grayscale-0 drop-shadow hover:grayscale duration-150 rounded-full relative"
          />
        </div>
        <div className="w-full">
          <h3 className="text-[2rem] md:text-[2.8rem]">Frontend Developer</h3>
          <p className="max-w-[600px]">
            Started my tech journey early 2023 learnt a lot from very good
            tutors and even further self taught myself so i could learn more
            about what I love doing
          </p>
          <div className="flex mt-8 sm:flex-row justify-between gap-5 flex-col">
            <ul className="list-about w-full flex flex-col gap-5">
              <li className="flex gap-3 items-center">
                <FaAngleRight
                  className="text-primary"
                />
                <motion.div
                  initial={{opacity: 0.4, x: -5, }}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{type: "spring", duration: 1}}
                className="flex gap-2">
                  <h4 className="font-bold">Birthday:</h4>
                  <p>26 JUNE 2004</p>
                </motion.div>
              </li>
              <li className="flex gap-3 items-center">
                <FaAngleRight
                  className="text-primary"
                />
                <motion.div
                  initial={{opacity: 0.4, x: -5}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{type: "spring", duration: 1}}
                className="flex gap-2">
                  <h4 className="font-bold">Age:</h4>
                  <p>{age}</p>
                </motion.div>
              </li>
              <li className="flex gap-3 items-center">
                <FaAngleRight
                  className="text-primary"
                />
                <motion.div
                  initial={{opacity: 0.4, x: -5}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{type: "spring", duration: 1}}
                className="flex gap-2">
                  <h4 className="font-bold">Phone:</h4>
                  <p>+2348127187791</p>
                </motion.div>
              </li>
              <li className="flex gap-3 items-center">
                <FaAngleRight
                  className="text-primary"
                />
                <motion.div
                  initial={{opacity: 0.4, x: -5}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{type: "spring", duration: 1}}
                className="flex gap-2">
                  <h4 className="font-bold">City:</h4>
                  <p>Aba, Nigeria</p>
                </motion.div>
              </li>
            </ul>
            <ul className="list-about flex w-full flex-col gap-5">
              <li className="flex gap-3 items-center">
                <FaAngleRight
                  className="text-primary"
                />
                <motion.div
                  initial={{opacity: 0.4, x: -5}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{type: "spring", duration: 1}}
                className="flex gap-2">
                  <h4 className="font-bold">Freelance:</h4>
                  <p>Available</p>
                </motion.div>
              </li>
              <li className="flex gap-3 items-center">
                <FaAngleRight
                  className="text-primary"
                />
                <motion.div
                  initial={{opacity: 0.4, x: -5}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{type: "spring", duration: 1}}
                className="flex gap-2">
                  <h4 className="font-bold">Website:</h4>
                  <p>
                    <a href="akasintech.netlify.app" target="_blank" rel="noopener noreferrer">akasintech.com</a>
                  </p>
                </motion.div>
              </li>
              <li className="flex gap-3 items-center">
                <FaAngleRight
                  className="text-primary"
                />
                <motion.div
                  initial={{opacity: 0.4, x: -5}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{type: "spring", duration: 1}}
                className="flex gap-2">
                  <h4 className="font-bold">Email:</h4>
                  <p>webcheif@gmail.com</p>
                </motion.div>
              </li>
              <li className="flex gap-3 items-center">
                <FaAngleRight
                  className="text-primary"
                />
                <motion.div
                  initial={{opacity: 0.4, x: -5}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{type: "spring", duration: 1}}
                className="flex gap-2">
                  <h4 className="font-bold">Degree:</h4>
                  <p>None</p>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}