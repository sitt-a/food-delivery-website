"use client"
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation'
import { useDetail } from './detail';
import {useStore} from "../../store/store"
import Link from "next/link"
 
export default  function menuDetails({ params }) {
   const id = params.id
   const store = useStore() ;
   const { cartItems, addToCart } = store;
  const menu = useDetail(id);
  const router = useRouter(); 
  const handleGoBack = () => {
    router.back(); // Navigate back to the previous page
  };
  const handleAddToCart = (menu) => {
    addToCart(menu);
    router.push('/cart'); // Redirect to the cart page after adding an item
  };

  return (
    <>  <button className="absolute top-20 left-10 mt-4 ml-4" onClick={handleGoBack}>
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
    <main className="grid grid-cols-2 m-4 ">
      <div>
      <Image
             className="ml-24 mt-16"
                  src={`/${menu.image}`} 
                  alt="Image description"
                  width={540}
                  height={480}
                />
      </div>
      <div className=" mt-48 ">
        <div className="">
          <h3 className="" >{menu.title}</h3>
          <h3 className="mb-4" >{menu.title}</h3>
       
        <p className="">{menu.body }</p>
        <p className="mb-6">{menu.body }</p>
        
        <div className="flex items-center space-x-2 mb-6 ">
  <FaStar className="text-black" />
  <FaStar className="text-black" />
  <FaStar className="text-black" />
  <FaStarHalfAlt className="text-black" />
  <FaStarHalfAlt className="text-black" />
</div>
        </div>
        <div className="flex space-x-16 ">
        <Button asChild>
              <Link href={`/order?productId=${menu.id}`} passHref>Order now</Link>
            </Button>
        <Button onClick={() => handleAddToCart(menu)}> <FaShoppingCart className="text-center mt-3 " /> </Button>
       
        </div>
      </div>
    </main>
    </>
  )
}