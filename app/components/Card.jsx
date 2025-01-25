import React from "react";
import cafe from "../../assets/cafe.png";
import cafe2 from "../../assets/cafe2.png";
import post from "../../assets/post.png";
import Image from "next/image";
import { montserrat } from "@/assets/fonts";

export default function Card() {
  return (
    <div className="pb-12 pt-5 w-screen" id="project">
      {/* lil card */}
      <div className="flex md:hidden flex-col gap-10">
        {/* card 1 */}
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white w-[85%] flex rounded-md items-center h-[35rem] shadow-md"></div>
          <div className="absolute w-[80%] ">
            <Image src={cafe2} alt="web-cafe" className="" />
            <div className="pt-3 flex gap-3">
              <a
                href="https://web-cafe-two.vercel.app/"
                className={montserrat.className}
              >
                <span className="text-lg py-3 underline underline-offset-4 duration-200 hover:text-blue-700 font-semibold">
                  Web Cafe
                </span>
              </a>
              <p className="font-bold text-gray-400">|</p>
              <a
                href="https://github.com/rreennn/web-cafe"
                className={montserrat.className}
              >
                <span className="text-lg py-3 underline underline-offset-4 duration-200 hover:text-blue-700 font-semibold">
                  Github
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white w-[85%] flex rounded-md items-center h-[18rem] shadow-md"></div>
          <div className="absolute w-[80%] ">
            <Image src={post} alt="web-cafe" className="" />
            <div className="pt-3 flex gap-3">
              <a
                href="https://uas-react-flood-post.vercel.app/"
                className={montserrat.className}
              >
                <span className="text-lg py-3 underline underline-offset-4 duration-200 hover:text-blue-700 font-semibold">
                  FloodPost
                </span>
              </a>
              <p className="font-bold text-gray-400">|</p>
              <a
                href="https://github.com/rreennn/UAS-React-FloodPost"
                className={montserrat.className}
              >
                <span className="text-lg py-3 underline underline-offset-4 duration-200 hover:text-blue-700 font-semibold">
                  Github
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* big card */}
      <div className="hidden md:flex flex-col gap-10">
        {/* card 1 */}
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white object-scale-down h-[35rem] w-[70rem] max-w-full relative flex justify-center rounded-md items-center shadow-md">
            <div className="absolute max-w-full">
              <Image src={cafe} alt="web-cafe" className="w-full object-scale-down" />
              <div className="pt-3 flex gap-3">
                <a
                  href="https://web-cafe-two.vercel.app/"
                  className={montserrat.className}
                >
                  <span className="text-lg py-3 underline underline-offset-4 duration-200 hover:text-blue-700 font-semibold">
                    Web Cafe
                  </span>
                </a>
                <p className="font-bold text-gray-400">|</p>
                <a
                  href="https://github.com/rreennn/web-cafe"
                  className={montserrat.className}
                >
                  <span className="text-lg py-3 underline underline-offset-4 duration-200 hover:text-blue-700 font-semibold">
                    Github
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white relative h-[35rem] w-[70rem] flex rounded-md justify-center items-center shadow-md">
            <div className="absolute max-w-full">
              <Image src={post} alt="web-cafe" className="w-full object-scale-down"  />
              <div className="pt-3 flex gap-3">
                <a
                  href="https://uas-react-flood-post.vercel.app/"
                  className={montserrat.className}
                >
                  <span className="text-lg py-3 underline underline-offset-4 duration-200 hover:text-blue-700 font-semibold">
                    FloodPost
                  </span>
                </a>
                <p className="font-bold text-gray-400">|</p>
                <a
                  href="https://github.com/rreennn/UAS-React-FloodPost"
                  className={montserrat.className}
                >
                  <span className="text-lg py-3 underline underline-offset-4 duration-200 hover:text-blue-700 font-semibold">
                    Github
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
