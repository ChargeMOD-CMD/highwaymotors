import { createFileRoute, Link } from "@tanstack/react-router";
import engineDetail from "../assets/engine-detail.jpg";

export const Route = createFileRoute("/diagnostics")({
  head: () => ({
    meta: [
      { title: "Diagnostics | Highway Motors | AI Vehicle Intelligence Grid" },
      { name: "description", content: "Experience AI-powered vehicle diagnostics at Highway Motors Wayanad. Real-time engine scans, performance analytics, and predictive maintenance intelligence." },
      { property: "og:title", content: "Diagnostics | Highway Motors" },
      { property: "og:description", content: "AI-powered vehicle diagnostics in Wayanad with real-time scanning and predictive maintenance." },
    ],
  }),
  component: DiagnosticsPage,
});

const diagnostics = [
  {
    title: "AI Fault Detection",
    code: "SYS_01",
    desc: "Real-time thermal imaging and acoustic analysis to identify microscopic mechanical stresses before they escalate.",
    status: "Active",
    health: 94,
    color: "hyper-orange",
  },
  {
    title: "Performance Grid",
    code: "SYS_02",
    desc: "Interactive suspension tuning and torque output visualization for precision handling optimization.",
    status: "Active",
    health: 100,
    color: "hyper-gold",
  },
  {
    title: "Fluid Dynamics",
    code: "SYS_03",
    desc: "Molecular-level oil analysis and coolant system efficiency monitoring via AI sensor arrays.",
    status: "Active",
    health: 87,
    color: "hyper-orange",
  },
  {
    title: "Thermal Mapping",
    code: "SYS_04",
    desc: "Infrared heat signature analysis across the entire cooling and exhaust architecture.",
    status: "Standby",
    health: 96,
    color: "hyper-gold",
  },
  {
    title: "Acoustic Analysis",
    code: "SYS_05",
    desc: "AI-filtered microphones detect micro-fissures and bearing wear through sound frequency patterns.",
    status: "Active",
    health: 91,
    color: "hyper-orange",
  },
  {
    title: "Battery Intelligence",
    code: "SYS_06",
    desc: "Smart cell monitoring, charge cycle analysis, and predictive failure detection for all battery types.",
    status: "Active",
    health: 98,
    color: "hyper-gold",
  },
];

function DiagnosticsPage() {
  return (
    <main className="bg-mechanic-dark min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Hero */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-6xl text-white uppercase leading-tight">
                Vehicle Diagnostics <span className="text-gradient-ember">Intelligence Grid</span>
              </h1>
            </div>
            <div className="text-hyper-orange font-heading text-xs tracking-widest uppercase animate-pulse-ember">
              [ SYSTEM SCANNING ACTIVE ]
            </div>
          </div>
          <p className="text-lg md:text-xl text-metallic-silver/60 max-w-3xl font-light leading-relaxed">
            Our proprietary diagnostic layer scans 4,000+ data points per second to identify mechanical 
            friction before it occurs. Welcome to the future of predictive maintenance.
          </p>
        </div>

        {/* Main Visual */}
        <div className="py-12 relative">
          <img
            src={engineDetail}
            alt="AI engine diagnostics visualization"
            loading="lazy"
            className="w-full aspect-[21/9] object-cover rounded-sm opacity-70"
          />
          <div className="absolute inset-0 border border-hyper-orange/20 pointer-events-none rounded-sm"></div>
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 glass-card px-6 py-4">
            <div className="text-[10px] font-heading tracking-widest text-hyper-orange uppercase mb-1">Live Scan</div>
            <div className="text-white font-heading text-xl">4,237 Data Points / Sec</div>
          </div>
        </div>

        {/* Diagnostics Grid */}
        <div className="py-16 md:py-24">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-12 uppercase tracking-wider">
            Diagnostic Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {diagnostics.map((diag) => (
              <div key={diag.code} className="glass-card p-8 scanline-effect relative overflow-hidden hover:bg-white/5 transition-all">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-heading text-[10px] text-metallic-silver/40 tracking-widest uppercase">{diag.code}</span>
                  <div className={`size-2 rounded-full bg-${diag.color} animate-pulse`}></div>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3 uppercase tracking-wider">
                  {diag.title}
                </h3>
                <p className="text-sm text-metallic-silver/50 mb-6 leading-relaxed">{diag.desc}</p>
                <div className="h-1 w-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full bg-${diag.color} transition-all duration-1000`}
                    style={{ width: `${diag.health}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 font-heading text-[10px] text-metallic-silver/40 tracking-widest uppercase">
                  <span>Health Score</span>
                  <span>{diag.health}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="py-16 md:py-24 border-y border-white/5">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-12 uppercase tracking-wider">
            The Diagnostic Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Intake Scan", desc: "Comprehensive visual and electronic assessment of all vehicle systems." },
              { step: "02", title: "AI Analysis", desc: "Machine learning algorithms process 4,000+ data points for anomaly detection." },
              { step: "03", title: "Report Generation", desc: "Detailed health score with prioritized maintenance recommendations." },
              { step: "04", title: "Repair Execution", desc: "Precision servicing with blockchain-secured digital maintenance logs." },
            ].map((s) => (
              <div key={s.step} className="relative">
                <span className="text-5xl font-heading font-bold text-white/5">{s.step}</span>
                <h3 className="font-heading font-bold text-white mb-2 uppercase tracking-wider text-sm mt-2">{s.title}</h3>
                <p className="text-sm text-metallic-silver/50 leading-relaxed">{s.desc}</p>
                {s.step !== "04" && (
                  <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-white/5 translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 md:py-24 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 uppercase">
            Book Your AI Diagnostic Scan
          </h2>
          <p className="text-metallic-silver/60 mb-8 max-w-xl mx-auto">
            Discover what your vehicle isn&apos;t telling you. Our AI diagnostics reveal hidden issues before they become costly repairs.
          </p>
          <Link
            to="/booking"
            className="liquid-metal px-10 py-5 rounded-sm font-heading font-bold text-xs tracking-widest text-mechanic-dark uppercase inline-flex items-center justify-center"
          >
            Schedule Scan
          </Link>
        </div>
      </div>
    </main>
  );
}
