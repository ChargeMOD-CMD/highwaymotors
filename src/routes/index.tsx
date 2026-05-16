import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroGarage from "../assets/hero-garage.jpg";
import garageBay from "../assets/garage-bay.jpg";
import engineDetail from "../assets/engine-detail.jpg";
import detailing from "../assets/detailing.jpg";
import emergency from "../assets/emergency.jpg";
import transformation from "../assets/transformation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Highway Motors | Engineering Trust. Powering Every Journey." },
      { name: "description", content: "Highway Motors Car Repair & Maintenance Service in Wayanad. AI-powered diagnostics, premium automotive care, and futuristic garage experiences." },
      { property: "og:title", content: "Highway Motors | Engineering Trust. Powering Every Journey." },
      { property: "og:description", content: "Premium automotive repair and maintenance in Wayanad with AI-powered diagnostics and futuristic garage experiences." },
    ],
  }),
  component: IndexPage,
});

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ── HERO ── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      <div className="absolute inset-0 scanline pointer-events-none opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,61,0,0.08)_0%,transparent_70%)]"></div>
      
      <div className="absolute inset-0 z-0">
        <img
          src={heroGarage}
          alt="Futuristic automotive garage with holographic diagnostics"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 border border-hyper-gold/20 rounded-sm bg-hyper-gold/5 text-hyper-gold text-[10px] font-heading tracking-[0.4em] uppercase">
          Engineering Trust. Powering Every Journey.
        </div>
        <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-[-0.05em] leading-[0.9] mb-6 glow-text italic uppercase">
          HYPER<span className="text-gradient-ember">DRIVE</span>
        </h1>
        <p className="text-lg md:text-xl text-metallic-silver/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Next-generation automotive maintenance where AI-driven precision meets cinematic mechanical mastery in Wayanad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/diagnostics"
            className="liquid-metal px-10 py-5 rounded-sm font-heading font-bold text-xs tracking-widest text-mechanic-dark uppercase inline-flex items-center justify-center"
          >
            Initialize AI Scan
          </Link>
          <Link
            to="/services"
            className="px-10 py-5 rounded-sm border border-white/20 font-heading font-bold text-xs tracking-widest text-white uppercase hover:bg-white/5 transition-all inline-flex items-center justify-center"
          >
            Explore Workshop
          </Link>
        </div>
      </div>

      {/* Telemetry indicators */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 font-heading text-[10px] text-metallic-silver/40 uppercase tracking-widest">
        <div className="flex flex-col items-end gap-1">
          <span>System Status</span>
          <span className="text-hyper-orange">Optimal</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span>Active Bays</span>
          <span className="text-hyper-orange">12 / 12</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span>Response Time</span>
          <span className="text-hyper-orange">0.4ms</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-heading tracking-[0.3em] text-white/20 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"></div>
      </div>
    </section>
  );
}

