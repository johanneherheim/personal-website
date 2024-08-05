import React from "react";
import Image from "next/image";
import meg from "@/components/meg.jpg";
import SocialLinks from "@/components/socials";

export default function HomePage() {
  return (
    <div className="flex flex-wrap justify-center m-8 mt-20 gap-16">
      <div className="overflow-hidden rounded-full border h-48 w-48">
        <Image
          src={meg}
          alt=""
          loading="lazy"
          className="h-48 w-48 object-cover rounded"
          fill={false}
        />
      </div>
      <div className="space-y-8 my-auto text-center sm:text-left">
        <h1>Titthei 👋🏼</h1>
        <p>
          Mitt navn er Johanne Blikberg Herheim, og eg studerer datateknologi
          ved Universitetet i Bergen 👩🏼‍💻.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}
