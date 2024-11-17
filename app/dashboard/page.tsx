import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Users, Calendar, Plus, MessageSquare, Settings, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SideNavBar } from "@/components/SideNavBar";

const stats = [
  {
    title: "Total Rides",
    value: "12",
  },
  {
    title: "Gas Saved",
    value: "$240",
  },
  {
    title: "CO₂ Reduced",
    value: "450kg",
  },
  {
    title: "Active Events",
    value: "2",
  },
];

const upcomingEvents = [
  {
    id: "event1",
    title: "Ken Carson Concert",
    date: "Nov 17, 2024",
    time: "8:00 PM",
    spots: 1,
    meetupLocation: "UCR Lot 30",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.909626637957!2d-117.33536872416181!3d33.96916227318842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae48c06e7679%3A0x5481390c97c17014!2sUC%20Riverside%20Lot%2030!5e0!3m2!1sen!2sus!4v1731797706384!5m2!1sen!2sus",
    destination: "The Novo, 800 W Olympic Blvd, Los Angeles, CA",
    participants: [
      {
        name: "Henry W.",
        image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307447484460830861/IMG_5656.jpg?ex=673a56db&is=6739055b&hm=311b6b32bb836d5ed9f344d52016b12d95e27657c819df6ef57084263c0972b0&"
      },
      {
        name: "Sarah L.",
        image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307448629174210682/IMG_5918.jpg?ex=673a57ec&is=6739066c&hm=463c0823faf363d6a09e6066f9391f777ff9c642a5957c317c5d2b94f30de41a&"
      }
    ]
  },
  {
    id: "event2",
    title: "UCR Boxing Practice",
    date: "Nov 18, 2024",
    time: "6:00 PM",
    spots: 3,
    meetupLocation: "UCR Hub",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7082911635453!2d-117.33369751531285!3d33.97433650404957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae12790a4881%3A0xfac5ba60bc0ded17!2sHighlander%20Union%20Building!5e0!3m2!1sen!2sus!4v1731797752510!5m2!1sen!2sus",
    destination: "ASG Boxing Club, 24210 Postal Ave, Moreno Valley, CA",
    participants: [
      {
        name: "Henry W.",
        image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307447484460830861/IMG_5656.jpg?ex=673a56db&is=6739055b&hm=311b6b32bb836d5ed9f344d52016b12d95e27657c819df6ef57084263c0972b0&"
      },
      {
        name: "Derrick L.",
        image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307449355795562506/IMG_5919.jpg?ex=673a5899&is=67390719&hm=7727d857c5bb4b6bfc71e65cd2e6d72abdd995a3819388372cd885f1f493d9b1&"
      },
      {
        name: "Coach Greg",
        image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307448107231084684/IMG_5916.jpg?ex=673a576f&is=673905ef&hm=6c42ece2cf5f136967754ce6c9e4ed4ff82dc0ca0ee862b66c00fa86f8c5474d&"
      }
    ]
  }
];

const sideNavItems = [
  { icon: Plus, label: "Create Event", href: "/dashboard/create" },
  { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: HelpCircle, label: "Help", href: "/dashboard/help" },
];

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Welcome, Henry W.</h1>
          
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
              <CardHeader className="flex flex-col justify-center h-24">
                  <CardDescription>{stat.title}</CardDescription>
                  <CardTitle className="text-2xl">{stat.value}</CardTitle>
              </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Your Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              {upcomingEvents.map((event) => (
                <AccordionItem key={event.id} value={event.id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-1 items-center justify-between pr-4">
                      <div>
                        <h3 className="font-medium text-left">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date} at {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {event.participants.length} joined
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-blue-600">{event.spots} spots left</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      <iframe
                              src={event.mapEmbed}
                              className="w-full h-48 rounded-md mt-2"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                          > </iframe>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <div>
                            <p className="text-sm font-medium">Meetup Location</p>
                            <p className="text-sm">{event.meetupLocation}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mt-4">
                          <MapPin className="h-4 w-4" />
                          <div>
                            <p className="text-sm font-medium">Destination</p>
                            <p className="text-sm">{event.destination}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-gray-600" />
                          <p className="text-sm font-medium">Participants</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          {event.participants.map((participant) => (
                            <div key={participant.name} className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={participant.image} />
                                <AvatarFallback>{participant.name[0]}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{participant.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Derrick L. sent you a message request</h3>
                  <p className="text-sm text-gray-500">6 hours ago</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Joined UCR Boxing Practice</h3>
                  <p className="text-sm text-gray-500">2 days ago</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Created Ken Carson Concert</h3>
                  <p className="text-sm text-gray-500">5 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}