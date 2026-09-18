import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t">
      <div className="relative mx-auto flex min-h-80 max-w-7xl flex-col items-center justify-between px-4 py-8 md:px-6">
        {/* Copyright */}
        <p className="z-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Inkwell. All rights reserved.
        </p>

        {/* Large Inkwell */}
        <Link
          href="/"
          className="absolute -bottom-13.75 left-1/2 -translate-x-1/2"
        >
          <span className="block whitespace-nowrap text-[180px] font-bold leading-none tracking-tighter text-foreground/10 transition-colors hover:text-foreground/15 md:text-[240px] lg:text-[300px]">
            Inkwell
          </span>
        </Link>
      </div>
    </footer>
  );
}
