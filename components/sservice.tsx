import React from 'react';
import Image from 'next/image';

export default function Sservice() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
        <p className='block text-sm mb-4 text-customColor'>elit. Inventore </p>
          <p className='block text-3xl'>Your Favourite Food </p>
          <p className='block text-3xl '> Delivery Partner  </p>
        </div>
        <div className="grid grid-cols-3 gap-16 justify-center shadow-xl rounded-md">
        <div className="flex flex-col items-center">
            <div><Image  className="mb-2 " src="/cook.svg" alt="Image description" width={160} height={50} /></div>
            <div className="m-4 ">
            <p className='block text-2xl text-bold text-center'>Best chefs</p>
            <p className='block text-md '>Not only fast but our quality is also  </p>
            <p className='block text-md text-center'>number one</p>
             </div>
          </div>
          <div className="flex flex-col items-center">
            <div><Image className="mb-2 mr-16 " src="/order.svg" alt="Image description" width={300} height={150} />
            </div>
            <div className="m-4"> <p className='block text-2xl text-bold text-center'>Best chefs</p>
            <p className='block text-md'>Not only fast but our quality is also  </p>
            <p className='block text-md text-center'>number one</p> </div>
          </div>
       
          
          <div className="flex flex-col items-center">
            <div><Image  className="mb-2 " src="/delivery.svg" alt="Image description" width={350} height={350} /></div>
            <div className="m-4">
            <p className='block text-2xl text-bold text-center'>Best chefs</p>
            <p className='block text-md text-bold'>Not only fast but our quality is also  </p>
            <p className='block text-md text-bold text-center'>number one</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}