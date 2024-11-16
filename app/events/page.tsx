import { EventGrid } from "@/components/EventGrid";

export default function Home() {
    return (
      <main className="min-h-screen">

        <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-6xl font-bold mb-6">
              <div className="indent-80 text-white-500">All Events</div>
            </h1>
          </div>
        </section>
        
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div class="flex flex-col space-y-5 ...">
            <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
            <EventGrid />
            <h2 className="text-3xl font-bold text-gray-900">Clubs</h2>
            <EventGrid />
            <h2 className="text-3xl font-bold text-gray-900">Local</h2>
            <EventGrid />
          </div>
        </section>

      </main>
    );
  }