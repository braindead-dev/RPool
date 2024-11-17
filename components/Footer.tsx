import Link from "next/link";
import { Antonio } from "next/font/google";
import { Button } from "@/components/ui/button";

const antonio = Antonio({ subsets: ["latin"] });

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span
                className={`text-3xl font-bold relative ${antonio.className}`}
                style={{ top: "-3px" }}>
                <span className="text-yellow-500">R&apos;</span>
                <span className="text-blue-600">Pool</span>
              </span>
            </Link>
            <p className="text-gray-600">
              Connecting UCR students for cheaper and friendlier travels.
            </p>
          </div>

          <div></div> {/* 2 divs so that the first 3 columns r filled and the login buttons r on the right side all the way*/}
          <div></div>

          <div className="flex justify-end items-center space-x-4">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-gray-700">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </div>
          
        </div>
          
        <div className="mt-3 pt-5 text-center text-gray-600">
          <p>Made with ❤️ by Henry, Wesley, Kieren, and Matthew for CutieHack 2024</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} R&apos;Pool</p>
        </div>
      </div>
    </footer>
  );
}