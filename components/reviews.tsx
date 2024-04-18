import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const reviews = [
  {
    name: "Customer 1",
    image: "home.jpg",
    reviewText: "Not only fast but our quality is also number one  ",
  },
  {
    name: "Customer 2",
    image: "home.jpg",
    reviewText: "Not only fast but our quality is also number one  ",
  },
  {
    name: "Customer 3",
    image: "home.jpg",
    reviewText: "Not only fast but our quality is also number one  ",
  },
  {
    name: "Customer 4",
    image: "home.jpg",
    reviewText: "Not only fast but our quality is also number one  ",
  },
  {
    name: "Customer 5",
    image: "home.jpg",
    reviewText: "Not only fast but our quality is also number one  ",
  },
  // Add more review objects as needed
];

export default function Reviews() {
  return (
    <>
     <div className="text-center my-12">
    <p className='block text-sm mb-4 text-customColor'>elit. Inventore </p>
      <p className='block text-3xl'>Your Favourite Food </p>
    
    </div>
    <div className='flex justify-center items-center m-12 bg-transparent'>
        
      <Carousel opts={{ align: "start" }} className="w-full max-w-4xl ">
        <CarouselContent className=''>
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 ">
              <div className="p-1">
                <Card className='shadow-xl'>
                  <CardHeader className='relative'>
                    <CardTitle className='absolute top-0 right-0 bottom-0 flex items-center justify-center m-4'>
                  <div className="flex items-center space-x-2 ">
  <FaStar className="text-black" />
  <FaStar className="text-black" />
  <FaStar className="text-black" />
  <FaStarHalfAlt className="text-black" />
  <FaStarHalfAlt className="text-black" />
</div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex h-10 items-center justify-center p-8">
                    <div>
                    <p className='block text-md text-bold text-center'>{review.reviewText.slice(0,40)}</p>
                    <p className='block text-md text-bold text-center'>{review.reviewText.slice(40)}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className='block text-md text-bold pl-6 py-2'>{review.name}</p>
                  </CardFooter>
                </Card>
              </div>

            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
   </>
  );
}
