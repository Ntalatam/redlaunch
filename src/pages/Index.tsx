import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Database, 
  Target, 
  Eye,
  Lock,
  Brain,
  Activity,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Radar,
  Satellite,
  Command,
  Crosshair
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Command Center Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-gradient rounded flex items-center justify-center">
              <Command className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground tracking-tight">RED LAUNCH INTEL</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">SYSTEMS</Link>
            <Link to="/use-cases" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">OPERATIONS</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">INTELLIGENCE</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">CONTACT</Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">
              CLASSIFIED ACCESS
            </Button>
            <Button variant="default" size="sm" className="bg-red-gradient hover:opacity-90">
              SECURE BRIEFING
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero - Command Center Interface */}
      <section className="relative py-24 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ff0000%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          <div className="absolute top-0 left-0 w-full h-px bg-tactical-gradient" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-tactical-gradient" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 uppercase tracking-wider text-xs font-bold px-4 py-2">
                CLASSIFIED: SUPPLIER INTELLIGENCE PLATFORM
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight tracking-tighter">
                MISSION-CRITICAL
                <br />
                <span className="text-primary">RISK ASSESSMENT</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
                Advanced supplier intelligence platform providing real-time threat assessment, 
                compliance monitoring, and strategic risk mitigation for defense contractors 
                and security-conscious enterprises.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-gradient hover:opacity-90 text-white font-bold px-8 py-4 text-base uppercase tracking-wide" asChild>
                <Link to="/contact">
                  <Crosshair className="w-5 h-5 mr-2" />
                  REQUEST BRIEFING
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted font-bold px-8 py-4 text-base uppercase tracking-wide" asChild>
                <Link to="/features">
                  <Eye className="w-5 h-5 mr-2" />
                  SYSTEM OVERVIEW
                </Link>
              </Button>
            </div>
            
            {/* Security Clearance Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="uppercase tracking-wide">CMMC LEVEL 3</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="uppercase tracking-wide">NIST 800-171</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="uppercase tracking-wide">SOC 2 TYPE II</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight">TACTICAL SYSTEMS</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Advanced intelligence gathering and risk assessment capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Radar,
                title: "THREAT DETECTION",
                description: "Real-time supplier risk monitoring and anomaly detection",
                status: "ACTIVE"
              },
              {
                icon: Database,
                title: "INTEL DATABASE",
                description: "Centralized repository of supplier intelligence and assessments",
                status: "SECURED"
              },
              {
                icon: Shield,
                title: "COMPLIANCE ENGINE",
                description: "Automated CMMC, NIST, and DFARS framework mapping",
                status: "OPERATIONAL"
              },
              {
                icon: Activity,
                title: "MISSION CONTROL",
                description: "Command dashboard for continuous monitoring and alerts",
                status: "MONITORING"
              }
            ].map((system, index) => (
              <Card key={index} className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-intel">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded flex items-center justify-center mb-3 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                      <system.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs font-mono uppercase border-primary/30 text-primary/80">
                      {system.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-sm font-bold text-foreground uppercase tracking-wide">{system.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm text-muted-foreground font-medium">
                    {system.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-4xl md:text-6xl font-black text-primary font-mono">1,247</div>
              <div className="text-muted-foreground uppercase tracking-wide font-medium">SUPPLIERS ANALYZED</div>
              <div className="h-px bg-tactical-gradient"></div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl md:text-6xl font-black text-primary font-mono">99.9%</div>
              <div className="text-muted-foreground uppercase tracking-wide font-medium">THREAT DETECTION RATE</div>
              <div className="h-px bg-tactical-gradient"></div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl md:text-6xl font-black text-primary font-mono">24/7</div>
              <div className="text-muted-foreground uppercase tracking-wide font-medium">CONTINUOUS MONITORING</div>
              <div className="h-px bg-tactical-gradient"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Capabilities */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight">STRATEGIC CAPABILITIES</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Mission-critical tools for defense contractors and security-conscious enterprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Target, 
                title: "PRECISION TARGETING", 
                description: "Advanced risk scoring algorithms for strategic supplier assessment",
                classification: "TOP SECRET"
              },
              { 
                icon: Lock, 
                title: "SECURE ACCESS", 
                description: "Military-grade encryption and role-based security protocols",
                classification: "CLASSIFIED"
              },
              { 
                icon: Brain, 
                title: "AI INTELLIGENCE", 
                description: "Machine learning powered threat analysis and prediction models",
                classification: "RESTRICTED"
              },
              { 
                icon: Satellite, 
                title: "GLOBAL MONITORING", 
                description: "Worldwide supplier network visibility and geopolitical risk tracking",
                classification: "CONFIDENTIAL"
              },
              { 
                icon: Users, 
                title: "TEAM COORDINATION", 
                description: "Secure collaboration tools for distributed operations teams",
                classification: "OFFICIAL"
              },
              { 
                icon: Globe, 
                title: "THREAT MAPPING", 
                description: "Real-time visualization of supply chain vulnerabilities and risks",
                classification: "SENSITIVE"
              }
            ].map((capability, index) => (
              <Card key={index} className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-intel">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-muted rounded flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                      <capability.icon className="w-7 h-7 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs font-mono uppercase border-muted-foreground/30 text-muted-foreground">
                      {capability.classification}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-bold text-foreground uppercase tracking-wide">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Secure Communications */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight">
                INITIATE SECURE COMMUNICATIONS
              </h2>
              <p className="text-lg text-muted-foreground font-medium">
                Join the intelligence network. Request classified briefing on advanced 
                supplier risk assessment capabilities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-gradient hover:opacity-90 text-white font-bold px-8 py-4 text-base uppercase tracking-wide" asChild>
                <Link to="/contact">
                  ESTABLISH CONTACT
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted font-bold px-8 py-4 text-base uppercase tracking-wide" asChild>
                <Link to="/features">
                  REVIEW SYSTEMS
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;