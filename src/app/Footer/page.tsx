import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#383838] py-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full border-t border-[#d2d2d2] mb-4"></div>
        <div className="flex justify-between items-center w-full max-w-[1440px] px-4">
          <div className="text-[#e9e6e6] text-base font-normal font-['Poppins']">
            © 2024 SFA. All rights reserved.
          </div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="SFA Logo"
              width={125}
              height={39}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;