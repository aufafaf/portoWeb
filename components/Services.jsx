import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto font-Ovo mt-5 mb-12">
        I am a frontend developer from Indonesia, and also handle a backend
        program, start with one years of experience in multiple community
      </p>
      <div className="grid grid-cols-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-6">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:-translate-y-2 duration-500 hover:bg-lightHover hover:shadow-black cursor-pointer">
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 mt-5 text-sm">
              Read More{" "}
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
