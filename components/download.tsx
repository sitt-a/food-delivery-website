import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Download() {
  return (
    <div className="flex justify-center mb-16 ">
      <Card className="w-full max-w-4xl shadow-xl">
      <CardContent className="flex flex-col items-center justify-center pt-8">
  <div className='text-center'>
    <p className="text-3xl font-bold py-5">Download Desktop App</p>
    <p className="text-3xl font-bold pb-5">and Get Started</p>
    <Button className="bg-customColor  hover:border-opacity-90 hover:border hover:border-gray-500
    hover:bg-white hover:text-gray-950 ease-in w-[70%] h-10 
    mx-auto rounded-3xl shadow-2xl">Get the App</Button>
  </div>
</CardContent>

        <CardFooter className="flex  justify-between px-32">
          <p className="text-2xl font-bold">Download Desktop App</p>
          <Image
            className="mb-2 mr-16"
            src="/order.svg"
            alt="Image description"
            width={150}
            height={150}
          />
        </CardFooter>
      </Card>
    </div>
  );
}