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
                    <h1 className="text-6xl md:text-7xl font-bold text-foreground drop-shadow-lg tracking-tight font-display">Performance</h1>
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
                            Diverse services and innovative tools for real estate projects
                        </h2>
                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                            EarlyBuild supports real estate developers, investors, and municipalities with digital solutions for successful project development. Our approach connects comprehensive data analysis, innovative generative design, and human expertise with state-of-the-art technology such as Building Information Modeling (BIM). We offer holistic modules, generative design, and artificial intelligence APIs.
                        </p>
                        <h3 className="text-2xl font-bold text-secondary font-display">
                            All location data immediately available
                        </h3>
                    </div>
                </div>
            </section>

            {/* Seamless Processes Section */}
            <section className="py-16 px-6 md:px-12 bg-background">
                <div className="max-w-4xl mx-auto">
                    <p className="text-secondary font-medium mb-2 text-sm uppercase tracking-wider">
                        insights | building mass | generative layouts | construction costs | using AI | 3D volumes | coherent urban planning | real estate data | BIM | efficiency gains | planning teams
                    </p>
                    <p className="text-primary font-medium mb-8 text-sm uppercase tracking-wider">
                        smart cities | CO2 reduction | location identification | macro location | micro location | social structure | data driven | automated valuation | return on invest | status upgrades | any time | anywhere
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground font-display">
                        Seamless processes in planning and operation
                    </h2>
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                        We provide real estate agents, construction companies, and project management firms with the insights they need. From feasibility studies to operational phases. Through our holistic building and knowledge management, we create structure in all planning phases. With instant access to location information, working drafts, digital building models, and artificial intelligence (AI), we enable precise planning, efficient implementation, and sustainable management.
                    </p>

                    <div className="flex items-center gap-6">
                        <span className="text-secondary font-bold text-lg">Book a consultation now and build smarter</span>
                        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                            Click Here
                        </Button>
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-20 px-6 md:px-12 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-foreground font-display">What we offer</h2>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Solutions */}
                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-6 uppercase tracking-wide">Our solutions at a glance</h3>
                            <ul className="space-y-4">
                                {[
                                    "Data solutions and environment for seamless high-resolution BIM models, machine learning support for detection and classification.",
                                    "Consulting and strategy services with extensive analyses of market and location data for assessments and future viability from concept logic to business models and implementation sales and marketing of real estate.",
                                    "Use our digital building models API in preliminary stages and engineering building services in planning and integrated planning in environment and context. Drawings, cost forecasts and yield calculation. True intelligence, you have running expert documentation.",
                                    "Product development and Innovation: Generative design for design freedom, variant creation and strategic optimization based on AI-calculations. Digital twins, visualizations, smart city and urban context.",
                                    "AI & Performance and AI prototypes: Agile development of AI models for time series analysis, algorithms and smart city solutions via cloud computing. Use data produced for risk assessment, benchmark and predictive maintenance.",
                                    "Sustainability Strategies for sustainability, portfolio analyses and optimization with respect to analysis of health cycles for new quality criteria in management."
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
                            <h3 className="text-xl font-bold text-secondary mb-6 uppercase tracking-wide">Your advantages</h3>
                            <ul className="space-y-4">
                                {[
                                    "Faster decision making & better results",
                                    "Increased planning certainty through BIM and data documentation",
                                    "Efficient, cost-effective and faster processes",
                                    "Sustainable construction real estate projects",
                                    "Expanding your competitiveness through digitalization and AI"
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
                        Our competitive pricing enables horizontal scaling in the market.
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-card text-card-foreground rounded-3xl p-8 flex flex-col hover:scale-105 transition-transform duration-300 shadow-xl border border-border">
                            <h3 className="text-lg font-medium text-muted-foreground mb-2 uppercase">DATAFLAT API</h3>
                            <div className="mb-6">
                                <span className="text-5xl font-bold">3.950 €</span>
                                <span className="text-sm text-muted-foreground ml-2">/ MTH</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-8 min-h-[60px]">
                                Platform-as-a-Service (PaaS) for comprehensive access to our database and real estate data.
                            </p>
                            <div className="mt-auto space-y-3">
                                {["Data validation", "Global connectivity", "Custom reports"].map((feat, i) => (
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
                                <span className="text-5xl font-bold">1,950 €</span>
                                <span className="text-sm text-muted-foreground ml-2">/ MTH</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-8 min-h-[60px]">
                                Our core product for location validation and data analysis in real estate development.
                            </p>
                            <div className="mt-auto space-y-3">
                                {["Execution time", "Market data", "AI-based analysis"].map((feat, i) => (
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
                                <span className="text-sm text-muted-foreground ml-2">/ MTH</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-8 min-h-[60px]">
                                Detailed services for feasibility studies and performance calculations via digital building models.
                            </p>
                            <div className="mt-auto space-y-3">
                                {["Early stage planning", "Performance check", "Smart Buildings"].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-muted-foreground mt-12 max-w-4xl mx-auto text-lg">
                        Furthermore, we offer 3D visualizations, sustainability strategies for existing and new buildings, and innovative smart city solutions that create transparency and improve decision-making. With our innovative tools, we optimize your processes, reduce risks and increase the efficiency of your project development – from the initial concept to building operation.
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
                        <h2 className="text-5xl font-bold mb-6 font-display">Let's get started together.</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            If you want to create real value, you need reliable resources that make the process easier, faster and more predictable. With our digital processes and innovative technology, we support you – from project development to building operation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section (Reused from About Us but matched to design) */}
            <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-background to-muted/20 relative">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">Let's start a project together! Book a consultation now.</h2>
                        <p className="text-muted-foreground text-lg">To lead the real estate market, you need a vision and possibilities to grow. We assist our clients in achieving real business results.</p>
                        <div className="flex gap-4 mt-8">
                            <div className="w-10 h-10 bg-muted-foreground/20 rounded flex items-center justify-center text-foreground font-bold">f</div>
                            <div className="w-10 h-10 bg-muted-foreground/20 rounded flex items-center justify-center text-foreground font-bold">in</div>
                            <div className="w-10 h-10 bg-muted-foreground/20 rounded flex items-center justify-center text-foreground font-bold">X</div>
                        </div>
                    </div>

                    <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-xl">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name *" className="w-full p-3 rounded-lg bg-muted border-none outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50 text-foreground" />
                                <input type="text" placeholder="Last Name *" className="w-full p-3 rounded-lg bg-muted border-none outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50 text-foreground" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Phone Number *" className="w-full p-3 rounded-lg bg-muted border-none outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50 text-foreground" />
                                <input type="email" placeholder="Email *" className="w-full p-3 rounded-lg bg-muted border-none outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50 text-foreground" />
                            </div>
                            <textarea placeholder="Tell us about your project *" className="w-full p-3 rounded-lg bg-muted border-none outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50 text-foreground h-32"></textarea>
                            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-6 rounded-md">
                                Send
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
