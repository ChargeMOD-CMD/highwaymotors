import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
} from "@tanstack/react-router";
import { useState, useEffect } from "react";

import appCss from "../styles.css?url";
import heroGarage from "../assets/hero-garage.jpg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground font-heading">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground font-heading">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/diagnostics", label: "Diagnostics" },
    { to: "/booking", label: "Book Service" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 md:px-8 md:py-6 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <Link to="/" className="flex items-center gap-3 group">
        <div className="size-10 bg-hyper-orange rounded-sm rotate-45 flex items-center justify-center group-hover:bg-hyper-gold transition-colors">
          <div className="size-6 border-2 border-mechanic-dark rotate-[-45deg]"></div>
        </div>
        <span className="font-heading font-bold tracking-tighter text-white text-xl uppercase">
          Highway Motors
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 lg:gap-10 text-[10px] font-heading font-bold tracking-[0.3em] uppercase opacity-70">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`hover:text-hyper-orange transition-colors ${
              isActive(link.to) ? "text-hyper-orange" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        to="/booking"
        className="hidden md:inline-flex px-6 py-2 border border-hyper-orange/30 rounded-full text-[10px] font-heading font-bold tracking-widest text-hyper-orange hover:bg-hyper-orange hover:text-white transition-all"
      >
        BOOK SERVICE
      </Link>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 md:hidden">
          <div className="flex flex-col p-6 gap-4 text-sm font-heading font-bold tracking-widest uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`hover:text-hyper-orange transition-colors ${
                  isActive(link.to) ? "text-hyper-orange" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="py-24 px-6 md:px-8 border-t border-white/10 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="size-8 bg-hyper-orange rounded-sm rotate-45 flex items-center justify-center">
              <div className="size-4 border-2 border-mechanic-dark rotate-[-45deg]"></div>
            </div>
            <span className="font-heading font-bold tracking-tighter text-white text-lg uppercase">
              Highway Motors
            </span>
          </div>
          <p className="text-metallic-silver/40 max-w-sm mb-8 leading-relaxed text-sm">
            Redefining automotive care through the lens of future technology. Based in the heart of Wayanad, servicing the machines of tomorrow.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/919847359032" target="_blank" rel="noopener noreferrer" className="size-10 border border-white/10 flex items-center justify-center hover:border-hyper-orange transition-colors">
              <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-11.796A11.812 11.812 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="#" className="size-10 border border-white/10 flex items-center justify-center hover:border-hyper-orange transition-colors">
              <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="size-10 border border-white/10 flex items-center justify-center hover:border-hyper-orange transition-colors">
              <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] font-heading font-bold tracking-[0.3em] text-white uppercase mb-8">
            Quick Links
          </h5>
          <ul className="space-y-4 text-sm text-metallic-silver/60 font-light">
            <li><Link to="/services" className="hover:text-hyper-orange transition-colors">Service Menu</Link></li>
            <li><Link to="/booking" className="hover:text-hyper-orange transition-colors">AI Booking</Link></li>
            <li><Link to="/contact" className="hover:text-hyper-orange transition-colors">Location Grid</Link></li>
            <li><Link to="/diagnostics" className="hover:text-hyper-orange transition-colors">Fleet Support</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] font-heading font-bold tracking-[0.3em] text-white uppercase mb-8">
            Nexus Contact
          </h5>
          <p className="text-sm text-metallic-silver/60 mb-2">Highway Motors Building</p>
          <p className="text-sm text-metallic-silver/60 mb-6">Wayanad, Kerala, IN</p>
          <a href="tel:+919847359032" className="text-hyper-orange font-heading text-xs hover:text-hyper-gold transition-colors">
            +91 9847359032
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] font-heading tracking-widest text-white/20 uppercase">
        <span>2026 Highway Motors HyperDrive. All rights reserved.</span>
        <span>Engineering Trust. Powering Every Journey.</span>
      </div>
    </footer>
  );
}

function FloatingChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="size-16 liquid-metal flex items-center justify-center glow-orange cursor-pointer group rounded-sm"
          aria-label="Open AutoBot AI"
        >
          <div className="size-8 border-2 border-mechanic-dark flex items-center justify-center">
            <div className="size-2 bg-mechanic-dark animate-ping rounded-full"></div>
          </div>
          <div className="absolute -top-12 right-0 bg-mechanic-dark border border-hyper-orange px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            <span className="text-[10px] font-heading text-hyper-orange tracking-widest uppercase">
              AutoBot AI Online
            </span>
          </div>
        </button>
      </div>

      {open && (
        <div className="fixed bottom-28 right-8 z-50 w-80 md:w-96 bg-mechanic-dark border border-white/10 shadow-2xl flex flex-col max-h-[500px]">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-hyper-orange rounded-sm rotate-45 flex items-center justify-center">
                <div className="size-4 border border-mechanic-dark rotate-[-45deg]"></div>
              </div>
              <div>
                <div className="text-sm font-heading font-bold text-white uppercase">AutoBot AI</div>
                <div className="text-[10px] text-hyper-orange flex items-center gap-1">
                  <span className="size-1.5 bg-hyper-orange rounded-full animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white text-lg">&times;</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[250px]">
            <div className="glass-card p-3 rounded-sm">
              <p className="text-xs text-metallic-silver/80">
                Welcome to Highway Motors! I am AutoBot AI, your intelligent automotive assistant. How can I help you today?
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Book Service", "Diagnostics", "Emergency", "Pricing"].map((q) => (
                <button
                  key={q}
                  className="px-3 py-1.5 text-[10px] font-heading tracking-wider uppercase border border-white/10 text-metallic-silver/60 hover:border-hyper-orange hover:text-hyper-orange transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
          <div className="p-3 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-white/10 px-3 py-2 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-hyper-orange/50"
              />
              <button className="px-4 py-2 bg-hyper-orange text-white text-xs font-heading tracking-wider uppercase hover:bg-hyper-gold transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Outlet />
      <Footer />
      <FloatingChatbot />
    </QueryClientProvider>
  );
}
