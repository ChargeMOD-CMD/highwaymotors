import { createFileRoute, Link } from "@tanstack/react-router";
import engineDetail from "../assets/engine-detail.jpg";
import garageBay from "../assets/garage-bay.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Highway Motors | Engineering Trust. Powering Every Journey." },
      { name: "description", content: "Learn about Highway Motors - premium automotive repair and maintenance service in Wayanad with AI-powered diagnostics and futuristic garage experiences." },
      { property: "og:title", content: "About | Highway Motors" },
      { property: "og:description", content: "Premium automotive repair and maintenance in Wayanad with AI-powered diagnostics." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-mechanic-dark min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Hero */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 uppercase leading-tight">
            AI About <span className="text-gradient-ember">Highway Motors</span>
          </h1>
          <p className="text-lg md:text-xl text-metallic-silver/60 max-w-3xl font-light leading-relaxed">
            Since 2010, Highway Motors has been redefining automotive care in Wayanad. 
            We fuse decades of mechanical mastery with cutting-edge AI diagnostics to deliver 
            an unparalleled vehicle service experience.
          </p>
        </div>

        {/* Vision */}
        <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-hyper-orange font-heading text-xs tracking-[0.5em] uppercase mb-6 block">
              Our Vision
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 uppercase leading-tight">
              Engineering the Future of Automotive Care
            </h2>
            <p className="text-metallic-silver/60 mb-6 leading-relaxed">
              We envision a world where vehicle maintenance is predictive, not reactive. 
              Our AI-driven diagnostics platform analyzes thousands of data points per second, 
              identifying potential failures before they impact your journey.
            </p>
            <p className="text-metallic-silver/60 leading-relaxed">
              Every vehicle that enters our HyperBay receives treatment worthy of a championship machine. 
              From classic restorations to modern hypercars, we apply the same obsessive attention to detail.
            </p>
          </div>
          <div className="relative">
            <img
              src={garageBay}
              alt="Highway Motors garage bay"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
            <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Values */}
        <div className="py-16 md:py-24 border-y border-white/5">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-12 uppercase">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Powerful", desc: "We deliver maximum performance restoration for every vehicle." },
              { title: "Premium", desc: "Only the finest tools, parts, and techniques touch your machine." },
              { title: "Precision", desc: "Mechanical accuracy measured to the micron level." },
              { title: "Trustworthy", desc: "Transparent diagnostics with no hidden costs or surprises." },
            ].map((v) => (
              <div key={v.title} className="glass-card p-8 hover:bg-white/5 transition-all">
                <h3 className="font-heading font-bold text-white mb-3 uppercase tracking-wider text-sm">{v.title}</h3>
                <p className="text-sm text-metallic-silver/50">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={engineDetail}
              alt="Precision engine work"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-sm"
            />
            <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-hyper-orange font-heading text-xs tracking-[0.5em] uppercase mb-6 block">
              Our Story
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 uppercase leading-tight">
              From Humble Garage to HyperDrive
            </h2>
            <p className="text-metallic-silver/60 mb-6 leading-relaxed">
              What started as a single-bay workshop in Wayanad has evolved into Kerala&apos;s most advanced 
              automotive service center. Our founder&apos;s vision was simple: treat every vehicle as if it were 
              heading straight to the racetrack.
            </p>
            <p className="text-metallic-silver/60 leading-relaxed">
              Today, we service over 5,000 vehicles annually, with a team of 25 certified technicians 
              and the region&apos;s only AI-powered diagnostic suite. We remain proudly rooted in Wayanad, 
              serving the community that built us.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "15+", label: "Years Experience" },
              { num: "5K+", label: "Vehicles Serviced" },
              { num: "25", label: "Expert Technicians" },
              { num: "12", label: "Service Bays" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-gradient-ember mb-2">{stat.num}</div>
                <div className="text-metallic-silver/40 text-xs font-heading tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 md:py-24 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 uppercase">
            Ready to Experience the Future?
          </h2>
          <p className="text-metallic-silver/60 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers who trust Highway Motors with their most prized machines.
          </p>
          <Link
            to="/booking"
            className="liquid-metal px-10 py-5 rounded-sm font-heading font-bold text-xs tracking-widest text-mechanic-dark uppercase inline-flex items-center justify-center"
          >
            Book Your Service
          </Link>
        </div>
      </div>
    </main>
  );
}
