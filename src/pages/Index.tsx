import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  FileCheck, 
  Zap, 
  Target, 
  Database, 
  BarChart3, 
  Lock, 
  Smartphone, 
  Brain,
  CheckCircle,
  ArrowRight,
  Building2,
  Factory,
  UserCheck,
  Search,
  AlertTriangle,
  Eye,
  Clock,
  TrendingUp,
  Rocket,
  Star,
  Play,
  ChevronRight
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import supplyChainNetwork from "@/assets/supply-chain-network.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-gradient rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-secondary">Red Launch Technologies</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">Use Cases</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="enterprise" size="sm">
              How It Works
            </Button>
            <Button variant="hero" size="sm">
              Book a Demo
            </Button>
          </div>
        </div>
      </nav>

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
                <Button variant="hero" size="lg" className="text-lg px-8">
                  <Play className="w-5 h-5 mr-2" />
                  Book a Demo
                </Button>
                <Button variant="enterprise" size="lg" className="text-lg px-8">
                  How It Works
                  <ChevronRight className="w-5 h-5 ml-2" />
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
                <img 
                  src={heroDashboard} 
                  alt="Supplier Risk Assessment Dashboard" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-gradient rounded-full opacity-20 blur-xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full opacity-30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to transform your supplier risk management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Add & Onboard Suppliers",
                description: "Centralized supplier database with automated onboarding workflows"
              },
              {
                icon: BarChart3,
                title: "Run Automated Risk Assessments",
                description: "AI-powered risk scoring based on multiple data sources and frameworks"
              },
              {
                icon: Shield,
                title: "Map Compliance Frameworks",
                description: "Automatic mapping to CMMC, NIST, DFARS, ITAR, and ISO standards"
              },
              {
                icon: Eye,
                title: "Monitor, Audit, & Report",
                description: "Continuous monitoring with real-time alerts and comprehensive reporting"
              }
            ].map((step, index) => (
              <Card key={index} className="relative text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-red">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to secure your supplier ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: Database, title: "Centralized Supplier Database", description: "Single source of truth for all supplier information" },
              { icon: TrendingUp, title: "Automated Risk Scoring", description: "AI-powered risk assessment and scoring" },
              { icon: Shield, title: "Compliance Mapping", description: "CMMC, NIST, DFARS, ITAR frameworks" },
              { icon: FileCheck, title: "Full Audit Log & Traceability", description: "Complete audit trail and documentation" },
              { icon: BarChart3, title: "Export to PDF/CSV", description: "Flexible reporting and data export" },
              { icon: Lock, title: "Role-Based Access Control", description: "Granular permissions and security" },
              { icon: Smartphone, title: "Mobile Friendly & Accessible", description: "Access anywhere, WCAG compliant" },
              { icon: Brain, title: "AI-Ready Risk Engine", description: "Machine learning powered insights" }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
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
              Real-time supplier risk visibility and compliance tracking
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
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Built For Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by organizations across regulated industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Defense Contractors",
                description: "CMMC and DFARS compliance made simple",
                highlight: "CMMC Ready"
              },
              {
                icon: Factory,
                title: "Manufacturers",
                description: "Supply chain visibility and risk management",
                highlight: "ISO 27001"
              },
              {
                icon: UserCheck,
                title: "Compliance Teams",
                description: "Automated compliance tracking and reporting",
                highlight: "NIST Framework"
              },
              {
                icon: Search,
                title: "Auditors",
                description: "Complete audit trails and documentation",
                highlight: "SOC 2 Ready"
              }
            ].map((audience, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <audience.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{audience.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {audience.highlight}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {audience.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for every compliance challenge
            </p>
          </div>
          
          <Tabs defaultValue="compliance" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="risk">Risk Management</TabsTrigger>
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              <TabsTrigger value="audit">Audit Ready</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>
            
            <TabsContent value="compliance" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-6 h-6 text-primary" />
                    <span>Regulatory Compliance</span>
                  </CardTitle>
                  <CardDescription>
                    Ensure compliance with CMMC, NIST, DFARS, ITAR, and ISO 27001 standards
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Automatically map supplier capabilities to compliance frameworks, track certification status, and maintain continuous compliance monitoring.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>CMMC Level 1-3</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>NIST 800-171</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>DFARS 252.204</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="risk" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-6 h-6 text-primary" />
                    <span>Supply Chain Risk Management</span>
                  </CardTitle>
                  <CardDescription>
                    Proactive risk identification and mitigation across your supplier network
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Leverage AI-powered risk scoring to identify vulnerabilities before they become problems. Monitor financial stability, cyber security posture, and operational resilience.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Financial Risk Assessment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Cyber Security Scoring</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="onboarding" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-primary" />
                    <span>Vendor Due Diligence</span>
                  </CardTitle>
                  <CardDescription>
                    Streamlined supplier onboarding with automated verification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Accelerate supplier onboarding while maintaining security standards. Automated document collection, verification, and compliance checking.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Automated Document Collection</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Real-time Verification</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="audit" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileCheck className="w-6 h-6 text-primary" />
                    <span>Audit Preparation & Readiness</span>
                  </CardTitle>
                  <CardDescription>
                    Always audit-ready with comprehensive documentation and reporting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Maintain complete audit trails and generate compliance reports on-demand. Reduce audit preparation time from weeks to hours.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Complete Audit Trails</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>On-demand Reports</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="monitoring" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-primary" />
                    <span>Continuous Monitoring & Alerts</span>
                  </CardTitle>
                  <CardDescription>
                    Real-time monitoring with intelligent alerting and automated responses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Never miss a compliance deadline or risk change. Automated monitoring with smart alerts and customizable response workflows.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Real-time Risk Monitoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Intelligent Alerting</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Problems We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Eliminate the pain points of traditional supplier risk management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                problem: "Tired of spreadsheets and error-prone tracking?",
                solution: "Centralized platform eliminates manual processes"
              },
              {
                problem: "Lack visibility into supplier compliance?",
                solution: "Real-time compliance dashboard and monitoring"
              },
              {
                problem: "Need to stay audit-ready year-round?",
                solution: "Continuous audit trails and on-demand reporting"
              },
              {
                problem: "Want to identify vulnerabilities before they escalate?",
                solution: "AI-powered risk scoring and predictive analytics"
              },
              {
                problem: "Struggling to keep pace with regulatory demands?",
                solution: "Automated compliance mapping and updates"
              },
              {
                problem: "Complex onboarding slowing business?",
                solution: "Streamlined workflows and automated verification"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-base font-semibold text-secondary mb-2">
                        {item.problem}
                      </CardTitle>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <CardDescription className="text-sm">
                          {item.solution}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto bg-card/95 backdrop-blur">
            <CardContent className="pt-12 pb-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-semibold text-secondary mb-6 leading-relaxed">
                "Red Launch helped us reduce compliance reporting time by 50% while improving our overall security posture."
              </blockquote>
              <div className="space-y-2">
                <p className="font-semibold text-lg">Director of Compliance</p>
                <p className="text-muted-foreground">Aerospace Manufacturing Firm</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Red Launch */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">About Red Launch Technologies</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We build compliance-first tools for regulated industries, helping organizations navigate 
                complex security requirements while maintaining operational efficiency.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-red-gradient rounded-2xl flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Security First</h3>
                <p className="text-muted-foreground">Built with enterprise security and compliance at the core</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-red-gradient rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">AI-Powered</h3>
                <p className="text-muted-foreground">Intelligent automation to reduce manual work and errors</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-red-gradient rounded-2xl flex items-center justify-center mx-auto">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Enterprise Ready</h3>
                <p className="text-muted-foreground">Scalable solutions for organizations of all sizes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section id="contact" className="py-20 bg-hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Secure Your Supplier Ecosystem?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Join leading organizations who trust Red Launch Technologies to manage their supplier risk and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
              <Button variant="enterprise" size="lg" className="text-lg px-8">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="pt-8 border-t border-white/20">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/60">
                <p>&copy; 2024 Red Launch Technologies. All rights reserved.</p>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="mailto:support@redlaunch.tech" className="hover:text-white transition-colors">
                    support@redlaunch.tech
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
