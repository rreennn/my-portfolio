import React from "react";
import { alegreya } from "@/assets/fonts";
import divider from "../../assets/divider.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="" id="about">
      {/* lil screen */}
      <div className="md:hidden h-[70vh] flex px-16 items-center gap-3 justify-center flex-col">
        <p className={alegreya.className}>
          <span className="text-4xl">
            Hi! I'm{" "}
            <span className="text-red-400 font-bold">Keren Karenaningtyas</span>
          </span>
        </p>
        <p className={alegreya.className}>
          <span className="text-lg">
            I'm currently a student in Dian Nuswantoro University
          </span>
        </p>
        <p className={alegreya.className}>
          <span className="text-lg">
            Interested in web development,{" "}
            <span className="text-red-400">
              especially front-end development
            </span>
          </span>
        </p>
        <div className="flex gap-3">
          <a
            href="#project"
            className="w-32 mt-4 px-1 py-2 font-semibold rounded-full bg-black text-white border-2 border-white hover:bg-white hover:text-black hover:border-black duration-200 "
          >
            My Projects
          </a>
          <a
            href="https://docs.google.com/document/d/1_F45qIV-6DRcgfIL5HpH8I_NxIRANTK0/edit?usp=sharing&ouid=112297824591728088121&rtpof=true&sd=true"
            className="w-32 mt-4 px-1 py-2 font-semibold rounded-full bg-black text-white border-2 border-white hover:bg-white hover:text-black hover:border-black duration-200 "
          >
            My Resume
          </a>
        </div>
      </div>

      {/* big screen */}
      <div className="hidden md:flex h-[60vh] flex-col justify-center px-24 gap-1 ">
        <p className={alegreya.className}>
          <span className="text-4xl">
            Hi! I'm{" "}
            <span className="text-red-600 font-bold">Keren Karenaningtyas</span>
          </span>
        </p>
        <p className={alegreya.className}>
          <span className="text-lg">
            I'm currently a student in Dian Nuswantoro University
          </span>
        </p>
        <p className={alegreya.className}>
          <span className="text-lg">
            Interested in web development,{" "}
            <span className="text-red-600">
              especially front-end development
            </span>
          </span>
        </p>
        <div className="flex gap-3">
          <a
            href="#project"
            className="text-center w-32 mt-4 px-1 py-2 font-semibold rounded-full bg-black text-white border-2 border-white hover:bg-white hover:text-black hover:border-black duration-200 "
          >
            My Projects
          </a>
          <a
            href="https://docs.google.com/document/d/1_F45qIV-6DRcgfIL5HpH8I_NxIRANTK0/edit?usp=sharing&ouid=112297824591728088121&rtpof=true&sd=true"
            className="text-center w-32 mt-4 px-1 py-2 font-semibold rounded-full bg-black text-white border-2 border-white hover:bg-white hover:text-black hover:border-black duration-200 "
          >
            My Resume
          </a>
        </div>
      </div>
      <div className="flex justify-center pb-3">
        <Image src={divider} alt="divider" width={200} />
      </div>
    </div>
  );
}
