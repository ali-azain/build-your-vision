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
                        <span>Die All-in-One-Plattform für Immobilienintelligenz</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display leading-[1.05]">
                        <span className="text-foreground">Denken Sie es. </span>
                        <span className="text-gradient">Bauen Sie es. </span>
                        <span className="text-foreground">Iterieren Sie es.</span>
                    </h1>

                    <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        EarlyBuild kombiniert Datenanalyse, generatives Design und KI, um
                        Immobilienentwicklern, Investoren und Kommunen digitale Lösungen
                        für eine erfolgreiche Projektentwicklung zu bieten.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                        <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-xl">
                            Kostenlos starten
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-base px-8 py-6 rounded-xl border-border/50 bg-card/40 hover:bg-card/60"
                        >
                            <Play className="mr-2 h-4 w-4" />
                            Demo ansehen
                        </Button>
                    </div>

                    {/* Trusted-by line */}
                    <p className="mt-16 text-xs uppercase tracking-widest text-muted-foreground/60">
                        Vertraut von führenden Entwicklern & Kommunen
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
                            <span className="text-gradient">Visuelles</span> Bauen
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            Erstellen Sie komplexe Immobilienmodelle visuell mit unserer intuitiven Drag-and-Drop-Oberfläche.
                            Verbinden Sie Datenquellen, führen Sie KI-Analysen durch und generieren Sie Berichte —
                            alles, ohne eine einzige Zeile Code zu schreiben.
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
                                        title: "Standortanalyse",
                                        desc: "Makro- & Mikrolagedaten, Demografie, Infrastruktur-Scoring",
                                        color: "from-primary/20 to-primary/5",
                                    },
                                    {
                                        icon: <Cpu className="text-secondary" size={24} />,
                                        title: "KI-Verarbeitung",
                                        desc: "Machine-Learning-Modelle für Bewertung, Risikobewertung, Trendvorhersage",
                                        color: "from-secondary/20 to-secondary/5",
                                    },
                                    {
                                        icon: <Building2 className="text-accent" size={24} />,
                                        title: "BIM-Generierung",
                                        desc: "Automatisierte 3D-Bauwerksdatenmodelle mit Kostenschätzung",
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
                            { icon: <Layers size={20} />, title: "BIM-Modelle", desc: "Hochauflösende digitale Gebäudemodelle" },
                            { icon: <Bot size={20} />, title: "KI-Analysen", desc: "Automatisierte Markt- & Machbarkeitsstudien" },
                            { icon: <BarChart3 size={20} />, title: "Kostenprognosen", desc: "Echtzeit-Budget- & Renditeberechnungen" },
                            { icon: <Code2 size={20} />, title: "API-Zugriff", desc: "Integration in Ihre bestehenden Tools" },
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
                                <span className="text-gradient">Automatisieren</span> zur Integration Ihres Workflows
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Verbinden Sie nahtlos Ihre bestehenden Tools und Datenquellen. EarlyBuild
                                integriert sich in CAD-Systeme, GIS-Plattformen, Immobiliendatenbanken und
                                Finanzsoftware, um eine einheitliche Projektentwicklungsumgebung zu schaffen.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Verbindung zu 50+ Immobiliendatenquellen sofort",
                                    "Bi-direktionale Synchronisation mit BIM- & CAD-Software",
                                    "Automatisierte Berichterstellung und Verteilung",
                                    "Webhook- & API-Support für benutzerdefinierte Pipelines",
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
                                Integrationen erkunden
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        {/* Integration visual */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-50"></div>
                            <div className="relative bg-card/60 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { icon: <Database size={28} />, label: "Daten API" },
                                        { icon: <Globe size={28} />, label: "GIS Karten" },
                                        { icon: <FileText size={28} />, label: "Berichte" },
                                        { icon: <Boxes size={28} />, label: "BIM/CAD" },
                                        { icon: <TrendingUp size={28} />, label: "Analytik" },
                                        { icon: <PieChart size={28} />, label: "Finanzen" },
                                        { icon: <Shield size={28} />, label: "Compliance" },
                                        { icon: <Cloud size={28} />, label: "Cloud" },
                                        { icon: <Cpu size={28} />, label: "KI Engine" },
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
                            <span className="text-gradient">Tausende</span> von Vorlagen, um zu starten
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            vorgefertigte Workflows für jeden Immobilien-Anwendungsfall — von Machbarkeitsstudien
                            und Kostenberechnungen bis hin zu Nachhaltigkeitsbewertungen und Stadtplanung.
                            Passen Sie es an Ihre Bedürfnisse an.
                        </p>
                    </div>

                    {/* Template grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Machbarkeitsstudie",
                                desc: "Umfassende Projektmachbarkeitsanalyse mit automatisierter Datenerfassung und KI-gestützten Erkenntnissen.",
                                tag: "Beliebt",
                                tagColor: "bg-primary/20 text-primary",
                            },
                            {
                                title: "Standortintelligenz",
                                desc: "Makro- & Mikrolagenanalyse, demografisches Scoring, Infrastrukturkartierung und Trenderkennung.",
                                tag: "KI-basiert",
                                tagColor: "bg-secondary/20 text-secondary",
                            },
                            {
                                title: "Kostenschätzung",
                                desc: "Automatisierte Baukostenprognosen basierend auf BIM-Modellen, historischen Daten und Marktbedingungen.",
                                tag: "Finanzen",
                                tagColor: "bg-accent/20 text-accent",
                            },
                            {
                                title: "Generatives Design",
                                desc: "KI-gesteuerte Generierung von Gebäudelayouts mit Optimierung für Dichte, Sonnenlicht und Einhaltung gesetzlicher Vorschriften.",
                                tag: "Design",
                                tagColor: "bg-primary/20 text-primary",
                            },
                            {
                                title: "Portfolio-Analyse",
                                desc: "Leistungsverfolgung von Multi-Asset-Portfolios mit Risikobewertung und Optimierungsempfehlungen.",
                                tag: "Enterprise",
                                tagColor: "bg-secondary/20 text-secondary",
                            },
                            {
                                title: "Nachhaltigkeitsbericht",
                                desc: "ESG-Compliance-Reporting, CO2-Fußabdruckanalyse und Unterstützung bei der Green-Building-Zertifizierung.",
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
                            Alle Vorlagen durchsuchen
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
                            <span className="text-gradient">Debuggen</span> & Überwachen
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            Volle Transparenz in jeden Pipeline-Durchlauf. Beheben Sie Fehler sofort, verfolgen Sie
                            Ausführungsmetriken und überwachen Sie die Datenqualität in all Ihren Projekten
                            in Echtzeit.
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
                                    <h3 className="text-xl font-bold font-display">Echtzeit-Überwachung</h3>
                                </div>

                                {/* Simulated dashboard */}
                                <div className="space-y-3">
                                    {[
                                        { label: "Datenaufnahme", status: "active", value: "2.4k/sek" },
                                        { label: "KI-Modelle", status: "active", value: "99.8% Verfügbarkeit" },
                                        { label: "Berichtswarteschlange", status: "active", value: "12 ausstehend" },
                                        { label: "API-Anfragen", status: "active", value: "847/min" },
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
                                    <h3 className="text-xl font-bold font-display">Ausführungsprotokolle</h3>
                                </div>

                                {/* Simulated log view */}
                                <div className="bg-card/80 rounded-xl border border-border/30 p-4 font-mono text-xs space-y-2 overflow-hidden">
                                    <div className="flex gap-2">
                                        <span className="text-secondary">✓</span>
                                        <span className="text-muted-foreground">12:04:01</span>
                                        <span className="text-foreground/80">Standortdaten abgerufen · 2.481 Datensätze</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-secondary">✓</span>
                                        <span className="text-muted-foreground">12:04:03</span>
                                        <span className="text-foreground/80">KI-Bewertungsmodell ausgeführt · 98,2% Konfidenz</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-secondary">✓</span>
                                        <span className="text-muted-foreground">12:04:05</span>
                                        <span className="text-foreground/80">BIM-Modell generiert · 3 Varianten</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-secondary">✓</span>
                                        <span className="text-muted-foreground">12:04:06</span>
                                        <span className="text-foreground/80">Kostenprognose abgeschlossen · 2,4 Mio. € Schätzung</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-primary">→</span>
                                        <span className="text-muted-foreground">12:04:07</span>
                                        <span className="text-foreground/80">Generiere PDF-Bericht...</span>
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
                            <span className="text-gradient">Bereitstellen</span> und selbst hosten
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            Führen Sie EarlyBuild in unserer sicheren Cloud aus oder stellen Sie es auf Ihrer eigenen
                            Infrastruktur bereit. Volle Datensouveränität mit Sicherheit auf Unternehmensebene
                            und eingebauter DSGVO-Konformität.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Cloud size={28} />,
                                title: "Cloud-Hosting",
                                desc: "Vollständig verwaltete Bereitstellung mit 99,9% Verfügbarkeits-SLA, automatischen Updates und globalem CDN.",
                            },
                            {
                                icon: <Server size={28} />,
                                title: "Selbst gehostet",
                                desc: "Bereitstellung auf Ihren eigenen Servern mit Docker oder Kubernetes. Volle Kontrolle über Ihre Daten.",
                            },
                            {
                                icon: <Lock size={28} />,
                                title: "Unternehmenssicherheit",
                                desc: "SOC 2-konform, Ende-zu-Ende-Verschlüsselung, SSO-Integration und rollenbasierte Zugriffskontrolle.",
                            },
                            {
                                icon: <Shield size={28} />,
                                title: "DSGVO-Konform",
                                desc: "Auftragsverarbeitungsverträge, EU-Datenresidenz und vollständige Audit-Trails integriert.",
                            },
                            {
                                icon: <Rocket size={28} />,
                                title: "Automatische Skalierung",
                                desc: "Infrastruktur skaliert automatisch mit Ihrer Arbeitslast. Zahlen Sie nur für das, was Sie nutzen.",
                            },
                            {
                                icon: <Grid3X3 size={28} />,
                                title: "Mandantenfähig",
                                desc: "Isolieren Sie Projekte und Teams mit mandantenfähiger Architektur. Perfekt für Agenturen.",
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
                        Es gibt nichts, was Sie mit<br />
                        <span className="text-gradient">EarlyBuild</span> nicht <span className="text-gradient">automatisieren</span> können
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Von der Datenerfassung über das Gebäudedesign bis hin zum Portfoliomanagement —
                        beschleunigen Sie jeden Schritt Ihres Immobilienentwicklungszyklus.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="hero" size="lg" className="text-base px-10 py-6 rounded-xl">
                            Heute anfangen zu bauen
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-base px-10 py-6 rounded-xl border-border/50 bg-card/40 hover:bg-card/60"
                        >
                            Vertrieb kontaktieren
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Product;
