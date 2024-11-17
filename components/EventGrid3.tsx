import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import { Calendar, MapPin, Users } from "lucide-react";
   const events = [
    {
      id: 1,
      title: "Biology Study Group",
      location: "Riverside, CA",
      date: "Nov 26, 2024",
      spots: 2,
      image:
        "https://yalealumnimagazine.org/uploads/images/8300083/1502920698/IMG_0532.jpg",
      organizer: {
        name: "Ashley G.",
        image:
          "https://i.pinimg.com/736x/37/02/63/370263d53ad1e64b5db78f620036afdc.jpg",
      },
    },
    {
      id: 2,
      title: "Beach Trip",
      location: "Hunington Beach, CA",
      date: "Dec 1, 2024",
      spots: 4,
      image:
        "https://www.gohawaii.com/sites/default/files/hero-unit-images/12845%20%281%29.jpg",
      organizer: {
        name: "Lauren P.",
        image:
          "https://i5.walmartimages.com/seo/LinYooLi-Summer-Instagram-Style-Backpack-Floral-Female-College-Student-Niche-High-School-Junior-Soft-Girl-Backpack_4f57a4a2-1777-4152-b935-a45dd45580d8.d2ff89349ae1f7cc6981c6839c1787ce.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      },
    },
    {
      id: 3,
      title: "Trip to Melrose Ave",
      location: "Los Angeles, CA",
      date: "Nov 16, 2024",
      spots: 2,
      image:
        "https://melroseavenue-shop.com/assets/img/carousel/06-planet-salon.jpg",
      organizer: {
        name: "Mary G.",
        image:
          "https://i.redd.it/1fovf4hpr6uc1.jpeg",
      },
    },
    {
      id: 4,
      title: "Ontario Airport",
      location: "Ontario, CA",
      date: "Nov 21, 2024",
      spots: 3,
      image:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_667,q_75,w_1000/v1/clients/anaheimca/Full_330_2a77aa32-1a52-4f33-a345-1306bc09e27f.jpg",
      organizer: {
        name: "Darius A.",
        image:
          "https://i.pinimg.com/736x/2b/2b/76/2b2b76c0f5458f64c844a7af87e54996.jpg",
      },
    },
  ];
   export function EventGrid3() {
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
            <div className=" relative w-full h-32 mb-4 mt-2">
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
                  <AvatarFallback>
                    {event.organizer.name.split(" ")[0][0]}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-600">
                  {event.organizer.name}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }