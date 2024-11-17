import { EventGrid } from "@/components/EventGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";

const VideoBackground = dynamic(() => import("@/components/VideoBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <section className="py-20 px-4 text-center bg-gradient-to-b from-white to-blue-50">
        <h1 className="text-6xl font-bold mb-6">
          <div className="text-white-500">Make Friends, Save Gas</div>
        </h1>
        <div className="max-w-3xl mx-auto mb-12">
          <SearchBar />
        </div>
      </section> */}

      <section className="py-20 px-4 text-center overflow-auto">
        <VideoBackground />
        <h1 className="text-6xl font-bold mb-6">
          <div className="text-white">Make Friends, Save Gas</div>
        </h1>
        <div className="max-w-3xl mx-auto mb-12">
          <SearchBar />
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Popular Events</h2>
          <Link href="/events">
            <Button
              variant="outline"
              className="text-blue-600 hover:text-blue-700">
              View all events
            </Button>
          </Link>
        </div>
        <EventGrid />
      </section>
      <HowItWorks />
    </main>
  );
}
