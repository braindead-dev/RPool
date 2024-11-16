import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Users } from "lucide-react";

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
            <CardTitle className="text-xl">{event.title}</CardTitle>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{event.location}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-4 w-4" />
                <span className="text-sm">{event.spots} spots available</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={event.organizer.image} />
                <AvatarFallback>{event.organizer.name.split(' ')[0][0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-600">{event.organizer.name}</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}