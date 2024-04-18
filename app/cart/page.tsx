// CartPage.js
"use client"
import { useStore } from "../store/store";

// CartPage.js
import { useRouter } from 'next/navigation'
import { useCart } from "./cartlist";
// Rest of the code...

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardFooter} from '@/components/ui/card';
import { removeFromCart } from "./remove";
import { useState,useEffect } from "react";


export default function CartPage() {
  const router = useRouter(); // Initialize the useRouter hook
  const cartItems = useStore((state) => state.cartItems);
  const Carts = useCart();
  const handleGoBack = () => {
    router.back(); // Navigate back to the previous page
  };
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowEmptyCartMessage(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
<div className="flex justify-center m-12">
  {/* Add the back arrow */}
  <button className="absolute top-20 left-10 mt-4 ml-4" onClick={handleGoBack}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <div className="flex justify-center w-150">
    <div className="grid grid-cols-1 w-full gap-8">
      {Carts.map((Cart) => (
        <Card className="shadow-md" key={Cart.id}>
          <div className="flex justify-between">
            <div className="w-[50%]">
              <Image className="ml-6 pl-2" src={`/${Cart.image}`} alt="Image description" width={150} height={80} />
            </div>
         
            <div className="text-center  flex justify-center items-center mr-32 ">
                <h3>{Cart.title}</h3>
                
              
              
            </div>
            <div className="flex justify-center items-center mr-6 ">
                <Button onClick={() => removeFromCart(Cart.id)}>Remove Item</Button>
              </div>
          </div>
        </Card>
      ))}
      {Carts.length === 0 && showEmptyCartMessage && (
        <div className="flex justify-center items-center">
          <p className="block">Empty cart</p>
        </div>
      )}
    </div>
  </div>
</div>
  );
}