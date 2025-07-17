import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: "/products", label: "Products" },
    { path: "/features", label: "Features" },
    { path: "/how-it-works", label: "How It Works" },
    { path: "/use-cases", label: "Use Cases" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-gradient rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-secondary">Red Launch Technologies</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`transition-colors ${
                isActive(path)
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">Book a Demo</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;