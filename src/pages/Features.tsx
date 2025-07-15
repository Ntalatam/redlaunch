import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  TrendingUp, 
  Shield, 
  FileCheck, 
  BarChart3, 
  Lock, 
  Smartphone, 
  Brain,
  CheckCircle,
  Zap,
  Eye,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import supplyChainNetwork from "@/assets/supply-chain-network.jpg";

const Features = () => {
  const features = [
    { 
      icon: Database, 
      title: "Centralized Supplier Database", 
      description: "Single source of truth for all supplier information",
      category: "Data Management"
    },
    { 
      icon: TrendingUp, 
      title: "Automated Risk Scoring", 
      description: "AI-powered risk assessment and scoring",
      category: "Risk Assessment"
    },
    { 
      icon: Shield, 
      title: "Compliance Mapping", 
      description: "CMMC, NIST, DFARS, ITAR frameworks",
      category: "Compliance"
    },
    { 
      icon: FileCheck, 
      title: "Full Audit Log & Traceability", 
      description: "Complete audit trail and documentation",
      category: "Audit & Reporting"
    },
    { 
      icon: BarChart3, 
      title: "Export to PDF/CSV", 
      description: "Flexible reporting and data export",
      category: "Reporting"
    },
    { 
      icon: Lock, 
      title: "Role-Based Access Control", 
      description: "Granular permissions and security",
      category: "Security"
    },
    { 
      icon: Smartphone, 
      title: "Mobile Friendly & Accessible", 
      description: "Access anywhere, WCAG compliant",
      category: "Accessibility"
    },
    { 
      icon: Brain, 
      title: "AI-Ready Risk Engine", 
      description: "Machine learning powered insights",
      category: "AI & Analytics"
    }
  ];

  const capabilities = [
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous supplier monitoring with instant alerts for risk changes"
    },
    {
      icon: Eye,
      title: "Risk Visualization",
      description: "Interactive dashboards and heat maps for immediate risk visibility"
    },
    {
      icon: Settings,
      title: "Custom Workflows",
      description: "Configurable approval processes and automated escalations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Platform Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary">
              Powerful Features for Complete Control
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to secure your supplier ecosystem and maintain compliance 
              across all regulatory frameworks
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs w-fit mb-2">
                    {feature.category}
                  </Badge>
                  <CardTitle className="text-base font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">See It In Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time supplier risk visibility and compliance tracking in one unified interface
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={supplyChainNetwork} 
                alt="Supply Chain Risk Management Interface" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
            </div>
            
            {/* Floating feature callouts */}
            <div className="absolute top-4 right-4 bg-card/95 backdrop-blur rounded-lg p-3 shadow-card">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Real-time Monitoring</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur rounded-lg p-3 shadow-card">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Risk Score: 92/100</span>
              </div>
            </div>

            <div className="absolute top-1/2 left-4 bg-card/95 backdrop-blur rounded-lg p-3 shadow-card">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">CMMC Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Go beyond basic risk assessment with intelligent automation and insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Security */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Enterprise-Grade Security & Integration
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built with security-first principles and designed to integrate seamlessly 
                with your existing systems and workflows.
              </p>
              <div className="space-y-4">
                {[
                  "SOC 2 Type II Certified",
                  "End-to-end encryption",
                  "API-first architecture",
                  "SSO integration support",
                  "Regular penetration testing",
                  "GDPR & CCPA compliant"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
                <div className="text-sm text-muted-foreground">Encryption</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">&lt; 2sec</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Experience the Platform Yourself
            </h2>
            <p className="text-xl text-muted-foreground">
              See how these features work together to provide unparalleled supplier risk visibility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button variant="enterprise" size="lg" className="text-lg px-8" asChild>
                <Link to="/use-cases">View Use Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;