import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Plus, User } from "lucide-react";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                </div>
                <div className="relative z-10 text-center mt-16">
                    <h1 className="text-6xl md:text-8xl font-bold text-foreground drop-shadow-sm tracking-tight font-display">Über uns</h1>
                </div>
            </div>

            {/* Empowering People Section */}
            <section className="py-24 px-6 md:px-12 bg-background">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 group-hover:opacity-30 transition blur-lg"></div>
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop"
                            alt="Abstract Building"
                            className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight font-display">
                            Menschen befähigen durch <span className="text-secondary">datengestütztes Design</span>
                        </h2>
                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                            Unsere Mission ist es, architektonisches Design zu demokratisieren, indem wir komplexe Daten zugänglich und umsetzbar machen. Wir glauben, dass bessere Informationen zu besseren Gebäuden und letztendlich zu einer besseren Welt führen. Durch die Kombination fortschrittlicher Analysen mit intuitivem Design befähigen wir Schöpfer, die Zukunft zu gestalten.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Visionsorientierter Ansatz",
                                "Transparenter Prozess",
                                "Datengestützte Entscheidungen"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-medium text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-24 px-6 md:px-12 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-primary font-display">
                        Unsere Lösung für die Immobilienbranche
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Card 1 */}
                        <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                            <div className="rounded-xl overflow-hidden mb-6 h-64">
                                <img
                                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    alt="Review Data"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-3 font-display">
                                Transparente Überprüfung & Analysedaten
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Gewinnen Sie klare Einblicke in jeden Aspekt Ihres Projekts mit unseren umfassenden Überprüfungstools. Wir bringen Transparenz in komplexe Datensätze und ermöglichen fundierte Entscheidungen in jeder Phase.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                            <div className="rounded-xl overflow-hidden mb-6 h-64">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    alt="Analytics Platform"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-3 font-display">
                                KI-basierte Analyseplattform
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Nutzen Sie die Kraft der künstlichen Intelligenz, um Ihre Immobilienprojekte zu optimieren. Unsere fortschrittlichen Algorithmen prognostizieren Trends, identifizieren Risiken und decken verborgene Chancen auf.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Features Grid */}
            <section className="py-16 px-6 md:px-12 bg-background">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-secondary p-8 rounded-2xl text-secondary-foreground flex flex-col justify-center items-center text-center shadow-lg hover:-translate-y-1 transition duration-300">
                        <h3 className="text-3xl font-extrabold mb-2 font-display">90% ZEITERSPARNIS</h3>
                        <p className="text-secondary-foreground/90 font-medium">In frühen Konzeptphasen</p>
                    </div>
                    <div className="bg-muted p-8 rounded-2xl text-foreground flex flex-col justify-center items-center text-center shadow-lg hover:-translate-y-1 transition duration-300">
                        <h3 className="text-2xl font-extrabold mb-2 uppercase font-display">Cloud - Gehostet</h3>
                        <p className="text-muted-foreground font-medium">Überall zugänglich</p>
                    </div>
                    <div className="bg-primary p-8 rounded-2xl text-primary-foreground flex flex-col justify-center items-center text-center shadow-lg hover:-translate-y-1 transition duration-300">
                        <h3 className="text-xl font-extrabold mb-2 uppercase font-display">Transparente Kostenberechnung</h3>
                        <p className="text-primary-foreground/90 font-medium">Echtzeit-Budgetüberwachung</p>
                    </div>
                    <div className="bg-secondary/80 p-8 rounded-2xl text-secondary-foreground flex flex-col justify-center items-center text-center shadow-lg hover:-translate-y-1 transition duration-300">
                        <h3 className="text-2xl font-extrabold mb-2 uppercase font-display">KI-Technologie</h3>
                        <p className="text-secondary-foreground/90 font-medium">Modernste Algorithmen</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6 md:px-12 bg-muted/30">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 text-foreground font-display">Unser Team</h2>
                    <p className="text-secondary font-medium text-lg max-w-2xl mx-auto">
                        Weil die besten Produkte von leidenschaftlichen Menschen entwickelt werden <br className="hidden md:block" /> die von einem gemeinsamen Ziel angetrieben werden.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                    {[
                        {
                            name: "Dr. Manuel Muehlbauer",
                            role: "CEO & Founder",
                            img: "/images/manuel.png",
                        },
                        {
                            name: "Elsaeed Gamal",
                            role: "Co-Founder",
                            img: "/images/elsaeed.png",
                        },
                        {
                            name: "Murtaza Mustafa",
                            role: "Software Engineer",
                            img: "/images/murtaza.png",
                        },
                    ].map((member, i) => (
                        <div key={i} className="flex flex-col items-center group">
                            <div className="w-56 h-56 rounded-3xl overflow-hidden mb-6 border-4 border-card shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-2xl text-foreground mb-1 font-display">{member.name}</h3>
                            <p className="text-secondary font-semibold mb-4">{member.role}</p>

                            <div className="w-full space-y-2 px-8">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary"><Check size={10} /></div>
                                    <span>Strategische Vision</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary"><Check size={10} /></div>
                                    <span>Technische Führung</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary"><Check size={10} /></div>
                                    <span>Branchenexperte</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Large Image/Rendering Section */}
            <div className="w-full h-[70vh] relative">
                <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
                <img
                    src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2671&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="Rendering"
                />
                <div className="absolute bottom-8 left-8 text-white z-20">
                    <p className="text-sm uppercase tracking-widest opacity-80 mb-2">Architectural Visualization</p>
                    <h3 className="text-2xl font-bold font-display">Future City Concept</h3>
                </div>
            </div>

            {/* Innovation Section */}
            <section className="py-24 px-6 md:px-12 bg-background">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground leading-none font-display">
                            Eine neue Ära: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Proptech</span> <br />
                            Innovation
                        </h2>
                        <div className="space-y-6 mt-12">
                            {[
                                { label: "Intelligente Analysen", desc: "Echtzeit-Datenverarbeitung" },
                                { label: "Immobilienbewertung", desc: "Präzise KI-Prognosen" },
                                { label: "Markttrends", desc: "Bleiben Sie der Kurve voraus" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                                    <div className="w-3 h-3 rounded-full bg-secondary mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary font-display">{item.label}</h4>
                                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-70"></div>
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670"
                            className="relative rounded-2xl shadow-2xl w-full border border-white/10"
                            alt="Dashboard"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ & Contact Section */}
            <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-background to-muted/20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">
                    {/* FAQ */}
                    <div>
                        <h2 className="text-4xl font-bold mb-2 font-serif italic text-muted-foreground opacity-20">FAQs</h2>
                        <h3 className="text-3xl font-bold mb-10 text-foreground font-display">
                            Häufig gestellte Fragen
                        </h3>

                        <div className="space-y-4">
                            {[
                                "Was genau macht EarlyBuild?",
                                "Woher stammen die Daten?",
                                "Woran arbeiten Sie derzeit?",
                                "Wie definieren Sie Architekturplanung?",
                                "Ist EarlyBuild für große Bauprojekte geeignet?",
                                "Wie kann ich dem EarlyBuild-Team beitreten?"
                            ].map((q, i) => (
                                <div
                                    key={i}
                                    className="group flex items-center justify-between p-5 border-b border-border cursor-pointer hover:bg-card hover:shadow-sm rounded-lg transition-all duration-300"
                                >
                                    <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{q}</span>
                                    <Plus className="text-secondary group-hover:rotate-90 transition-transform duration-300" size={20} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-3xl blur-md opacity-30"></div>
                        <div className="relative bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border">
                            <h3 className="text-2xl font-bold text-secondary mb-8 text-center bg-secondary/10 py-2 px-6 rounded-full inline-block mx-auto w-full font-display">
                                Brauchen Sie Hilfe?
                            </h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase text-muted-foreground ml-1">Vorname</label>
                                        <input
                                            type="text"
                                            placeholder="Max"
                                            className="w-full p-4 bg-muted hover:bg-muted/80 focus:bg-background rounded-xl border border-transparent focus:border-secondary outline-none transition-all text-foreground"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase text-muted-foreground ml-1">Nachname</label>
                                        <input
                                            type="text"
                                            placeholder="Mustermann"
                                            className="w-full p-4 bg-muted hover:bg-muted/80 focus:bg-background rounded-xl border border-transparent focus:border-secondary outline-none transition-all text-foreground"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase text-muted-foreground ml-1">E-Mail-Adresse</label>
                                    <input
                                        type="email"
                                        placeholder="max@beispiel.de"
                                        className="w-full p-4 bg-muted hover:bg-muted/80 focus:bg-background rounded-xl border border-transparent focus:border-secondary outline-none transition-all text-foreground"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase text-muted-foreground ml-1">Nachricht</label>
                                    <textarea
                                        placeholder="Wie können wir Ihnen helfen?"
                                        className="w-full p-4 bg-muted hover:bg-muted/80 focus:bg-background rounded-xl border border-transparent focus:border-secondary outline-none transition-all h-32 resize-none text-foreground"
                                    ></textarea>
                                </div>

                                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 rounded-xl text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                    Nachricht senden
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
