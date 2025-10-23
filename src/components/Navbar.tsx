import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Agendamento", path: "/agendamento" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center shadow-gold transition-smooth group-hover:animate-glow">
              <span className="text-xl font-bold text-primary">SC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-foreground">StudioCarbon</span>
              <span className="text-xs text-gradient-gold font-semibold tracking-wide">automotivo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth hover:text-gold ${
                  isActive(link.path) ? "text-gold" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-gold" />
              <span className="text-foreground">(11) 99999-9999</span>
            </div>
            <Button className="gradient-gold text-primary font-semibold shadow-gold hover:opacity-90">
              Agende Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium px-4 py-2 rounded-lg transition-smooth ${
                    isActive(link.path)
                      ? "bg-accent text-gold"
                      : "text-foreground hover:bg-accent/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm mb-4">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-foreground">(11) 99999-9999</span>
                </div>
                <Button className="w-full gradient-gold text-primary font-semibold shadow-gold">
                  Agende Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
