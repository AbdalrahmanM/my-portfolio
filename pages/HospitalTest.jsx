import React from "react";
import Carshow1 from "../public/assets/projects/HospitalTest.jpg";
import Screen1 from "../public/assets/projects/Screen1.jpg";
import Screen2 from "../public/assets/projects/Screen2.jpg";
import Screen3 from "../public/assets/projects/Screen3.jpg";
import Screen4 from "../public/assets/projects/Screen4.jpg";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const HospitalTest = () => {
  return (
    <div className="w-full pl-[5rem]">
      {/* Header Section */}
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 rounded-b-lg" />
        <Image
          className="absolute z-1 rounded-b-lg"
          layout="fill"
          objectFit="cover"
          src={Carshow1}
          alt="Hospital Project Preview"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Hospital Full-Stack Site</h2>
          <h3>HTML / CSS / JavaScript / Bootstrap / ASP.NET Core MVC</h3>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        {/* Overview Section */}
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="my-4">Overview</h2>
          <p>
            Test Hospital is a multilingual hospital website developed using
            ASP.NET Core MVC. It is designed to provide an intuitive and modern
            experience for both patients and administrators. The platform
            includes:
            <br />
            <br />
            <strong>Public Website:</strong> multilingual support (Arabic,
            Turkish, English), department pages, doctor profiles, and blog/news
            section.
            <br />
            <strong>Admin Panel:</strong> add/edit/delete doctors, manage
            homepage sections, and publish blog posts.
            <br />
            <br />
            The site is fully responsive, built with Bootstrap, and supports
            both RTL and LTR layouts. (Note: Online appointment booking is not
            yet implemented.)
          </p>
          <Link href="https://www.youtube.com/watch?v=ztYhnhbjvn0&ab_channel=AbdalrahmanMuder">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
        </div>

        {/* Technologies List */}
        <div className="col-span-4 w-fit md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML / CSS / Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ASP.NET Core MVC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Grid Section with Lightbox */}
      <div className="max-w-[1240px] mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
        <PhotoProvider>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
            {[Screen1, Screen2, Screen3, Screen4].map((img, index) => (
              <PhotoView key={index} src={img.src}>
                <div className="w-full h-64 relative rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default HospitalTest;
