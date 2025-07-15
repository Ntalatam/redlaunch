import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Target, 
  Users, 
  FileCheck, 
  Eye, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  Clock,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";

const UseCases = () => {
  const useCaseDetails = {
    compliance: {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Ensure compliance with CMMC, NIST, DFARS, ITAR, and ISO 27001 standards",
      content: "Automatically map supplier capabilities to compliance frameworks, track certification status, and maintain continuous compliance monitoring.",
      benefits: [
        "CMMC Level 1-3 compliance tracking",
        "NIST 800-171 framework mapping",
        "DFARS 252.204 requirements",
        "ISO 27001 certification monitoring",
        "Automated compliance scoring",
        "Real-time framework updates"
      ],
      industries: ["Defense & Aerospace", "Government Contractors", "Critical Infrastructure"]
    },
    risk: {
      icon: Target,
      title: "Supply Chain Risk Management",
      description: "Proactive risk identification and mitigation across your supplier network",
      content: "Leverage AI-powered risk scoring to identify vulnerabilities before they become problems. Monitor financial stability, cyber security posture, and operational resilience.",
      benefits: [
        "Financial risk assessment",
        "Cybersecurity posture monitoring",
        "Operational resilience tracking",
        "Geographic risk analysis",
        "Third-party risk aggregation",
        "Predictive risk modeling"
      ],
      industries: ["Manufacturing", "Healthcare", "Financial Services"]
    },
    onboarding: {
      icon: Users,
      title: "Vendor Onboarding",
      description: "Streamlined supplier onboarding with automated verification and compliance checks",
      content: "Reduce onboarding time from weeks to days with automated workflows, document verification, and compliance pre-screening.",
      benefits: [
        "Automated invitation workflows",
        "Document collection & verification",
        "Compliance pre-screening",
        "Background check integration",
        "Insurance verification",
        "Self-service portal access"
      ],
      industries: ["All Industries", "Procurement Teams", "Vendor Management"]
    },
    audit: {
      icon: FileCheck,
      title: "Audit Readiness",
      description: "Maintain continuous audit readiness with comprehensive documentation and traceability",
      content: "Always be audit-ready with complete audit trails, automated documentation, and compliance evidence collection.",
      benefits: [
        "Complete audit trail logging",
        "Automated evidence collection",
        "Compliance gap identification",
        "Historical data preservation",
        "Audit report generation",
        "Remediation tracking"
      ],
      industries: ["Regulated Industries", "Public Companies", "Government Entities"]
    },
    monitoring: {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "24/7 supplier monitoring with real-time alerts and automated risk updates",
      content: "Never miss a critical change with continuous monitoring of supplier risk factors, compliance status, and external threat intelligence.",
      benefits: [
        "Real-time risk monitoring",
        "Automated alert system",
        "External threat intelligence",
        "News & event tracking",
        "Financial health monitoring",
        "Compliance status updates"
      ],
      industries: ["High-Risk Industries", "Critical Supply Chains", "Security-Conscious Organizations"]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Use Cases
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary">
              Comprehensive Solutions for Every Challenge
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From compliance management to continuous monitoring, our platform adapts to your 
              specific supplier risk management needs
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="compliance" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="risk">Risk Management</TabsTrigger>
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              <TabsTrigger value="audit">Audit Ready</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>
            
            {Object.entries(useCaseDetails).map(([key, useCase]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <Card className="shadow-elegant">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-red-gradient rounded-2xl flex items-center justify-center shadow-red">
                          <useCase.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                          <CardDescription className="text-lg">
                            {useCase.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {useCase.content}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Key Benefits:</h4>
                        <div className="grid gap-2">
                          {useCase.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Ideal For:</h4>
                        <div className="flex flex-wrap gap-2">
                          {useCase.industries.map((industry, index) => (
                            <Badge key={index} variant="outline">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Stats/Metrics for each use case */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-secondary">Impact Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {key === 'compliance' && (
                        <>
                          <Card className="text-center p-6">
                            <div className="text-3xl font-bold text-primary mb-2">95%</div>
                            <div className="text-sm text-muted-foreground">Compliance Accuracy</div>
                          </Card>
                          <Card className="text-center p-6">
                            <div className="text-3xl font-bold text-primary mb-2">60%</div>
                            <div className="text-sm text-muted-foreground">Faster Audits</div>
                          </Card>
                        </>
                      )}
                      {key === 'risk' && (
                        <>
                          <Card className="text-center p-6">
                            <div className="text-3xl font-bold text-primary mb-2">80%</div>
                            <div className="text-sm text-muted-foreground">Risk Reduction</div>
                          </Card>
                          <Card className="text-center p-6">
                            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                            <div className="text-sm text-muted-foreground">Monitoring</div>
                          </Card>
                        </>
                      )}
                      {key === 'onboarding' && (
                        <>
                          <Card className="text-center p-6">
                            <div className="text-3xl font-bold text-primary mb-2">75%</div>
                            <div className="text-sm text-muted-foreground">Time Savings</div>
                          </Card>
                          <Card className="text-center p-6">
                            <div className="text-3xl font-bold text-primary mb-2">3 Days</div>
                            <div className="text-sm text-muted-foreground">Avg. Onboarding</div>
                          </Card>
                        </>
                      )}
                      {key === 'audit' && (
                        <>
                          <Card className="text-center p-6">
                            <div className="text-3xl font-bold text-primary mb-2">100%</div>
                            <div className="text-sm text-muted-foreground">Audit Readiness</div>
                          </Card>
                          <Card className="text-center p-6">
                            <div className="text-3xl font-bold text-primary mb-2">50%</div>
                            <div className="text-sm text-muted-foreground">Less Prep Time</div>
                          </Card>
                        </>
                      )}
                      {key === 'monitoring' && (
                        <>
                          <Card className="text-center p-6">
                            <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
                            <div className="text-sm text-muted-foreground">Alerts</div>
                          </Card>
                          <Card className="text-center p-6">
                            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                            <div className="text-sm text-muted-foreground">Uptime</div>
                          </Card>
                        </>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Common Challenges Solved:</h4>
                      <div className="space-y-3">
                        {key === 'compliance' && (
                          <>
                            <div className="flex items-start space-x-3">
                              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">Manual compliance tracking across multiple frameworks</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">Lack of visibility into supplier compliance status</span>
                            </div>
                          </>
                        )}
                        {key === 'risk' && (
                          <>
                            <div className="flex items-start space-x-3">
                              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">Reactive risk management approach</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">Inconsistent risk assessment methodologies</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Industry Spotlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored approaches for different industries and regulatory environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Defense & Aerospace</CardTitle>
                <CardDescription>
                  CMMC, DFARS, and ITAR compliance requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• CMMC Level 1-3 assessment</li>
                  <li>• DFARS flow-down tracking</li>
                  <li>• ITAR controlled technology</li>
                  <li>• Security clearance verification</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Manufacturing</CardTitle>
                <CardDescription>
                  Supply chain resilience and operational risk management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Production capacity monitoring</li>
                  <li>• Quality certification tracking</li>
                  <li>• Geographic risk assessment</li>
                  <li>• Delivery performance metrics</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Financial Services</CardTitle>
                <CardDescription>
                  Regulatory compliance and third-party risk management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SOX compliance monitoring</li>
                  <li>• Data privacy assessments</li>
                  <li>• Operational resilience testing</li>
                  <li>• Regulatory reporting automation</li>
                </ul>
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
              Find Your Perfect Use Case
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our platform can address your specific supplier risk challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button variant="enterprise" size="lg" className="text-lg px-8" asChild>
                <Link to="/features">Explore Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;