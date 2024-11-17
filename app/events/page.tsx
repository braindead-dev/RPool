import { EventGrid } from "@/components/EventGrid";
import { EventGrid2 } from "@/components/EventGrid2";
import { EventGrid3 } from "@/components/EventGrid3";



export default function Events() {
<<<<<<< HEAD
  return (
    <main className="min-h-screen">
      <section
        className="py-20"
        style={{
          background:
            "url(https://dining.ucr.edu/sites/default/files/header-ucrdining_2.jpg)",
        }}>
        <div className="flex">
          <h1 className="text-6xl font-bold">
            <div className="indent-80 text-black">All Events</div>
          </h1>
        </div>
      </section>
=======
    return (
      <main className="min-h-screen">
        <section className="py-20" style={{
        background: "url(https://dining.ucr.edu/sites/default/files/header-ucrdining_2.jpg)"
      }}>
          <div className="flex">
            <h1 className="text-6xl font-bold">
              <div className="indent-80 text-white">All Events</div>
            </h1>
          </div>
        </section>
        
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-5 ...">
            <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
            <EventGrid />
            <h2 className="text-3xl font-bold text-gray-900">Clubs</h2>
            <EventGrid2 />
            <h2 className="text-3xl font-bold text-gray-900">Local</h2>
            <EventGrid3 />
          </div>
        </section>
>>>>>>> 4f946bc2ccda7ed1778c5a731cd33a394b37019f

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-5 ...">
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