/* ── ABOUT ── */
function AboutSection() {
  const services = [
    "Complete car servicing",
    "Advanced engine diagnostics",
    "Periodic maintenance",
    "Mechanical repairs",
    "Electrical repairs",
    "Suspension and brake services",
    "Oil and fluid management",
    "Luxury and performance vehicle support",
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 uppercase leading-tight">
                AI About Highway Motors
              </h2>
              <p className="text-base md:text-lg text-metallic-silver/60 font-light leading-relaxed">
                Since our inception in Wayanad, Highway Motors has been at the forefront of automotive innovation. 
                We blend decades of mechanical expertise with cutting-edge AI diagnostics to deliver unparalleled 
                vehicle care that powers every journey with confidence.
              </p>
            </div>
            <div className="text-hyper-orange font-heading text-xs tracking-widest uppercase">
              Wayanad, Kerala // Est. 2010
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={service}>
              <div className="glass-card p-6 md:p-8 hover:bg-white/5 transition-all group cursor-default h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-hyper-orange/30 font-heading text-2xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-white/5"></div>
                </div>
                <h3 className="font-heading text-sm text-white uppercase tracking-wider group-hover:text-hyper-orange transition-colors">
                  {service}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ── */
function ServicesSection() {
  const services = [
    { name: "Engine Repair", icon: "Engine", desc: "Precision rebuilds and performance calibrations" },
    { name: "Computer Diagnostics", icon: "Diagnostics", desc: "AI-powered fault detection systems" },
    { name: "Brake Service", icon: "Brake", desc: "Hydraulic system overhaul and pad replacement" },
    { name: "Battery Replacement", icon: "Battery", desc: "Smart charging systems and cell diagnostics" },
    { name: "AC Repair", icon: "AC", desc: "Climate control restoration and refrigerant service" },
    { name: "Wheel Alignment", icon: "Wheel", desc: "Laser-guided precision geometry tuning" },
    { name: "Tyre Services", icon: "Tyre", desc: "Mounting, balancing, and performance compounds" },
    { name: "Car Detailing", icon: "Detail", desc: "Ceramic coating and aesthetic restoration" },
    { name: "Oil Change", icon: "Oil", desc: "Synthetic infusion and molecular analysis" },
    { name: "Suspension Tuning", icon: "Suspension", desc: "Damping calibration and ride optimization" },
    { name: "Transmission Repair", icon: "Transmission", desc: "Gearbox rebuilds and torque mapping" },
    { name: "Emergency Roadside", icon: "Emergency", desc: "24/7 AI-assisted rescue and recovery" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 uppercase leading-tight">
                Smart Service Galaxy
              </h2>
              <p className="text-base text-metallic-silver/60 max-w-md font-light">
                Our comprehensive automotive ecosystem covers every mechanical need with AI-enhanced precision.
              </p>
            </div>
            <Link
              to="/services"
              className="text-hyper-orange font-heading text-xs tracking-widest uppercase hover:text-hyper-gold transition-colors"
            >
              View All Services &rarr;
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((s) => (
            <ScrollReveal key={s.name}>
              <div className="glass-card p-8 hover:bg-white/5 transition-all group cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ServiceIcon name={s.icon} />
                </div>
                <div className="size-12 mb-6 border border-hyper-orange/30 flex items-center justify-center group-hover:border-hyper-orange transition-colors">
                  <div className="size-2 bg-hyper-orange animate-pulse"></div>
                </div>
                <h3 className="font-heading font-bold text-white mb-2 uppercase tracking-wider text-sm">
                  {s.name}
                </h3>
                <p className="text-sm text-metallic-silver/50">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    Engine: <EngineSvg />,
    Diagnostics: <DiagSvg />,
    Brake: <BrakeSvg />,
    Battery: <BatterySvg />,
    AC: <ACSvg />,
    Wheel: <WheelSvg />,
    Tyre: <TyreSvg />,
    Detail: <DetailSvg />,
    Oil: <OilSvg />,
    Suspension: <SuspensionSvg />,
    Transmission: <TransSvg />,
    Emergency: <EmergencySvg />,
  };
  return icons[name] || <div className="w-16 h-16 bg-white/5" />;
}

/* SVG Service Icons */
function EngineSvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>; }
function DiagSvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>; }
function BrakeSvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>; }
function BatterySvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>; }
function ACSvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>; }
function WheelSvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v12M6 12h12" /></svg>; }
function TyreSvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18a6 6 0 100-12 6 6 0 000 12z" /></svg>; }
function DetailSvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>; }
function OilSvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>; }
function SuspensionSvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>; }
function TransSvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>; }
function EmergencySvg() { return <svg className="w-16 h-16 text-hyper-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>; }

/* ── DIAGNOSTICS ── */
function DiagnosticsSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 border-y border-white/5 bg-graphite/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 uppercase leading-tight">
                Vehicle Diagnostics Intelligence Grid
              </h2>
              <p className="text-base md:text-lg text-metallic-silver/60 font-light leading-relaxed">
                Our proprietary AI-engine doesn't just find faults; it predicts the future health of your machine. 
                Welcome to the Smart Service Galaxy.
              </p>
            </div>
            <div className="text-hyper-orange font-heading text-xs tracking-widest uppercase animate-pulse-ember">
              Scanning Sector 07 // Wayanad
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <ScrollReveal>
            <div className="glass-card p-8 md:p-10 hover:bg-white/5 transition-colors group cursor-default scanline-effect relative overflow-hidden">
              <div className="size-12 mb-8 border border-hyper-orange/30 flex items-center justify-center group-hover:border-hyper-orange">
                <div className="size-2 bg-hyper-orange animate-pulse"></div>
              </div>
              <h3 className="font-heading font-bold text-white mb-4 uppercase tracking-wider text-sm">AI Fault Detection</h3>
              <p className="text-sm text-metallic-silver/50 mb-8">Real-time thermal imaging and acoustic analysis to identify microscopic mechanical stresses.</p>
              <div className="h-1 w-full bg-white/10 overflow-hidden">
                <div className="h-full bg-hyper-orange w-2/3"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-card p-8 md:p-10 hover:bg-white/5 transition-colors group cursor-default relative overflow-hidden">
              <div className="size-12 mb-8 border border-hyper-gold/30 flex items-center justify-center group-hover:border-hyper-gold">
                <div className="size-2 bg-hyper-gold animate-pulse"></div>
              </div>
              <h3 className="font-heading font-bold text-white mb-4 uppercase tracking-wider text-sm">Performance Grid</h3>
              <p className="text-sm text-metallic-silver/50 mb-8">Interactive suspension tuning and torque output visualization for precision handling.</p>
              <div className="h-1 w-full bg-white/10 overflow-hidden">
                <div className="h-full bg-hyper-gold w-full"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-card p-8 md:p-10 hover:bg-white/5 transition-colors group cursor-default relative overflow-hidden">
              <div className="size-12 mb-8 border border-hyper-orange/30 flex items-center justify-center group-hover:border-hyper-orange">
                <div className="size-2 bg-hyper-orange animate-pulse"></div>
              </div>
              <h3 className="font-heading font-bold text-white mb-4 uppercase tracking-wider text-sm">Fluid Dynamics</h3>
              <p className="text-sm text-metallic-silver/50 mb-8">Molecular level oil analysis and coolant system efficiency monitoring via AI sensor arrays.</p>
              <div className="h-1 w-full bg-white/10 overflow-hidden">
                <div className="h-full bg-hyper-orange w-1/2"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div className="glass-card p-8 relative overflow-hidden">
              <img
                src={engineDetail}
                alt="Engine diagnostics"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative">
                <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Real-Time Engine Scan</h3>
                <p className="text-sm text-metallic-silver/50">4,000+ data points scanned per second for predictive maintenance intelligence.</p>
              </div>
            </div>
            <div className="glass-card p-8 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-2 uppercase">Mechanical Health Score</h3>
                <p className="text-sm text-metallic-silver/50">AI-generated vehicle health index with actionable maintenance recommendations.</p>
              </div>
              <div className="text-5xl font-heading font-bold text-gradient-ember">98.4%</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── GARAGE EXPERIENCE ── */
function GarageSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <ScrollReveal className="w-full lg:w-1/2">
          <div className="relative">
            <img
              src={garageBay}
              alt="Luxury automotive service bay"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
            <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 glass-card p-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-heading tracking-widest text-hyper-orange uppercase">HyperBay 01</span>
                <span className="text-[10px] font-heading tracking-widest text-white/40 uppercase">Operational</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="w-full lg:w-1/2">
          <ScrollReveal>
            <span className="text-hyper-orange font-heading text-xs tracking-[0.5em] uppercase mb-6 block">
              Workshop Evolution
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8 leading-[0.95] italic uppercase">
              Where Engineering <br />Meets Artistry
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {[
              { num: "01", title: "Smart Hydraulic Systems", desc: "Automated lifting platforms synchronized with vehicle weight distribution sensors." },
              { num: "02", title: "Aesthetic Refinement", desc: "Climate-controlled detailing chambers utilizing ionic particle removal technology." },
              { num: "03", title: "Digital Heritage", desc: "Complete blockchain-secured digital maintenance logs for performance preservation." },
            ].map((item) => (
              <ScrollReveal key={item.num}>
                <div className="flex gap-6 items-start">
                  <span className="text-3xl font-heading text-white/10 font-bold">{item.num}</span>
                  <div>
                    <h4 className="text-white font-heading text-sm mb-2 uppercase tracking-widest">{item.title}</h4>
                    <p className="text-metallic-silver/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── EMERGENCY ── */
function EmergencySection() {
  return (
    <section className="py-10 bg-hyper-orange overflow-hidden">
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex gap-12 text-mechanic-dark font-heading font-bold text-5xl md:text-7xl tracking-tighter uppercase italic opacity-90">
          <span>Emergency Roadside Universe &bull; 24/7 AI Dispatch &bull; +91 9847359032 &bull; Highway Motors Wayanad &bull; Emergency Roadside Universe &bull; </span>
          <span>Emergency Roadside Universe &bull; 24/7 AI Dispatch &bull; +91 9847359032 &bull; Highway Motors Wayanad &bull; Emergency Roadside Universe &bull; </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-mechanic-dark/70 text-sm max-w-md">
          Our AI-assisted emergency response system dispatches the nearest rescue unit within minutes. 
          Real-time GPS tracking and live communication keep you connected throughout.
        </p>
        <a
          href="tel:+919847359032"
          className="px-8 py-4 border-2 border-mechanic-dark text-mechanic-dark font-heading font-bold text-xs tracking-widest uppercase hover:bg-mechanic-dark hover:text-hyper-orange transition-all"
        >
          Call Emergency Line
        </a>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ── */
function TestimonialsSection() {
  const testimonials = [
    { name: "Rahul Menon", role: "BMW X5 Owner", text: "Highway Motors transformed my vehicle's performance. The AI diagnostics caught issues before they became problems. Truly next-level service." },
    { name: "Priya Nair", role: "Mercedes C-Class Owner", text: "The attention to detail is unmatched. From ceramic detailing to engine tuning, every service feels like a premium experience." },
    { name: "Vikram Raj", role: "Audi Q7 Owner", text: "Emergency roadside assistance saved me on a midnight highway. The AI dispatch was incredibly fast and professional." },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-12 uppercase leading-tight">
            Customer Trust Experience
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {testimonials.map((t) => (
            <ScrollReveal key={t.name}>
              <div className="glass-card p-8 hover:bg-white/5 transition-all h-full flex flex-col">
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-hyper-orange text-sm">&#9733;</span>
                  ))}
                </div>
                <p className="text-metallic-silver/70 text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-heading text-white text-sm uppercase tracking-wider">{t.name}</div>
                  <div className="text-metallic-silver/40 text-xs mt-1">{t.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 relative overflow-hidden rounded-sm">
            <img
              src={transformation}
              alt="Vehicle transformation"
              loading="lazy"
              className="w-full aspect-[21/9] object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white uppercase mb-2">Before & After Transformations</h3>
              <p className="text-metallic-silver/60 text-sm max-w-md">Witness the power of precision engineering. Every vehicle leaves our garage better than new.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── BOOKING CTA ── */
function BookingSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={detailing}
          alt="Premium car detailing"
          loading="lazy"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 uppercase leading-tight">
            AI Service Booking Portal
          </h2>
          <p className="text-lg text-metallic-silver/60 mb-12 max-w-2xl mx-auto font-light">
            Experience the future of automotive scheduling. Our intelligent booking system analyzes your vehicle's 
            history and recommends the optimal service schedule powered by AI.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { label: "AI Repair Suggestions", desc: "Predictive maintenance alerts" },
              { label: "Smart Calendar", desc: "Real-time availability" },
              { label: "Digital History", desc: "Complete service records" },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6 text-left">
                <div className="text-hyper-orange font-heading text-xs tracking-widest uppercase mb-2">{item.label}</div>
                <div className="text-metallic-silver/50 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Link
            to="/booking"
            className="liquid-metal px-12 py-5 rounded-sm font-heading font-bold text-sm tracking-widest text-mechanic-dark uppercase inline-flex items-center justify-center"
          >
            Book Your Service Now
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── CONTACT NEXUS ── */
function ContactSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8 uppercase leading-tight">
                Immersive Contact Nexus
              </h2>
              <div className="space-y-6 font-heading text-sm">
                <div className="flex gap-4">
                  <span className="text-hyper-orange tracking-widest uppercase w-12">Loc</span>
                  <span className="text-metallic-silver/60">Highway Motors Building, Wayanad, Kerala, IN</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-hyper-orange tracking-widest uppercase w-12">Tel</span>
                  <a href="tel:+919847359032" className="text-metallic-silver/60 hover:text-hyper-orange transition-colors">+91 9847359032</a>
                </div>
                <div className="flex gap-4">
                  <span className="text-hyper-orange tracking-widest uppercase w-12">Hrs</span>
                  <span className="text-metallic-silver/60">Mon-Sat: 08:00 - 22:00 IST</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-hyper-orange tracking-widest uppercase w-12">Emg</span>
                  <span className="text-metallic-silver/60">24/7 Roadside Assistance Available</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://wa.me/919847359032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white font-heading text-xs tracking-widest uppercase hover:border-hyper-orange hover:text-hyper-orange transition-all"
                >
                  WhatsApp Support
                </a>
                <Link
                  to="/contact"
                  className="px-6 py-3 border border-hyper-orange/30 text-hyper-orange font-heading text-xs tracking-widest uppercase hover:bg-hyper-orange hover:text-white transition-all"
                >
                  Full Contact
                </Link>
              </div>
            </div>

            <div className="relative h-[300px] lg:h-auto border border-white/10 overflow-hidden">
              <img
                src={emergency}
                alt="Emergency roadside service location"
                loading="lazy"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="size-4 bg-hyper-orange rounded-full animate-ping absolute"></div>
                <div className="size-4 bg-hyper-orange rounded-full relative"></div>
              </div>
              <div className="absolute bottom-4 left-4 glass-card px-4 py-2">
                <span className="text-[10px] font-heading tracking-widest text-hyper-orange uppercase">Wayanad Command Center</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── MAIN PAGE ── */
function IndexPage() {
  return (
    <main className="bg-mechanic-dark min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DiagnosticsSection />
      <GarageSection />
      <EmergencySection />
      <TestimonialsSection />
      <BookingSection />
      <ContactSection />
    </main>
  );
}
