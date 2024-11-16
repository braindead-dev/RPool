import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    value: "3",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Welcome, Demo User</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="pb-2">
                <CardDescription>{stat.title}</CardDescription>
                <CardTitle className="text-2xl">{stat.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Ken Carson Concert</h3>
                    <p className="text-sm text-gray-500">Nov 17, 2024</p>
                  </div>
                  <span className="text-sm text-blue-600">3 spots left</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">UCR Boxing Practice</h3>
                    <p className="text-sm text-gray-500">Nov 18, 2024</p>
                  </div>
                  <span className="text-sm text-blue-600">6 spots left</span>
                </div>
              </div>
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
      </div>
    </main>
  );
}