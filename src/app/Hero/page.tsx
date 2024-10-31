import React from 'react';
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container h-[720px] bg-[#363636] flex justify-between">
      <div className="flex flex-col items-start">
        <div className="text-white text-[24px] font-medium font-['Poppins'] pt-40">SARFRAZ AHMAD,</div>
        <div className="text-white text-[70px] font-bold font-['Poppins']">CREATIVE</div>
        <div className="text-white text-[38px] font-semibold font-['Poppins']">
          WEB DEVELOPER & <br /> GRAPHIC DESIGNER.
        </div>
        <div className="text-white text-base font-medium font-['Poppins']">
          I am a professional web developer and graphic <br /> designer having 5+ years of work experience.
        </div>
        <div className="w-[139px] h-[50px] p-2 bg-white rounded-[15px] shadow gap-2 inline-flex mt-4 hover:bg-gradient-to-b from-[#65b5dd] to-[#366177]">
          <div className="w-5 h-5 relative" />
          <div className="text-black text-xl font-medium font-['Poppins'] hover:text-[#ffffff]">Hire Me</div>
        </div>
      </div>

      <div className="flex justify-around items-center mt-20">
        <Image
          src="/images/hero-image.png" // Replace with your actual image path
          alt="Hero Image"
          width={612}
          height={619}
          className="w-[650px] h-[640px]"
          style={{ zIndex: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
