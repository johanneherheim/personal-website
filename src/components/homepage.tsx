import React from "react";
import Image from "next/image";
import me from "src/components/images/me.jpeg";
import SocialLinks from "./socials";

export default function HomePage() {
  return (
    <div className="m-16 sm:mt-20 w-auto sm:w-2/3 my-auto">
      <div className="flex gap-10">
        <div className="overflow-hidden rounded-full border h-40 w-40 hidden sm:block flex-none my-auto">
          <Image
            src={me}
            alt=""
            loading="lazy"
            className="h-40 w-40 object-cover rounded"
          />
        </div>
        <div>
          <h2 className="pb-5 border-b hidden sm:block">Titthei 👋🏼</h2>
          <div className="overflow-hidden rounded-full border h-40 w-40 sm:hidden block my-10 mx-auto">
            <Image
              src={me}
              alt=""
              loading="lazy"
              className="h-40 w-40 object-cover rounded"
            />
          </div>
          <p className="pb-5 sm:pt-5 sm:border-none text-center sm:text-left">
            Mitt navn er Johanne, og eg studerer informatikk; datatryggleik ved
            Universitetet i Bergen 👩🏼‍💻.
          </p>
          <SocialLinks />
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
