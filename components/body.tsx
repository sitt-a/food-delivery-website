import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function Body() {
  return (
    <>
      <div className="grid-container grid grid-cols-1 sm:grid-cols-2 ml-12 mr-12 mt-10 ">
        <div className="container1 text-white pl-16 pr-4 pt-6 sm:pl-28 sm:pr-16 sm:pt-32">
          <h1 className="text-black text-6xl mb-10">
            Meet,<span className="text-customColor text-bold">eat </span> and Enjoy our{" "}
            <span className="text-customColor text-bold">Food</span>{" "}
            <span className="text-customColor text-bold">Taste</span>
          </h1>
          <p className="text-black text-lg text-bold">
            Lorem Meet,<span >eat </span> and enjoy our food Meet
          </p>{" "}
          <p className="text-black text-md mb-8 text-bold">
            Lorem enjoy our food Meet,eat
          </p>
          <Link href="/menu">
            <Button className="bg-customColor  hover:border-opacity-90 hover:border hover:border-gray-500
    hover:bg-white hover:text-gray-950 ease-in w-[50%]  
    mx-auto rounded-3xl shadow-2xl">Get Started</Button>
          </Link>
        </div>
        <div className="relative">
          <div className="sticky top-0 flex items-center justify-center">
            <div className="mr-4 relative">
              <Image
                src="/homee.png"
                alt="big Image"
                width={580}
                height={470}
                className="rotate-animation "
              />
              <div className="absolute top-80  left-[-80]  bottom-0 flex items-center justify-center bg-white max-h-10 rounded-3xl p-1 mr-40">
                <div className='grid grid-cols-3'>
                
                <Avatar>
                      <AvatarImage src="/m2.jpg"alt="Small Image"  
                    />
                     
                    </Avatar>
               
                <div className='grid grid-rows-2 text-center m1-4 mt-4'>
                  
                  <p className="text-black text-sm">Sticky Text</p>
                  </div>
                <Avatar className='ml-8 mt-2'>
                      <AvatarImage src="/red.jpg"alt="Small Image"  width={50}
                    height={50}/>
                     
                    </Avatar>
              </div>
              </div>
              <div className="absolute top-90 left-80 right-0 bottom-10 flex items-center justify-start bg-white p-2 rounded-2xl">
                <div className="mr-4 ">
                  <Image
                    src="/pp2.avif"
                    alt="Small Image"
                    width={70}
                    height={70}
                    className="rounded-2xl"
                  />
                </div>
                <div className='grid grid-rows-3'><p className="text-black ">Sticky Text</p>
                <div className="flex items-center space-x-2 ">
  <FaStar className="text-yellow-600" />
  <FaStar className="text-yellow-600" />
  <FaStar className="text-yellow-600" />
  <FaStarHalfAlt className="text-yellow-600" />
  <FaStarHalfAlt className="text-yellow-600" />
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style >{`
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .rotate-animation {
          animation: rotation 8s infinite linear;
        }
      `}</style>
    </>
  );
}
