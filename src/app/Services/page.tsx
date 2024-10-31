import React from "react";

const Services = () => {
  return (
    <div className="container h-[550px] bg-[#383838] flex justify-center pt-20">
      <div className="text-center">
        {/* Heading */}
        <div className="text-white text-[32px] font-semibold font-['Poppins']">Services</div>
        <h2 className="w-full text-[#e9e6e6] text-base font-normal font-['Poppins'] mb-8">
          Following Services I am providing
        </h2>

        {/* Service Boxes */}
        <div className="grid grid-cols-3 gap-12">
          <div className="service-box relative w-[350px] h-[300px] transition-shadow duration-300 ease-in-out hover:shadow-sm hover:shadow-blue-500">
            <div className="absolute inset-0 bg-[#363636]" />
            <div className="absolute inset-0 flex justify-center items-center text-white text-[35px] font-bold font-['Poppins']">
              GRAPHICS<br />DESIGNING
            </div>
          </div>
          <div className="service-box relative w-[350px] h-[300px] transition-shadow duration-300 ease-in-out hover:shadow-sm hover:shadow-blue-500">
            <div className="absolute inset-0 bg-[#363636]" />
            <div className="absolute inset-0 flex justify-center items-center text-white text-[35px] font-bold font-['Poppins']">
              WEB<br />DEVELOPMENT
            </div>
          </div>
          <div className="service-box relative w-[350px] h-[300px] transition-shadow duration-300 ease-in-out hover:shadow-sm hover:shadow-blue-500">
            <div className="absolute inset-0 bg-[#363636]" />
            <div className="absolute inset-0 flex justify-center items-center text-white text-[35px] font-bold font-['Poppins']">
              UI/UX<br />DESIGNER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
