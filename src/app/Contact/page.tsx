import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="container h-[430px] bg-[#383838] flex flex-col items-start pt-10">
      <div className="text-left text-white mb-4">
        <h1 className="text-[32px] font-semibold font-['Poppins']">Get latest updates</h1>
        <h2 className="w-[313px] text-[#e9e6e6] text-base font-normal font-['Poppins'] mt-2">
          Subscribe to get my latest updates.
        </h2>
      </div>
      <div className="w-full text-center text-white text-[35px] font-bold font-['Poppins'] mb-4">
        Subscribe for latest Updates
      </div>
      <div className="flex w-full max-w-[750px] h-16 mb-5 gap-6 mx-20 justify-center">
        <input
          type="email"
          className="flex-grow h-full bg-transparent rounded-[20px] border border-[#d2d2d2] pl-4 pr-4"
          placeholder="Enter your email address"
        />
        <button className="text-black text-xl font-medium font-['Poppins'] hover:text-white bg-[#007BFF] rounded-full px-4 py-2">
          Subscribe
        </button>
      </div>
      <div className="flex w-full justify-between items-center mb-4 py-6">
        <div className="flex items-center">
          <FaPhone className="text-white text-2xl mr-2" />
          <div className="text-white text-xl font-semibold font-['Poppins']">+923323487941</div>
        </div>
        <div className="flex items-center">
          <MdEmail className="text-white text-2xl mr-2" />
          <div className="text-white text-xl font-semibold font-['Poppins']">uniqueluck68@gmail.com</div>
        </div>
        <a href="https://www.linkedin.com/in/sarfraz-ahmad-595428286/" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <GrLinkedin className="text-white text-2xl hover:text-[#0077B5] transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
