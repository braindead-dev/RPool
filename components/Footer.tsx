"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-5 flex justify-between border-t bg-slate-50">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Made by Henry, Wesley, Kieren, and Matthew at UC Riverside for
              Cutiehack
            </p>
          </div>
        </div>
      </div>
      <div className=" p-5 flex items-center space-x-4">
        <Button variant="ghost" className="text-gray-600 hover:text-gray-700">
          Log in
        </Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Get Started
        </Button>
      </div>
    </footer>
  );
}
