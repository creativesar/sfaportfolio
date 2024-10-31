import React from "react";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    { image: "/images/project-01.png", title: "Count Town Timer", link: "https://countdowntimer-alpha.vercel.app/" },
    { image: "/images/project-02.png", title: "Hello World", link: "https://helloworld-bay-ten.vercel.app/" },
    { image: "/images/project-03.png", title: "Governor House Card", link: "https://giaiccard.vercel.app/" },
  ];

  return (
    <section className="bg-[#383838] py-16">
      <div className="container mx-auto">
        <h2 className="text-white text-3xl font-bold font-['Poppins'] mb-2">Projects</h2>
        <p className="text-[#e9e6e6] text-lg font-normal font-['Poppins'] mb-12">Following Projects I have done</p>
        <div className="grid grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div className="group relative" key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={392}
                  height={252}
                  layout="responsive"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <h3 className="text-white text-lg font-bold font-['Poppins']">{project.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;