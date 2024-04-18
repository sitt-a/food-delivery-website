"use client"
import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import { Link2, X } from 'lucide-react';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleHideMenu = () => {
    setShowMenu(false);
  };

  return (
    <main className='bg-gray-100 flex justify-between items-center px-20 py-4 fixed top-0 w-full z-10 shadow-xl mb-16'>
      <div className='mr-80'>Logo</div>
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="px-2 py-6">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/service" legacyBehavior passHref>
                <NavigationMenuLink className="px-2 py-6">
                  Service
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/menu" legacyBehavior passHref>
                <NavigationMenuLink className="px-2 py-6">
                  Menu
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/cart" legacyBehavior passHref>
                <NavigationMenuLink className="px-2 py-6">
                  Cart
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className=''>
              <Link href="/signup" legacyBehavior passHref>
                <NavigationMenuLink className="px-8 py-2 ml-96 mr-2  text-white bg-customColor  hover:text-gray-950 hover:bg-white hover:customColor 
                hover:border-opacity-90 border hover:border hover:border-gray-500 w-[20%] rounded-lg shadow-2xl text-sm">
                  Sign In
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Toggle menu for small screens */}
      <div className="md:hidden relative">
        <Link2 size={24} style={{ display: showMenu ? 'none' : 'block' }} onClick={handleToggleMenu} />
        {showMenu && (
          <div className="absolute top-6 right-4 bg-white shadow-md ">
            <div className="flex justify-end p-2">
             
              <X size={20} onClick={handleHideMenu} />
            </div>
            <div>
            <NavigationMenu className=''>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="block px-4 py-2">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/service" legacyBehavior passHref>
                    <NavigationMenuLink className="block px-4 py-2">
                      Service
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/menu" legacyBehavior passHref>
                    <NavigationMenuLink className="block px-4 py-2">
                      Menu
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/cart" legacyBehavior passHref>
                    <NavigationMenuLink className="block px-4 py-2">
                      Cart
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/signup" legacyBehavior passHref>
                    <NavigationMenuLink className="block px-4 py-2">
                      Sign Up
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/signin" legacyBehavior passHref>
                    <NavigationMenuLink className="block px-4 py-2">
                      Sign In
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
