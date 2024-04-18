import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { useMenus } from './menu';

export default function Menulist({ store }) {
  const { cartItems, addToCart } = store;
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const menus = useMenus();
  const filteredMenus = searchQuery
    ? menus.filter(menu => menu.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : menus;

  const handleAddToCart = (menu) => {
    addToCart(menu);
    router.push('/cart'); // Redirect to the cart page after adding an item
  };

  return (
    <>
      <div className='m-6 flex justify-center '>
        <Card className="flex justify-between items-center w-[83%] h-40 bg-gray-100">
          <CardContent className="pl-12 pr-32">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <p className="flex flex-start text-3xl text-center py-2">Find What you want to eat</p>
                  <Input
                    id="name"
                    className="flex flex-wrap w-[550px] h-[45px] rounded-xl shadow-md text-md p-4"
                    placeholder="Search here"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <p className="text-3xl p-16">20% discount for two weeks</p>
        </Card>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[80%] gap-8">
          {filteredMenus.map((menu) => (
            <Link href={`/menus/${menu.id}`} key={menu.id}>
              
                <Card className="shadow-xl">
                  <div className="flex items-center justify-center">
                    <Image
                      className="w-[50%]"
                      src={`/${menu.image}`} // Prepend a leading slash to the image source path
                      alt="Image description"
                      width={150}
                      height={80}
                    />
                  </div>
                  <Link href={`/menus/${menu.id}`}>
                    <div className="text-center">
                      <h3>{menu.title}</h3>
                      <div className={`${menu.priority}`}>
                        {menu.priority} priority
                      </div>
                    </div>
                  </Link>
                  <CardFooter className="flex justify-between mt-2">
                    <Button asChild>
                      <Link href={`/order?productId=${menu.id}`} passHref>order now</Link>
                    </Button>
                    <Link href="/cart" onClick={() => handleAddToCart(menu)}>
                      <AiOutlineShoppingCart size={24} />
                    </Link>
                  </CardFooter>
                </Card>
             
            </Link>
          ))}
          {filteredMenus.length === 0 && (
            <p className="text-center">No matching menus found!</p>
          )}
        </div>
      </div>
    </>
  );
}