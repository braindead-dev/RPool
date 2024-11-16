"use client";

import { Search, Users, Share2, TrendingUp, Shrub } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: "Explore",
    description:
      "Discover local events and activities based on your interests.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Connect",
    description:
      "Reach out to others attending events and start conversations.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-blue-600" />,
    title: "Share",
    description: "Post your experiences and engage with the community.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: "Grow",
    description: "Build meaningful connections and expand your social circle.",
  },
  {
    icon: <Shrub className="h-8 w-8 text-blue-600" />,
    title: "Sustainability",
    description:
      "Strive to reduce environmental impact and strengthen our community .",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-5 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How R'Pool Works
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground mt-4 text-lg">
            Create an account and become a part of the R'Pool community
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 hidden md:block" />

          <div className="space-y-5 relative">
            {steps.map((step, index) => (
              <div>
                <div
                  className={`md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}>
                    <div className="bg-white p-3 rounded-lg shadow-lg">
                      <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
