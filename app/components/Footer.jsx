import React from "react";
import email from "../../assets/email.svg";
import github from "../../assets/github.svg";
import discord from "../../assets/discord.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black text-white" id="links">
      <div className="px-8 py-5 flex flex-col gap-3 text-white">
        <p className="underline underline-offset-4 pb-3 text-lg font-semibold">Find me!</p>
        <a href="https://github.com/rreennn" className="flex gap-3 items-center hover:font-semibold duration-200">
          <Image src={github} alt="github-icon" width={25} />
          Github
        </a>
        <a href="mailto:kerenkaren1704@gmail.com" className="flex gap-3 items-center hover:font-semibold duration-200">
          <Image src={email} alt="instagram-icon" width={25} />
          Email
        </a>
        <a href="https://discordapp.com/users/978702025388879912" className="flex gap-3 items-center hover:font-semibold duration-200">
          <Image src={discord} alt="discord-icon" width={25} />
          Discord
        </a>
      </div>
    </div>
  );
}
