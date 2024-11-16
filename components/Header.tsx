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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

const antonio = Antonio({ subsets: ["latin"] });

export function Header() {
  const pathname = usePathname();
  const isLoggedIn = pathname.startsWith("/dashboard");

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={`text-3xl font-bold relative ${antonio.className}`}
              style={{ top: "-3px" }}>
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
          {isLoggedIn ? (
            <Link href="/dashboard">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://cdn.discordapp.com/attachments/1178848363819565077/1307447484460830861/IMG_5656.jpg?ex=673a56db&is=6739055b&hm=311b6b32bb836d5ed9f344d52016b12d95e27657c819df6ef57084263c0972b0&" />
                <AvatarFallback>H</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-700">
                  Log in
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
