"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/layout/ThemeToggle";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RiPenNibLine as InkwellLogo } from "react-icons/ri";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Start creating blogs",
    href: "https://blogs-cms-bakce.vercel.app",
  },
];

export default function Navbar() {
  // const [isVisible, setIsVisible] = useState(true);
  // const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 20;

      // Always show at the top
      if (atTop) {
        setIsVisible(true);

        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
        }

        return;
      }

      // Show while scrolling
      setIsVisible(true);

      // Reset the hide timer
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }

      hideTimeout.current = setTimeout(() => {
        // Don't hide if cursor is currently on navbar
        if (!isHovered) {
          setIsVisible(false);
        }
      }, 700);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, [isHovered]);

  return (
  <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">

    {/* <div
      className={`pointer-events-auto mx-auto mt-4 max-w-3xl px-4 md:px-6 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-[-120%] opacity-0"
      }`}
    > */}
    <div
      onMouseEnter={() => {
        setIsHovered(true);

        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
        }

        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);

        hideTimeout.current = setTimeout(() => {
          if (window.scrollY > 20) {
            setIsVisible(false);
          }
        }, 700);
      }}
      className={`pointer-events-auto mx-auto mt-4 max-w-3xl px-4 md:px-6 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-[-120%] opacity-0"
      }`}
    >
      <div className="flex h-16 items-center justify-between rounded-md border bg-card">
        <div className="flex w-full items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <div className="rounded-lg bg-orange-600 p-1">
              <InkwellLogo className="text-white" />
            </div>

            <p>Inkwell</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger 
                // asChild
              >
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                >
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Inkwell</SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex items-center justify-between px-4">
                  <span className="text-sm font-medium">
                    Theme
                  </span>

                  <ThemeToggle />
                </div>

                <nav className="mt-6 flex flex-col gap-4 px-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  </header>
);

  // return (
  //   <header
  //     className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
  //       isVisible
  //         ? "translate-y-0 opacity-100"
  //         : "translate-y-[-120%] opacity-0"
  //     }`}
  //   >
  //     <div className="bg-background">
  //       <div className="mx-auto mt-4 flex h-16 max-w-3xl items-center justify-between rounded-md border bg-card px-4 md:px-6">
  //         <div className="flex w-full items-center justify-between">
  //           {/* Logo */}
  //           <Link
  //             href="/"
  //             className="flex items-center gap-2 text-xl font-bold tracking-tight"
  //           >
  //             <div className="rounded-lg bg-orange-600 p-1">
  //               <InkwellLogo className="text-white" />
  //             </div>

  //             <p>Inkwell</p>
  //           </Link>

  //           {/* Desktop Navigation */}
  //           <nav className="hidden items-center gap-6 md:flex">
  //             {navLinks.map((link) => (
  //               <Link
  //                 key={link.href}
  //                 href={link.href}
  //                 className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
  //               >
  //                 {link.label}
  //               </Link>
  //             ))}
  //           </nav>

  //           <div className="hidden md:block">
  //             <ThemeToggle />
  //           </div>

  //           {/* Mobile Navigation */}
  //           <div className="md:hidden">
  //             <Sheet>
  //               <SheetTrigger 
  //                 // asChild
  //               >
  //                 <Button
  //                   variant="ghost"
  //                   size="icon"
  //                   aria-label="Open navigation menu"
  //                 >
  //                   <Menu />
  //                 </Button>
  //               </SheetTrigger>

  //               <SheetContent>
  //                 <SheetHeader>
  //                   <SheetTitle>Inkwell</SheetTitle>
  //                 </SheetHeader>

  //                 <div className="mt-6 flex items-center justify-between px-4">
  //                   <span className="text-sm font-medium">
  //                     Theme
  //                   </span>

  //                   <ThemeToggle />
  //                 </div>

  //                 <nav className="mt-6 flex flex-col gap-4 px-4">
  //                   {navLinks.map((link) => (
  //                     <Link
  //                       key={link.href}
  //                       href={link.href}
  //                       className="text-sm font-medium"
  //                     >
  //                       {link.label}
  //                     </Link>
  //                   ))}
  //                 </nav>
  //               </SheetContent>
  //             </Sheet>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </header>
  // );
}


// "use client";

// import Link from "next/link";
// import ThemeToggle from "@/components/layout/ThemeToggle";

// import { Menu } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// import { RiPenNibLine as InkwellLogo } from "react-icons/ri";


// const navLinks = [
//   {
//     label: "Home",
//     href: "/",
//   },
// ];

// export default function Navbar() {
//   return (
//     <header className="bg-background">
//       <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 md:px-6 mt-4 border bg-card rounded-md">

//       <div className="flex justify-between w-full">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-xl font-bold tracking-tight flex items-center gap-2"
//           >
//           <div className="bg-orange-600 rounded-lg p-1">
//             <InkwellLogo className="text-white"/>
//           </div>
//           <p>Inkwell</p>
//         </Link>

//         {/* Desktop Navigation */}
//         {/* <div className="hidden items-center gap-4 md:flex"> */}
//           <nav className="flex items-center gap-6">
//             {navLinks.map((link) => (
//               <Link
//               key={link.href}
//               href={link.href}
//               className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           <ThemeToggle />
//         {/* </div> */}
        
//         </div>        

//         {/* Mobile Navigation */}
//         <div className="md:hidden">
//           <Sheet> 
//             <SheetTrigger>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 aria-label="Open navigation menu"
//               >
//                 <Menu />
//               </Button>
//             </SheetTrigger>

//             <SheetContent>
//               <SheetHeader>
//                 <SheetTitle>Inkwell</SheetTitle>
//               </SheetHeader>

//               <div className="mt-6 flex items-center justify-between px-4">
//                 <span className="text-sm font-medium">
//                   Theme
//                 </span>

//                 <ThemeToggle />
//               </div>

//               <nav className="mt-6 flex flex-col gap-4 px-4">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="text-sm font-medium"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }