import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.jpg";
const Home = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Enterprise Risk Management Platform
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Redefine How You Manage{" "}
                  <span className="text-primary">Supplier Risk</span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                  Red Launch Technologies' Supplier Risk Assessment Platform helps you stay compliant, 
                  reduce risk, and protect your supply chain with automated intelligence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                  <Link to="/contact">
                    <Play className="w-5 h-5 mr-2" />
                    Book a Demo
                  </Link>
                </Button>
                <Button variant="enterprise" size="lg" className="text-lg px-8" asChild>
                  <Link to="/how-it-works">
                    How It Works
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-white/60">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>CMMC Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>NIST Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>SOC 2 Certified</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img src={heroDashboard} alt="Supplier Risk Assessment Dashboard" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-gradient rounded-full opacity-20 blur-xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full opacity-30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
              The Complete Supplier Risk Management Solution
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From onboarding to continuous monitoring, our platform provides the tools and intelligence 
              you need to secure your supply chain and maintain compliance across all regulatory frameworks.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Suppliers Assessed</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-muted-foreground">Compliance Accuracy</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">50%</div>
                <div className="text-muted-foreground">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Secure Your Supplier Ecosystem?
            </h2>
            <p className="text-xl text-white/80">
              Join industry leaders who trust Red Launch Technologies to manage their supplier risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
              <Button variant="enterprise" size="lg" className="text-lg px-8" asChild>
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;