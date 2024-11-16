import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Ken Carson Concert",
    location: "Los Angeles, CA",
    date: "Nov 17, 2024",
    spots: 3,
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=400&fit=crop",
    organizer: {
      name: "Henry W.",
      image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307447484460830861/IMG_5656.jpg?ex=673a56db&is=6739055b&hm=311b6b32bb836d5ed9f344d52016b12d95e27657c819df6ef57084263c0972b0&"
    }
  },
  {
    id: 2,
    title: "UCR Boxing Practice",
    location: "Moreno Valley, CA",
    date: "Nov 18, 2024",
    spots: 6,
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=400&fit=crop",
    organizer: {
      name: "Coach Greg",
      image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307448107231084684/IMG_5916.jpg?ex=673a576f&is=673905ef&hm=6c42ece2cf5f136967754ce6c9e4ed4ff82dc0ca0ee862b66c00fa86f8c5474d&"
    }
  },
  {
    id: 3,
    title: "Trip to Melrose Ave",
    location: "Los Angeles, CA",
    date: "Nov 16, 2024",
    spots: 2,
    image: "https://melroseavenue-shop.com/assets/img/carousel/06-planet-salon.jpg",
    organizer: {
      name: "Stefanie G.",
      image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307448629174210682/IMG_5918.jpg?ex=673a57ec&is=6739066c&hm=463c0823faf363d6a09e6066f9391f777ff9c642a5957c317c5d2b94f30de41a&"
    }
  },
  {
    id: 4,
    title: "Ontario Airport",
    location: "Ontario, CA",
    date: "Nov 21, 2024",
    spots: 3,
    image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_667,q_75,w_1000/v1/clients/anaheimca/Full_330_2a77aa32-1a52-4f33-a345-1306bc09e27f.jpg",
    organizer: {
      name: "Derrick L.",
      image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307449355795562506/IMG_5919.jpg?ex=673a5899&is=67390719&hm=7727d857c5bb4b6bfc71e65cd2e6d72abdd995a3819388372cd885f1f493d9b1&"
    }
  }
];

export function EventGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">{event.title}</CardTitle>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{event.location}</span>
            </div>
          </CardHeader>
          <div className="relative w-full h-32 mb-4 mt-2">
            <img
              src={event.image}
              alt={event.title}
              className="object-cover w-full h-full"
            />
          </div>
          <CardContent>
            <div className="space-y-2">
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