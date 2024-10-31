import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto flex justify-between items-center bg-[#383838] pt-20">
      <div className="flex items-center">
        {/* Experience and Clients Counter */}
        <div className="w-[200px] h-[80px] top-20 bg-gradient-to-b from-[#65b5dd] to-[#366177] rounded-tl-lg rounded-bl-lg relative shadow-lg shadow-black animate-pulse ">
          <div className="absolute top-1/2 mx-28 transform -translate-y-1/2 text-white text-sm font-medium font-['Poppins'] leading-[23px]">
            Years<br />
            Experience
          </div>
          <div className="absolute mx-6 justify-center items-center text-white text-[60px] font-semibold font-['Poppins']">
            5+
          </div>
          <div className="w-[188px] h-[78px] relative left-64 bottom-36 shadow-lg shadow-black animate-pulse">
            <div className="w-[188px] h-[78px] left-0 top-0 absolute bg-gradient-to-b from-[#65b5dd] to-[#366177]" />
            <div className="left-[13px] top-[9px] absolute text-white text-[40px] font-semibold font-['Poppins']">120+</div>
            <div className="left-[110px] top-[19px] absolute text-white text-sm font-medium font-['Poppins'] leading-tight">Clients<br/>Projects</div>
          </div>
        </div>

        {/* About Image */}
        <Image
          src="/images/about-image.png"
          alt="about"
          width={300}
          height={300}
          className="rounded-[10px] -ml-32"
        />
      </div>

      {/* About Text and Heading */}
      <div className="text-white text-[26px] font-semibold font-['Poppins'] pl-16 pb-16">
        <h2>About</h2>
        <h3 className="w-[580px] h-[138px] text-[#e9e6e6] text-base font-normal font-['Poppins'] py-5">
          Having 5+ years of experience in graphic design and web development, I have worked with over 10 companies on diverse projects.
          <br />
          As a creative UI/UX designer and front-end web developer, I am dedicated to crafting exceptional digital experiences.
        </h3>
        <div className="flex items-center mt-8">
          <div className="w-[139px] h-[40px] p-2 bg-white rounded-[15px] shadow inline-flex hover:bg-gradient-to-b from-[#65b5dd] to-[#366177]">
            <div className="w-5 h-5 relative" />
            <div className="text-black text-[16px] font-medium font-['Poppins'] hover:text-[#ffffff] text-center">Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
