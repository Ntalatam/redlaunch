import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Shield, 
  Target, 
  Users, 
  Award,
  CheckCircle,
  Rocket,
  Globe,
  Zap,
  Star,
  LinkedinIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import tylerFestaImage from "@/assets/tyler-festa.jpg";
import jesusBadilloImage from "@/assets/jesus-badillo.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Built with enterprise-grade security from the ground up"
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "Laser-focused on solving supplier risk management challenges"
    },
    {
      icon: Zap,
      title: "Innovation Drive",
      description: "Continuously innovating to stay ahead of emerging threats"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Dedicated to our customers' compliance and security success"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Red Launch Technologies established with a mission to revolutionize supplier risk management"
    },
    {
      year: "2023",
      title: "Platform Development",
      description: "Built the first version of our AI-powered supplier risk assessment platform"
    },
    {
      year: "2024",
      title: "CMMC Certification",
      description: "Achieved CMMC Level 3 certification and compliance framework integration"
    },
    {
      year: "2024",
      title: "Enterprise Adoption",
      description: "Deployed across major defense contractors and manufacturing organizations"
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      background: "Former CISO at Fortune 500 defense contractor, 15+ years in cybersecurity"
    },
    {
      name: "Sarah Martinez",
      role: "CTO & Co-Founder", 
      background: "Ex-Principal Engineer at leading cloud security company, AI/ML expert"
    },
    {
      name: "Dr. Michael Thompson",
      role: "Chief Compliance Officer",
      background: "Former DOD compliance auditor, expert in CMMC and NIST frameworks"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-gradient rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary">
                Red Launch Technologies
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to transform how organizations manage supplier risk and maintain 
              compliance in an increasingly complex regulatory landscape.
            </p>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Security-First • Compliance-Ready • AI-Powered
            </Badge>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Meet the Founders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The visionary leaders driving innovation in supplier risk management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Tyler Festa - CEO */}
            <Card className="hover:shadow-elegant transition-all duration-300 bg-background/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/10">
                  <AvatarImage src={tylerFestaImage} alt="Tyler Festa" className="object-cover" />
                  <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">TF</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-bold text-secondary">Tyler Festa</CardTitle>
                <CardDescription className="text-lg font-medium text-primary italic">
                  Chief Executive Officer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Tyler Festa is the CEO of Red Launch Technologies, bringing robust experience in enterprise 
                  go-to-market strategy and artificial intelligence. Adopted from South Korea and raised in 
                  New Jersey, he played college football and later translated leadership on the field into 
                  commercial excellence.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-secondary">Highlights</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>B.A., University of Mississippi</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Strategic Enterprise Account Executive at Palantir Technologies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>VP of GTM & Partnerships at QwikRecruiting (generated $500K revenue)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Former Assistant Football Coach at Illinois College</span>
                    </li>
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://www.linkedin.com/in/tylerfesta/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Jesus Badillo - CTO */}
            <Card className="hover:shadow-elegant transition-all duration-300 bg-background/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/10">
                  <AvatarImage src={jesusBadilloImage} alt="Jesus Badillo" className="object-cover" />
                  <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">JB</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-bold text-secondary">Jesus Badillo</CardTitle>
                <CardDescription className="text-lg font-medium text-primary italic">
                  Chief Technology Officer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Jesus Badillo serves as CTO at Red Launch Technologies, bringing deep experience in 
                  software architecture and technical leadership. He holds a Bachelor's degree in Business 
                  Administration from the University of Southern California and has driven innovation 
                  across multiple tech roles.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-secondary">Highlights</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>B.S. in Business Administration, USC Marshall School of Business</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Expert in software architecture and scalable system design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Technical leadership across multiple technology companies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Specializes in enterprise-grade platform development</span>
                    </li>
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://www.linkedin.com/in/jesus-badillo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide organizations with the most advanced, intelligent, and user-friendly 
                  platform for managing supplier risk and maintaining compliance across all 
                  regulatory frameworks.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  What Drives Us
                </h3>
                <ul className="space-y-3">
                  {[
                    "Eliminate manual compliance processes that waste time and introduce errors",
                    "Provide real-time visibility into supplier risk across entire supply chains",
                    "Enable proactive risk management through AI-powered insights",
                    "Simplify complex regulatory requirements for all stakeholders"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Suppliers Assessed</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Platform Uptime</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From inception to industry leadership
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                            {milestone.year}
                          </div>
                          <CardTitle className="text-lg">{milestone.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry veterans with deep expertise in security, compliance, and technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {member.background}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by industry leaders and certified by leading standards bodies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "SOC 2 Type II", subtitle: "Certified" },
              { icon: Shield, title: "CMMC Level 3", subtitle: "Compliant" },
              { icon: Globe, title: "ISO 27001", subtitle: "Certified" },
              { icon: Star, title: "NIST Framework", subtitle: "Aligned" }
            ].map((cert, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300">
                <cert.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-lg font-semibold text-secondary">{cert.title}</div>
                <div className="text-sm text-muted-foreground">{cert.subtitle}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Join Us on This Mission?
            </h2>
            <p className="text-xl text-white/80">
              Let's work together to secure your supply chain and streamline your compliance processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="enterprise" size="lg" className="text-lg px-8" asChild>
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;