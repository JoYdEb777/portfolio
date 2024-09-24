import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          Wizard of Design
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Joydeb Roy is a web developer passionate about crafting innovative digital experiences. 
          Proficient in JavaScript, React.js, Next.js, Python, PHP, and MongoDB, he leverages his technical skills to build robust and user-friendly web applications. 
          With a strong foundation in data structures and algorithms, he ensures his creations are both functional and performant.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
          
</ItemLayout>

<ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=bootstrap,css,git,github,html,js,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,react,tailwind,threejs,vercel,vscode`}
            alt="Joydeb"
            loading="lazy"
          />
        </ItemLayout>   
      </div>
    </section>
  );
};

export default AboutDetails;
