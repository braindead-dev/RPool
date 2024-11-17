import { Plus, MessageSquare, Settings, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";


const sideNavItems = [
    { icon: Plus, label: "Create Event", href: "/dashboard/create" },
    { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
    { icon: HelpCircle, label: "Help", href: "/dashboard/help" },
  ];

export function SideNavBar() {
  return (
  <div className="flex flex-col gap-4 mt-16">
    <TooltipProvider>
    {sideNavItems.map((item) => (
        <Tooltip key={item.label}>
        <TooltipTrigger asChild>
            <Link href={item.href}>
            <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-xl border-2 hover:bg-blue-50 hover:border-blue-200 transition-colors"
            >
                <item.icon className="h-5 w-5 text-blue-600" />
            </Button>
            </Link>
        </TooltipTrigger>
        <TooltipContent side="right">
            <p>{item.label}</p>
        </TooltipContent>
        </Tooltip>
    ))}
    </TooltipProvider>
    </div>
);
}