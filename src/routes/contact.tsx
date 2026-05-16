import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Highway Motors | Immersive Contact Nexus" },
      { name: "description", content: "Contact Highway Motors in Wayanad. Premium automotive repair and maintenance. Phone: +91 9847359032. WhatsApp support available." },
      { property: "og:title", content: "Contact | Highway Motors" },
      { property: "og:description", content: "Get in touch with Highway Motors Wayanad for premium automotive services." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-mechanic-dark min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Hero */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 uppercase leading-tight">
            Immersive <span className="text-gradient-ember">Contact Nexus</span>
          </h1>
          <p className="text-lg md:text-xl text-metallic-silver/60 max-w-3xl font-light leading-relaxed">
            Connect with the Highway Motors team. Whether you need emergency roadside assistance, 
            service booking, or just expert automotive advice, we&apos;re here to power your journey.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-8 uppercase tracking-wider">
                Highway Command Center
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="size-10 bg-white/5 flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-hyper-orange font-heading tracking-widest">LOC</span>
                  </div>
                  <div>
                    <div className="text-metallic-silver/40 text-[10px] uppercase tracking-widest mb-1">Location</div>
                    <div className="text-white text-sm">Highway Motors Building, Wayanad, Kerala, IN</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 bg-white/5 flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-hyper-orange font-heading tracking-widest">TEL</span>
                  </div>
                  <div>
                    <div className="text-metallic-silver/40 text-[10px] uppercase tracking-widest mb-1">Direct Line</div>
                    <a href="tel:+919847359032" className="text-white text-lg hover:text-hyper-orange transition-colors">+91 98473 59032</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 bg-white/5 flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-hyper-orange font-heading tracking-widest">HRS</span>
                  </div>
                  <div>
                    <div className="text-metallic-silver/40 text-[10px] uppercase tracking-widest mb-1">Operating Hours</div>
                    <div className="text-white text-sm">Mon - Sat: 08:00 - 22:00 IST</div>
                    <div className="text-hyper-orange text-xs mt-1">Emergency: 24/7 Available</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 bg-white/5 flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-hyper-orange font-heading tracking-widest">EMG</span>
                  </div>
                  <div>
                    <div className="text-metallic-silver/40 text-[10px] uppercase tracking-widest mb-1">Roadside Emergency</div>
                    <div className="text-white text-sm">AI-dispatched rescue units with GPS tracking</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919847359032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white font-heading text-xs tracking-widest uppercase hover:border-hyper-orange hover:text-hyper-orange transition-all"
                >
                  WhatsApp Support
                </a>
                <a
                  href="tel:+919847359032"
                  className="px-6 py-3 bg-hyper-orange text-white font-heading text-xs tracking-widest uppercase hover:bg-hyper-gold hover:text-mechanic-dark transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Map Placeholder + Contact Form */}
            <div className="space-y-6">
              <div className="relative h-[250px] border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-graphite/50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="size-4 bg-hyper-orange rounded-full animate-ping absolute"></div>
                  <div className="size-4 bg-hyper-orange rounded-full relative"></div>
                </div>
                <div className="absolute bottom-4 left-4 glass-card px-4 py-2">
                  <span className="text-[10px] font-heading tracking-widest text-hyper-orange uppercase">Wayanad, Kerala</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-heading tracking-[0.5em] text-white/20 uppercase">Interactive Map Coming Soon</span>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-[10px] font-heading tracking-widest text-metallic-silver/40 uppercase mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-hyper-orange/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-heading tracking-widest text-metallic-silver/40 uppercase mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-hyper-orange/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-heading tracking-widest text-metallic-silver/40 uppercase mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-hyper-orange/50 transition-colors resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full liquid-metal py-4 font-heading font-bold text-sm tracking-widest text-mechanic-dark uppercase hover:brightness-110 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
