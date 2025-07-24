import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Home, Zap, Wrench, Shield, Settings, Info, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    // { name: "Power Tools", href: "/power-tools", icon: Zap },
    // { name: "Hand Tools", href: "/hand-tools", icon: Wrench },
    // { name: "Safety", href: "/safety", icon: Shield },
    // { name: "Hardware", href: "/hardware", icon: Settings },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center">
            <div className="text-2xl font-bold text-industrial-dark">
              A.D. <span className="text-primary">Global Synergies</span>
            </div>
          </div>
          </Link>

          

          {/* Right side icons */}
          <div className="flex items-center gap-3">

            {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border bg-gradient-to-b from-background to-muted/20">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-4 px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded-lg mx-2 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;