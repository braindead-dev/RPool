"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search events..."
        className="w-full pl-12 pr-4 py-6 text-lg rounded-full border-2 border-gray-200 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
    </div>
  );
}
