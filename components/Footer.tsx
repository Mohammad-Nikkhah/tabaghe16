import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="w-full pt-20 pb-10" id="contact">
         <div className="w-full absolute left-0 -bottom-72 min-h-96">
         <img
             src="/footer-grid.svg"
             className="w-full h-full opacity-50"
          />
         </div>
         <div className="flex flex-col items-center">
              <h1 className="heading lg:max-w-[45vw]">
                Real Stories, Real Success: Learn from Tech  <span className="text-gray-500"> Innovators </span> 
              </h1> 
              <p className="text-white-200 text-center md:mt-10 my-5">
                   Discover the journeys of those who have turned their tech dreams into reality. Our podcast brings you firsthand experiences from industry leaders and startup founders who have navigated the challenges and triumphs of the tech world. Listen in and gain valuable insights to fuel your own success story.
              </p>
              <a href="#">
                <MagicButton
                   title="Let's get in touch"
                   icon={<FaLocationArrow/>}
                   position="right"
                />
              </a>
         </div>
         <div>
          <p className="py-10 text-center">Copyright ©</p>
          <p className="text-center">Made by ❤️ ☕️  <span className="text-gray-500">Mohammad Nikkhah</span> </p>
         </div>
      </footer>
    )
}

export default Footer;