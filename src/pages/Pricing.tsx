import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ChevronRight, Play } from "lucide-react";

const Pricing = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2678&auto=format&fit=crop"
                        alt="VR Architecture"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 text-center mt-16">
                    <h1 className="text-6xl md:text-7xl font-bold text-foreground drop-shadow-lg tracking-tight font-display">Leistung</h1>
                </div>
            </div>

            {/* Diverse Services Section */}
            <section className="py-20 px-6 md:px-12 bg-background">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1518005052357-e98433456c49?q=80&w=2696&auto=format&fit=crop"
                            alt="Green Architecture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-display leading-tight">
                            Vielfältige Dienstleistungen und innovative Tools für Immobilienprojekte
                        </h2>
                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                            EarlyBuild unterstützt Immobilienentwickler, Investoren und Kommunen mit digitalen Lösungen für eine erfolgreiche Projektentwicklung. Unser Ansatz verbindet umfassende Datenanalyse, innovatives generatives Design und menschliche Expertise mit modernster Technologie wie Building Information Modeling (BIM). Wir bieten ganzheitliche Module, generatives Design und APIs für künstliche Intelligenz.
                        </p>
                        <h3 className="text-2xl font-bold text-secondary font-display">
                            Alle Standortdaten sofort verfügbar
                        </h3>
                    </div>
                </div>
            </section>

            {/* Seamless Processes Section */}
            <section className="py-16 px-6 md:px-12 bg-background">
                <div className="max-w-4xl mx-auto">
                    <p className="text-secondary font-medium mb-2 text-sm uppercase tracking-wider">
                        Einblicke | Gebäudemasse | generative Layouts | Baukosten | KI-Nutzung | 3D-Volumen | kohärente Stadtplanung | Immobiliendaten | BIM | Effizienzgewinne | Planungsteams
                    </p>
                    <p className="text-primary font-medium mb-8 text-sm uppercase tracking-wider">
                        Smart Cities | CO2-Reduzierung | Standortidentifikation | Makrolage | Mikrolage | Sozialstruktur | datengesteuert | automatisierte Bewertung | Return on Invest | Status-Upgrades | jederzeit | überall
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground font-display">
                        Nahtlose Prozesse in Planung und Betrieb
                    </h2>
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                        Wir liefern Immobilienmaklern, Bauunternehmen und Projektentwicklungsgesellschaften die Einblicke, die sie benötigen. Von Machbarkeitsstudien bis hin zu Betriebsphasen. Durch unser ganzheitliches Gebäude- und Wissensmanagement schaffen wir Struktur in allen Planungsphasen. Mit sofortigem Zugriff auf Standortinformationen, Arbeitsentwürfe, digitale Gebäudemodelle und künstliche Intelligenz (KI) ermöglichen wir präzise Planung, effiziente Umsetzung und nachhaltiges Management.
                    </p>

                    <div className="flex items-center gap-6">
                        <span className="text-secondary font-bold text-lg">Jetzt Beratungstermin buchen und intelligenter bauen</span>
                        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                            Hier klicken
                        </Button>
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-20 px-6 md:px-12 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-foreground font-display">Was wir bieten</h2>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Solutions */}
                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-6 uppercase tracking-wide">Unsere Lösungen auf einen Blick</h3>
                            <ul className="space-y-4">
                                {[
                                    "Datenlösungen und Umgebung für nahtlose, hochauflösende BIM-Modelle, Machine-Learning-Support für Erkennung und Klassifizierung.",
                                    "Beratungs- und Strategiedienstleistungen mit umfangreichen Analysen von Markt- und Standortdaten für Bewertungen und Zukunftsfähigkeit von der Konzeptlogik bis zu Geschäftsmodellen und Immobilienvertrieb und -marketing.",
                                    "Nutzen Sie unsere digitale Gebäudemodelle-API in Vorphasen und technischer Gebäudeausrüstung in der Planung und integrierten Planung in Umwelt und Kontext.",
                                    "Produktentwicklung und Innovation: Generatives Design für Gestaltungsfreiheit, Variantenbildung und strategische Optimierung basierend auf KI-Berechnungen. Digitale Zwillinge, Visualisierungen, Smart City und urbaner Kontext.",
                                    "KI & Performance und KI-Prototypen: Agile Entwicklung von KI-Modellen für Zeitreihenanalysen, Algorithmen und Smart-City-Lösungen via Cloud Computing. Datennutzung für Risikobewertung, Benchmarking und vorausschauende Wartung.",
                                    "Nachhaltigkeitsstrategien für Nachhaltigkeit, Portfolioanalysen und Optimierung hinsichtlich der Analyse von Gesundheitszyklen für neue Qualitätskriterien im Management."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                            <ChevronRight className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Advantages */}
                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-6 uppercase tracking-wide">Ihre Vorteile</h3>
                            <ul className="space-y-4">
                                {[
                                    "Schnellere Entscheidungsfindung & bessere Ergebnisse",
                                    "Erhöhte Planungssicherheit durch BIM und Datendokumentation",
                                    "Effiziente, kostengünstige und schnellere Prozesse",
                                    "Nachhaltige Bau- und Immobilienprojekte",
                                    "Ausbau Ihrer Wettbewerbsfähigkeit durch Digitalisierung und KI"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-center">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                            <ChevronRight className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="text-sm font-semibold text-foreground">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-6 md:px-12 bg-background">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">
                        Unsere wettbewerbsfähigen Preise ermöglichen eine horizontale Skalierung im Markt.
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-card text-card-foreground rounded-3xl p-8 flex flex-col hover:scale-105 transition-transform duration-300 shadow-xl border border-border">
                            <h3 className="text-lg font-medium text-muted-foreground mb-2 uppercase">DATAFLAT API</h3>
                            <div className="mb-6">
                                <span className="text-5xl font-bold">3.950 €</span>
                                <span className="text-sm text-muted-foreground ml-2">/ MTL</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-8 min-h-[60px]">
                                Platform-as-a-Service (PaaS) für umfassenden Zugriff auf unsere Datenbank und Immobiliendaten.
                            </p>
                            <div className="mt-auto space-y-3">
                                {["Datenvalidierung", "Globale Konnektivität", "Benutzerdefinierte Berichte"].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-card text-card-foreground rounded-3xl p-8 flex flex-col hover:scale-105 transition-transform duration-300 shadow-xl border border-border relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-secondary w-16 h-16 blur-2xl opacity-20"></div>
                            <h3 className="text-lg font-medium text-muted-foreground mb-2 uppercase">TRUEILIGENCE</h3>
                            <div className="mb-6">
                                <span className="text-5xl font-bold">1.950 €</span>
                                <span className="text-sm text-muted-foreground ml-2">/ MTL</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-8 min-h-[60px]">
                                Unser Kernprodukt für Standortvalidierung und Datenanalyse in der Immobilienentwicklung.
                            </p>
                            <div className="mt-auto space-y-3">
                                {["Ausführungszeit", "Markt-Daten", "KI-basierte Analyse"].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-card text-card-foreground rounded-3xl p-8 flex flex-col hover:scale-105 transition-transform duration-300 shadow-xl border border-border">
                            <h3 className="text-lg font-medium text-muted-foreground mb-2 uppercase">INTELLIGENT DESIGN</h3>
                            <div className="mb-6">
                                <span className="text-5xl font-bold">5.950 €</span>
                                <span className="text-sm text-muted-foreground ml-2">/ MTL</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-8 min-h-[60px]">
                                Detaillierte Dienstleistungen für Machbarkeitsstudien und Wirtschaftlichkeitsberechnungen über digitale Gebäudemodelle.
                            </p>
                            <div className="mt-auto space-y-3">
                                {["Frühphasenplanung", "Leistungscheck", "Smart Buildings"].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-muted-foreground mt-12 max-w-4xl mx-auto text-lg">
                        Darüber hinaus bieten wir 3D-Visualisierungen, Nachhaltigkeitsstrategien für Bestands- und Neubauten sowie innovative Smart-City-Lösungen, die Transparenz schaffen und die Entscheidungsfindung verbessern. Mit unseren innovativen Tools optimieren wir Ihre Prozesse, reduzieren Risiken und steigern die Effizienz Ihrer Projektentwicklung – vom ersten Konzept bis zum Gebäudebetrieb.
                    </p>
                </div>
            </section>

            {/* Let's Get Started Section */}
            <section className="py-20 px-6 md:px-12 bg-card relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        {/* Placeholder for Isometric City - using CSS based shape or image */}
                        <img
                            src="https://images.unsplash.com/photo-1516937941348-c09645f31e88?q=80&w=2574&auto=format&fit=crop"
                            alt="Smart City Isometric"
                            className="w-full h-auto object-cover opacity-80 rounded-lg shadow-2xl skew-y-3 transform rotate-2 border-2 border-secondary/30"
                        />
                    </div>
                    <div className="text-foreground">
                        <h2 className="text-5xl font-bold mb-6 font-display">Lassen Sie uns gemeinsam beginnen.</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Wer echten Wert schaffen will, braucht zuverlässige Ressourcen, die den Prozess einfacher, schneller und berechenbarer machen. Mit unseren digitalen Prozessen und innovativer Technologie unterstützen wir Sie – von der Projektentwicklung bis zum Gebäudebetrieb.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section (Reused from About Us but matched to design) */}
            <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-background to-muted/20 relative">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">Lassen Sie uns gemeinsam ein Projekt starten! Buchen Sie jetzt eine Beratung.</h2>
                        <p className="text-muted-foreground text-lg">Um den Immobilienmarkt anzuführen, brauchen Sie eine Vision und Möglichkeiten zu wachsen. Wir unterstützen unsere Kunden dabei, echte Geschäftsergebnisse zu erzielen.</p>
                        <div className="flex gap-4 mt-8">
                            <div className="w-10 h-10 bg-muted-foreground/20 rounded flex items-center justify-center text-foreground font-bold">f</div>
                            <div className="w-10 h-10 bg-muted-foreground/20 rounded flex items-center justify-center text-foreground font-bold">in</div>
                            <div className="w-10 h-10 bg-muted-foreground/20 rounded flex items-center justify-center text-foreground font-bold">X</div>
                        </div>
                    </div>

                    <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-xl">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Vorname *" className="w-full p-3 rounded-lg bg-muted border-none outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50 text-foreground" />
                                <input type="text" placeholder="Nachname *" className="w-full p-3 rounded-lg bg-muted border-none outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50 text-foreground" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Telefonnummer *" className="w-full p-3 rounded-lg bg-muted border-none outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50 text-foreground" />
                                <input type="email" placeholder="E-Mail *" className="w-full p-3 rounded-lg bg-muted border-none outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50 text-foreground" />
                            </div>
                            <textarea placeholder="Erzählen Sie uns von Ihrem Projekt *" className="w-full p-3 rounded-lg bg-muted border-none outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50 text-foreground h-32"></textarea>
                            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-6 rounded-md">
                                Senden
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Pricing;
