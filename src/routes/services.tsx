import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Highway Motors | Smart Service Galaxy" },
      { name: "description", content: "Explore Highway Motors' comprehensive automotive services: engine repair, diagnostics, brakes, AC, detailing, and 24/7 emergency roadside assistance in Wayanad." },
      { property: "og:title", content: "Services | Highway Motors" },
      { property: "og:description", content: "Comprehensive automotive services in Wayanad with AI-powered diagnostics." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    category: "Engine & Powertrain",
    items: [
      { name: "Engine Repair", desc: "Precision rebuilds, gasket replacements, and performance calibrations for all engine types." },
      { name: "Transmission Repair", desc: "Gearbox rebuilds, clutch replacements, and torque converter servicing." },
      { name: "Oil Change", desc: "Synthetic oil infusion with molecular analysis and premium filter replacement." },
    ],
  },
  {
    category: "Diagnostics & Electrical",
    items: [
      { name: "Computer Diagnostics", desc: "AI-powered OBD scanning with real-time fault prediction and health scoring." },
      { name: "Battery Replacement", desc: "Smart charging system diagnostics and high-performance cell installation." },
      { name: "Electrical Repairs", desc: "Wiring harness restoration, alternator servicing, and sensor calibration." },
    ],
  },
  {
    category: "Brakes & Suspension",
    items: [
      { name: "Brake Service", desc: "Complete hydraulic system overhaul, pad and disc replacement with performance compounds." },
      { name: "Suspension Tuning", desc: "Damping calibration, shock absorber replacement, and ride height optimization." },
      { name: "Wheel Alignment", desc: "Laser-guided precision geometry tuning for optimal handling and tyre life." },
    ],
  },
  {
    category: "Climate & Comfort",
    items: [
      { name: "AC Repair", desc: "Climate control restoration, refrigerant service, and compressor diagnostics." },
      { name: "Tyre Services", desc: "Mounting, balancing, rotation, and performance compound fitting." },
    ],
  },
  {
    category: "Aesthetics & Detailing",
    items: [
      { name: "Car Detailing", desc: "Ceramic coating, paint correction, and interior deep-cleaning with ionic technology." },
      { name: "Periodic Maintenance", desc: "Scheduled service packages tailored to your vehicle's AI-generated maintenance profile." },
    ],
  },
  {
    category: "Emergency & Support",
    items: [
      { name: "Emergency Roadside Assistance", desc: "24/7 AI-dispatched rescue with real-time GPS tracking and live communication." },
      { name: "Complete Car Servicing", desc: "Full-spectrum maintenance covering every mechanical system in your vehicle." },
    ],
  },
];

function ServicesPage() {
  return (
    <main className="bg-mechanic-dark min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Hero */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 uppercase leading-tight">
            Smart Service <span className="text-gradient-ember">Galaxy</span>
          </h1>
          <p className="text-lg md:text-xl text-metallic-silver/60 max-w-3xl font-light leading-relaxed">
            Our comprehensive automotive ecosystem covers every mechanical need with AI-enhanced precision. 
            From routine maintenance to complex rebuilds, your machine is in expert hands.
          </p>
        </div>

        {/* Service Categories */}
        <div className="py-16 md:py-24 space-y-16">
          {services.map((category) => (
            <div key={category.category}>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-8 uppercase tracking-wider">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {category.items.map((service) => (
                  <div key={service.name} className="glass-card p-8 hover:bg-white/5 transition-all group">
                    <div className="size-12 mb-6 border border-hyper-orange/30 flex items-center justify-center group-hover:border-hyper-orange transition-colors">
                      <div className="size-2 bg-hyper-orange animate-pulse"></div>
                    </div>
                    <h3 className="font-heading font-bold text-white mb-3 uppercase tracking-wider text-sm">
                      {service.name}
                    </h3>
                    <p className="text-sm text-metallic-silver/50 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="py-16 md:py-24 text-center border-t border-white/5">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 uppercase">
            Not Sure What You Need?
          </h2>
          <p className="text-metallic-silver/60 mb-8 max-w-xl mx-auto">
            Our AI diagnostics can identify the exact services your vehicle requires. 
            Book a comprehensive scan today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/diagnostics"
              className="liquid-metal px-10 py-5 rounded-sm font-heading font-bold text-xs tracking-widest text-mechanic-dark uppercase inline-flex items-center justify-center"
            >
              Run AI Diagnostics
            </Link>
            <Link
              to="/booking"
              className="px-10 py-5 rounded-sm border border-white/20 font-heading font-bold text-xs tracking-widest text-white uppercase hover:bg-white/5 transition-all inline-flex items-center justify-center"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
