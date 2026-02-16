import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Play,
    Layers,
    Zap,
    Grid3X3,
    Bug,
    Rocket,
    Globe,
    Bot,
    Database,
    Shield,
    BarChart3,
    Code2,
    Workflow,
    Boxes,
    Server,
    Cloud,
    Lock,
    Eye,
    Sparkles,
    ChevronRight,
    Building2,
    Cpu,
    Map,
    FileText,
    TrendingUp,
    PieChart,
} from "lucide-react";

const Product = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navbar />

            {/* ─── Hero Section ─── */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
                {/* Radial glow */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-primary/8 blur-[120px]"></div>
                    <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] rounded-full bg-secondary/6 blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
                    <div className="inline-flex items-center gap-2 bg-card/60 border border-border/50 rounded-full px-4 py-1.5 text-sm text-muted-foreground mb-8 backdrop-blur-sm">
                        <Sparkles size={14} className="text-secondary" />
                        <span>The all-in-one platform for real estate intelligence</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display leading-[1.05]">
                        <span className="text-foreground">Think it. </span>
                        <span className="text-gradient">Build it. </span>
                        <span className="text-foreground">Iterate it.</span>
                    </h1>

                    <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        EarlyBuild combines data analytics, generative design, and AI to empower
                        real estate developers, investors, and municipalities with digital
                        solutions for successful project development.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                        <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-xl">
                            Get Started Free
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-base px-8 py-6 rounded-xl border-border/50 bg-card/40 hover:bg-card/60"
                        >
                            <Play className="mr-2 h-4 w-4" />
                            Watch Demo
                        </Button>
                    </div>

                    {/* Trusted-by line */}
                    <p className="mt-16 text-xs uppercase tracking-widest text-muted-foreground/60">
                        Trusted by leading developers & municipalities
                    </p>
                </div>
            </section>

            {/* ─── Visual Building Section ─── */}
            <section className="py-24 px-6 md:px-12 relative">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                            <span className="text-gradient">Visual</span> building
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            Build complex real estate models visually with our intuitive drag-and-drop
                            interface. Connect data sources, run AI analyses, and generate reports —
                            all without writing a single line of code.
                        </p>
                    </div>

                    {/* Main feature visual */}
                    <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-sm shadow-2xl mb-12">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                        <div className="relative p-8 md:p-12">
                            {/* Simulated workflow canvas */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: <Map className="text-primary" size={24} />,
                                        title: "Location Analysis",
                                        desc: "Macro & micro location data, demographics, infrastructure scoring",
                                        color: "from-primary/20 to-primary/5",
                                    },
                                    {
                                        icon: <Cpu className="text-secondary" size={24} />,
                                        title: "AI Processing",
                                        desc: "Machine learning models for valuation, risk assessment, trend prediction",
                                        color: "from-secondary/20 to-secondary/5",
                                    },
                                    {
                                        icon: <Building2 className="text-accent" size={24} />,
                                        title: "BIM Generation",
                                        desc: "Automated 3D building information models with cost estimation",
                                        color: "from-accent/20 to-accent/5",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="group relative bg-background/60 border border-border/50 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center mb-4 border border-border/50">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-lg font-bold text-foreground mb-2 font-display">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Flow connectors visual */}
                            <div className="hidden md:flex justify-center mt-8 gap-4 items-center">
                                <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50"></div>
                                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                                    <Workflow size={16} className="text-primary" />
                                </div>
                                <div className="h-px w-24 bg-gradient-to-r from-primary/50 to-secondary/50"></div>
                                <div className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center">
                                    <Zap size={16} className="text-secondary" />
                                </div>
                                <div className="h-px w-24 bg-gradient-to-r from-secondary/50 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Feature cards row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: <Layers size={20} />, title: "BIM Models", desc: "High-resolution digital building models" },
                            { icon: <Bot size={20} />, title: "AI Analyses", desc: "Automated market & feasibility studies" },
                            { icon: <BarChart3 size={20} />, title: "Cost Forecasts", desc: "Real-time budget & yield calculations" },
                            { icon: <Code2 size={20} />, title: "API Access", desc: "Integrate with your existing tools" },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="bg-card/60 border border-border/50 rounded-xl p-5 hover:bg-card/80 transition-all duration-300 group"
                            >
                                <div className="text-primary mb-3 group-hover:text-secondary transition-colors">{card.icon}</div>
                                <h4 className="font-bold text-foreground text-sm mb-1">{card.title}</h4>
                                <p className="text-xs text-muted-foreground">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Automate & Integrate Section ─── */}
            <section className="py-24 px-6 md:px-12 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-secondary/5 rounded-full blur-[120px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                <span className="text-gradient">Automate</span> to integrate your workflow
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Seamlessly connect your existing tools and data sources. EarlyBuild
                                integrates with CAD systems, GIS platforms, property databases, and
                                financial software to create a unified project development environment.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Connect to 50+ real estate data sources instantly",
                                    "Bi-directional sync with BIM & CAD software",
                                    "Automated report generation and distribution",
                                    "Webhook & API support for custom pipelines",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                            <ChevronRight className="w-3.5 h-3.5 text-secondary" />
                                        </div>
                                        <span className="text-sm text-foreground/80">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button variant="hero" className="mt-8 rounded-xl px-6 py-5">
                                Explore Integrations
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        {/* Integration visual */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-50"></div>
                            <div className="relative bg-card/60 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { icon: <Database size={28} />, label: "Data API" },
                                        { icon: <Globe size={28} />, label: "GIS Maps" },
                                        { icon: <FileText size={28} />, label: "Reports" },
                                        { icon: <Boxes size={28} />, label: "BIM/CAD" },
                                        { icon: <TrendingUp size={28} />, label: "Analytics" },
                                        { icon: <PieChart size={28} />, label: "Finance" },
                                        { icon: <Shield size={28} />, label: "Compliance" },
                                        { icon: <Cloud size={28} />, label: "Cloud" },
                                        { icon: <Cpu size={28} />, label: "AI Engine" },
                                    ].map((int, i) => (
                                        <div
                                            key={i}
                                            className="bg-background/60 border border-border/40 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
                                        >
                                            <div className="text-muted-foreground group-hover:text-primary transition-colors">{int.icon}</div>
                                            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{int.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Templates Section ─── */}
            <section className="py-24 px-6 md:px-12 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                            <span className="text-gradient">Thousands</span> of templates to get you started
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            Pre-built workflows for every real estate use case — from feasibility
                            studies and cost calculations to sustainability assessments and urban
                            planning. Customize to fit your needs.
                        </p>
                    </div>

                    {/* Template grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Feasibility Study",
                                desc: "Comprehensive project feasibility analysis with automated data collection and AI-driven insights.",
                                tag: "Popular",
                                tagColor: "bg-primary/20 text-primary",
                            },
                            {
                                title: "Location Intelligence",
                                desc: "Macro & micro location analysis, demographic scoring, infrastructure mapping and trend detection.",
                                tag: "AI-Powered",
                                tagColor: "bg-secondary/20 text-secondary",
                            },
                            {
                                title: "Cost Estimation",
                                desc: "Automated construction cost forecasts based on BIM models, historical data, and market conditions.",
                                tag: "Finance",
                                tagColor: "bg-accent/20 text-accent",
                            },
                            {
                                title: "Generative Design",
                                desc: "AI-driven building layout generation with optimization for density, sunlight, and regulatory compliance.",
                                tag: "Design",
                                tagColor: "bg-primary/20 text-primary",
                            },
                            {
                                title: "Portfolio Analysis",
                                desc: "Multi-asset portfolio performance tracking with risk assessment and optimization recommendations.",
                                tag: "Enterprise",
                                tagColor: "bg-secondary/20 text-secondary",
                            },
                            {
                                title: "Sustainability Report",
                                desc: "ESG compliance reporting, carbon footprint analysis, and green building certification support.",
                                tag: "ESG",
                                tagColor: "bg-accent/20 text-accent",
                            },
                        ].map((tpl, i) => (
                            <div
                                key={i}
                                className="group bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:bg-card/70 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tpl.tagColor}`}>
                                        {tpl.tag}
                                    </span>
                                    <ArrowRight
                                        size={16}
                                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 font-display">{tpl.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{tpl.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline" className="rounded-xl border-border/50 bg-card/40 hover:bg-card/60 px-8 py-5">
                            Browse All Templates
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* ─── Debug & Monitor Section ─── */}
            <section className="py-24 px-6 md:px-12 relative bg-card/20">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/4 rounded-full blur-[120px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                            <span className="text-gradient">Debug</span> & monitor
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            Full visibility into every pipeline run. Debug errors instantly, track
                            execution metrics, and monitor data quality across all your projects
                            in real time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Monitoring card */}
                        <div className="bg-background/80 border border-border/50 rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Eye size={20} className="text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold font-display">Real-time Monitoring</h3>
                                </div>

                                {/* Simulated dashboard */}
                                <div className="space-y-3">
                                    {[
                                        { label: "Data Ingestion", status: "active", value: "2.4k/sec" },
                                        { label: "AI Models", status: "active", value: "99.8% uptime" },
                                        { label: "Report Queue", status: "active", value: "12 pending" },
                                        { label: "API Requests", status: "active", value: "847/min" },
                                    ].map((metric, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-card/60 border border-border/30">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                                                <span className="text-sm text-foreground/80">{metric.label}</span>
                                            </div>
                                            <span className="text-xs text-muted-foreground font-mono">{metric.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Debug card */}
                        <div className="bg-background/80 border border-border/50 rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                                        <Bug size={20} className="text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-bold font-display">Execution Logs</h3>
                                </div>

                                {/* Simulated log view */}
                                <div className="bg-card/80 rounded-xl border border-border/30 p-4 font-mono text-xs space-y-2 overflow-hidden">
                                    <div className="flex gap-2">
                                        <span className="text-secondary">✓</span>
                                        <span className="text-muted-foreground">12:04:01</span>
                                        <span className="text-foreground/80">Location data fetched · 2,481 records</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-secondary">✓</span>
                                        <span className="text-muted-foreground">12:04:03</span>
                                        <span className="text-foreground/80">AI valuation model executed · 98.2% confidence</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-secondary">✓</span>
                                        <span className="text-muted-foreground">12:04:05</span>
                                        <span className="text-foreground/80">BIM model generated · 3 variants</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-secondary">✓</span>
                                        <span className="text-muted-foreground">12:04:06</span>
                                        <span className="text-foreground/80">Cost forecast complete · €2.4M estimate</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-primary">→</span>
                                        <span className="text-muted-foreground">12:04:07</span>
                                        <span className="text-foreground/80">Generating PDF report...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Deploy & Self-host Section ─── */}
            <section className="py-24 px-6 md:px-12 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                            <span className="text-gradient">Deploy</span> and self-host
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            Run EarlyBuild in our secure cloud or deploy on your own
                            infrastructure. Full data sovereignty with enterprise-grade security
                            and GDPR compliance built in.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Cloud size={28} />,
                                title: "Cloud Hosted",
                                desc: "Fully managed deployment with 99.9% uptime SLA, automatic updates, and global CDN.",
                            },
                            {
                                icon: <Server size={28} />,
                                title: "Self-Hosted",
                                desc: "Deploy on your own servers with Docker or Kubernetes. Complete control over your data.",
                            },
                            {
                                icon: <Lock size={28} />,
                                title: "Enterprise Security",
                                desc: "SOC 2 compliant, end-to-end encryption, SSO integration, and role-based access control.",
                            },
                            {
                                icon: <Shield size={28} />,
                                title: "GDPR Compliant",
                                desc: "Data processing agreements, EU data residency, and complete audit trails built in.",
                            },
                            {
                                icon: <Rocket size={28} />,
                                title: "Auto Scaling",
                                desc: "Infrastructure scales automatically with your workload. Pay only for what you use.",
                            },
                            {
                                icon: <Grid3X3 size={28} />,
                                title: "Multi-Tenant",
                                desc: "Isolate projects and teams with multi-tenant architecture. Perfect for agencies.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:bg-card/70 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-background/80 border border-border/50 flex items-center justify-center mb-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:border-primary/30">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 font-display">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Final CTA Section ─── */}
            <section className="relative py-32 px-6 md:px-12 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                {/* Gradient background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-secondary/10"></div>
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[120px]"></div>
                    <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-secondary/8 rounded-full blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-6 leading-tight">
                        There&apos;s nothing you<br />
                        can&apos;t <span className="text-gradient">automate</span> with<br />
                        <span className="text-gradient">EarlyBuild</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        From data acquisition to building design to portfolio management —
                        accelerate every step of your real estate development lifecycle.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="hero" size="lg" className="text-base px-10 py-6 rounded-xl">
                            Start Building Today
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-base px-10 py-6 rounded-xl border-border/50 bg-card/40 hover:bg-card/60"
                        >
                            Talk to Sales
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Product;
