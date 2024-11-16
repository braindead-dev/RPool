"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={`text-3xl font-bold relative ${antonio.className}`}
              style={{ top: "-3px" }} // adjusted to make it look correctly centered
            >
              <span className="text-yellow-500">R&apos;</span>
              <span className="text-blue-600">Pool</span>
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-6">
              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-600 hover:text-gray-700">
                    Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-700">
                Log in
            </Button>
          </Link>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
