import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


// events with components like id, title, location, date, spots, and organizer
const events = [
  {
    id: 1,
    title: "Ken Carson Concert",
    location: "Hollywood Bowl, Los Angeles",
    date: "Nov 16, 2024",
    spots: 3,
    organizer: {
      name: "Henry W.",
      image: ""
    }
  },
  {
    id: 2,
    title: "Example Event",
    location: "Location, Location",
    date: "Nov 16, 2024",
    spots: 3,
    organizer: {
      name: "Henry W.",
      image: ""
    }
  },
  {
    id: 3,
    title: "Example Event",
    location: "Location, Location",
    date: "Nov 16, 2024",
    spots: 3,
    organizer: {
      name: "Henry W.",
      image: ""
    }
  },
  {
    id: 4,
    title: "Example Event",
    location: "Location, Location",
    date: "Nov 16, 2024",
    spots: 3,
    organizer: {
      name: "Henry W.",
      image: ""
    }
  }
];

export function EventGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            {/* header */}
          </CardHeader>
          <CardContent>
            {/* content */}
          </CardContent>
          <CardFooter>
            {/* footer */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}