import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navbar />

            {/* Hero Section with Building Image */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                        alt="Modern Building"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/60"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                    <div className="max-w-2xl">
                        <p className="text-secondary text-sm font-medium mb-4 uppercase tracking-wider">
                            Vergessen Sie alles, was Sie wissen
                        </p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display leading-tight">
                            Earlybuild
                        </h1>
                        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                            AUTOMATISIEREN SIE DIE IMMOBILIENENTWICKLUNG EFFIZIENT mit unserer datengesteuerten Plattform.
                            Von der Standortanalyse bis zur BIM-Modellierung bieten wir Ihnen die Tools und Erkenntnisse,
                            die Sie benötigen, um schneller intelligentere Entscheidungen zu treffen. Unsere umfassende Suite von
                            Dienstleistungen umfasst KI-gestützte Analysen, generatives Design und nahtlose
                            Integration in Ihre bestehenden Workflows.
                        </p>
                        <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 rounded-lg">
                            Mehr erfahren
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact Information & Form Section */}
            <section className="py-20 px-6 md:px-12 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Left: Contact Details */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display">
                                <span className="text-primary">UNSERE DETAILS</span>
                            </h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-12 font-display">
                                Kontaktinformationen
                            </h3>

                            <div className="space-y-8">
                                {/* Location */}
                                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <MapPin className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-2">Standort:</h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                Bahnhofstrasse 3 FWSB<br />
                                                Dortmund
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Phone className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-2">Telefon:</h4>
                                            <p className="text-muted-foreground text-sm">
                                                +49 40178974630
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Mail className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-2">E-mail:</h4>
                                            <p className="text-muted-foreground text-sm">
                                                info@earlybuild.de
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div>
                            <div className="bg-card/50 border border-border rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-primary mb-2 font-display">Brauchen Sie Hilfe?</h3>
                                <p className="text-muted-foreground text-sm mb-8">
                                    Kontaktieren Sie uns oder sprechen Sie mit einem unserer Experten
                                </p>

                                <form className="space-y-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-foreground mb-2 block">
                                                Vorname*
                                            </label>
                                            <Input
                                                type="text"
                                                placeholder="Vorname eingeben"
                                                className="bg-background border-border focus:ring-primary"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-foreground mb-2 block">
                                                Email*
                                            </label>
                                            <Input
                                                type="email"
                                                placeholder="Enter email"
                                                className="bg-background border-border focus:ring-primary"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-foreground mb-2 block">
                                            Womit können wir Ihnen helfen?*
                                        </label>
                                        <Textarea
                                            placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                                            className="bg-background border-border focus:ring-primary min-h-[120px] resize-none"
                                        />
                                    </div>

                                    <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold w-full md:w-auto px-8 py-5 rounded-lg">
                                        Senden
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="relative h-[400px] bg-muted">
                <div className="absolute inset-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2847474!2d7.4589!3d51.5136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzQ5LjAiTiA3wrAyNyczMi4wIkU!5e0!3m2!1sen!2sde!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location Map"
                    ></iframe>
                </div>

                {/* Map Overlay Card */}
                <div className="absolute bottom-8 left-8 bg-background/95 backdrop-blur-sm border border-border rounded-xl p-6 shadow-xl max-w-xs">
                    <h4 className="font-bold text-foreground mb-2">Earlybuild GmbH</h4>
                    <p className="text-sm text-muted-foreground mb-1">Bahnhofstrasse 3</p>
                    <p className="text-sm text-muted-foreground">44137 Dortmund</p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: CTA Text */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display leading-tight">
                                Lassen Sie uns gemeinsam ein Projekt starten! Buchen Sie jetzt eine Beratung.
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Um den Immobilienmarkt anzuführen, brauchen Sie eine Vision und Möglichkeiten zu wachsen.
                                Wir unterstützen unsere Kunden dabei, echte Geschäftsergebnisse zu erzielen.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-lg bg-card border border-border hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center"
                                >
                                    <Facebook size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-lg bg-card border border-border hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-lg bg-card border border-border hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center"
                                >
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Right: Quick Contact Form */}
                        <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        type="text"
                                        placeholder="Vorname*"
                                        className="bg-muted/50 border-border"
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Nachname*"
                                        className="bg-muted/50 border-border"
                                    />
                                </div>
                                <Input
                                    type="email"
                                    placeholder="E-Mail*"
                                    className="bg-muted/50 border-border"
                                />
                                <Input
                                    type="tel"
                                    placeholder="Telefonnummer*"
                                    className="bg-muted/50 border-border"
                                />
                                <Textarea
                                    placeholder="Erzählen Sie uns von Ihrem Projekt*"
                                    className="bg-muted/50 border-border min-h-[100px] resize-none"
                                />
                                <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold w-full py-5 rounded-lg">
                                    Senden
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 px-6 md:px-12 bg-card border-t border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2 font-display">
                                Melden Sie sich für unseren Newsletter an
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen in der Immobilientechnologie
                            </p>
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <Input
                                type="email"
                                placeholder="Geben Sie Ihre E-Mail ein..."
                                className="bg-background border-border md:w-80"
                            />
                            <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 shrink-0">
                                Abonnieren
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
