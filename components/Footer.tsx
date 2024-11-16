// "use client";

// import { Search } from "lucide-react";
// import { Input } from "@/components/ui/input";

// export function Footer() {
//   return (
//     <div className="relative">
//       <Input
//         type="text"
//         placeholder="Search events..."
//         className="w-full pl-12 pr-4 py-6 text-lg rounded-full border-2 border-gray-200 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400"
//       />
//       <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
//     </div>

//   );
// }

"use client";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            {/* <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">OptMeOut</span>
            </Link> */}
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Protecting your digital privacy with advanced data removal and
              monitoring services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            {/* <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            {/* <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}
            {/* </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          </div>
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} OptMeOut. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground">
                Twitter
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground">
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground">
                GitHub
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
