import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Service | Highway Motors | AI Service Booking Portal" },
      { name: "description", content: "Book your vehicle service at Highway Motors Wayanad. AI-powered repair suggestions, smart calendar, and digital vehicle history." },
      { property: "og:title", content: "Book Service | Highway Motors" },
      { property: "og:description", content: "AI-powered vehicle service booking in Wayanad with smart scheduling." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <main className="bg-mechanic-dark min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Hero */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 uppercase leading-tight">
            AI Service <span className="text-gradient-ember">Booking Portal</span>
          </h1>
          <p className="text-lg md:text-xl text-metallic-silver/60 max-w-3xl font-light leading-relaxed">
            Experience the future of automotive scheduling. Our intelligent booking system analyzes your 
            vehicle&apos;s history and recommends the optimal service schedule powered by AI.
          </p>
        </div>

        {/* Features */}
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { title: "AI Repair Suggestions", desc: "Predictive maintenance alerts based on your vehicle's diagnostic profile." },
              { title: "Smart Calendar", desc: "Real-time availability with intelligent slot optimization." },
              { title: "Digital History", desc: "Complete blockchain-secured service records and maintenance timeline." },
            ].map((f) => (
              <div key={f.title} className="glass-card p-8 hover:bg-white/5 transition-all">
                <div className="text-hyper-orange font-heading text-xs tracking-widest uppercase mb-4">{f.title}</div>
                <p className="text-sm text-metallic-silver/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="py-16 md:py-24 border-y border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-12 uppercase tracking-wider text-center">
              Schedule Your Service
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-heading tracking-widest text-metallic-silver/40 uppercase mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-hyper-orange/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-heading tracking-widest text-metallic-silver/40 uppercase mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-hyper-orange/50 transition-colors"
                    placeholder="+91..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-heading tracking-widest text-metallic-silver/40 uppercase mb-2">Vehicle Model</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-hyper-orange/50 transition-colors"
                    placeholder="e.g. BMW X5"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-heading tracking-widest text-metallic-silver/40 uppercase mb-2">Service Type</label>
                  <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-hyper-orange/50 transition-colors appearance-none">
                    <option value="" className="bg-mechanic-dark">Select a service...</option>
                    <option value="engine" className="bg-mechanic-dark">Engine Repair</option>
                    <option value="diagnostics" className="bg-mechanic-dark">Computer Diagnostics</option>
                    <option value="brake" className="bg-mechanic-dark">Brake Service</option>
                    <option value="ac" className="bg-mechanic-dark">AC Repair</option>
                    <option value="oil" className="bg-mechanic-dark">Oil Change</option>
                    <option value="detailing" className="bg-mechanic-dark">Car Detailing</option>
                    <option value="emergency" className="bg-mechanic-dark">Emergency Service</option>
                    <option value="maintenance" className="bg-mechanic-dark">Periodic Maintenance</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-heading tracking-widest text-metallic-silver/40 uppercase mb-2">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-hyper-orange/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-heading tracking-widest text-metallic-silver/40 uppercase mb-2">Preferred Time</label>
                  <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-hyper-orange/50 transition-colors appearance-none">
                    <option value="" className="bg-mechanic-dark">Select time...</option>
                    <option value="morning" className="bg-mechanic-dark">08:00 - 12:00</option>
                    <option value="afternoon" className="bg-mechanic-dark">12:00 - 16:00</option>
                    <option value="evening" className="bg-mechanic-dark">16:00 - 20:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-heading tracking-widest text-metallic-silver/40 uppercase mb-2">Additional Notes</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-hyper-orange/50 transition-colors resize-none"
                  placeholder="Describe any symptoms or concerns..."
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="liquid-metal px-12 py-5 rounded-sm font-heading font-bold text-sm tracking-widest text-mechanic-dark uppercase hover:brightness-110 transition-all"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact shortcut */}
        <div className="py-16 text-center">
          <p className="text-metallic-silver/40 text-sm mb-4">Prefer to speak with our team?</p>
          <a
            href="tel:+919847359032"
            className="text-hyper-orange font-heading text-lg tracking-wider hover:text-hyper-gold transition-colors"
          >
            +91 9847359032
          </a>
        </div>
      </div>
    </main>
  );
}
