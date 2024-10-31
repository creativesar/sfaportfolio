import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container h-[600px] bg-[#383838] flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-white text-[32px] font-semibold font-['Poppins']">Testimonials</h1>
        <h2 className="text-[#e9e6e6] text-[14px] font-normal font-['Poppins'] mt-2">
          What clients are thinking about me
        </h2>
        
        <div className="w-[1003px] h-[283px] bg-[#363636] rounded-2xl flex justify-center items-center mt-12 px-[42px]">
          <div className="w-[776px] h-[198px] relative flex">
            <Image
              className="rounded-full absolute left-0 top-[17px]"
              src="/images/ellipse-25.svg"
              alt="Client"
              width={181}
              height={181}
            />
            <div className="w-[575px] h-[169px] ml-[201px] relative">
              <div className="text-center text-white text-2xl font-bold font-['Poppins']">Hannah Schmitt</div>
              <p className="text-white text-base font-normal font-['Poppins'] mt-[38px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.
                Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit
                cursus pellentesque enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
