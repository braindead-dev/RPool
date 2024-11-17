import { SideNavBar } from "@/components/SideNavBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Side Navigation Bar */}
        <SideNavBar />

        {/* Main Content */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </main>
  );
}
