import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BarChart3, Shield, Eye, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: "Add & Onboard Suppliers",
      description: "Centralized supplier database with automated onboarding workflows",
      details: [
        "Import existing supplier data",
        "Automated invitation system",
        "Self-service onboarding portal",
        "Document collection & verification"
      ]
    },
    {
      icon: BarChart3,
      title: "Run Automated Risk Assessments",
      description: "AI-powered risk scoring based on multiple data sources and frameworks",
      details: [
        "Financial stability analysis",
        "Cybersecurity posture assessment",
        "Operational risk evaluation",
        "Real-time scoring updates"
      ]
    },
    {
      icon: Shield,
      title: "Map Compliance Frameworks",
      description: "Automatic mapping to CMMC, NIST, DFARS, ITAR, and ISO standards",
      details: [
        "Framework requirement mapping",
        "Gap analysis & recommendations",
        "Certification tracking",
        "Compliance scoring"
      ]
    },
    {
      icon: Eye,
      title: "Monitor, Audit, & Report",
      description: "Continuous monitoring with real-time alerts and comprehensive reporting",
      details: [
        "24/7 monitoring dashboard",
        "Automated alert system",
        "Comprehensive audit trails",
        "Custom reporting suite"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary">How It Works</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Four simple steps to transform your supplier risk management from manual processes 
              to automated intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {steps.map((step, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-red-gradient rounded-2xl flex items-center justify-center shadow-red">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                  <div className="text-6xl font-bold text-muted-foreground/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl font-bold text-secondary">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {index < steps.length - 1 && (
                    <div className="flex items-center space-x-2 text-primary">
                      <span className="font-medium">Next Step</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Getting Started is Simple
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our implementation team ensures a smooth transition with minimal disruption
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Discovery Call</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We understand your current processes and compliance requirements
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Platform Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Custom configuration and data migration handled by our experts
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Go Live</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Training, support, and ongoing optimization for your team
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our platform can transform your supplier risk management process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
              <Button variant="enterprise" size="lg" className="text-lg px-8" asChild>
                <Link to="/features">View Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;