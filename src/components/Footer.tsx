import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary">EA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base">Estética</span>
                <span className="text-xs text-gold">Automotiva Premium</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Excelência em estética automotiva. Cuidamos do seu veículo com a qualidade que ele merece.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-smooth">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-gold transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-primary-foreground/80 hover:text-gold transition-smooth">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm text-primary-foreground/80 hover:text-gold transition-smooth">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/agendamento" className="text-sm text-primary-foreground/80 hover:text-gold transition-smooth">
                  Agendamento
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-primary-foreground/80 hover:text-gold transition-smooth">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Nossos Serviços</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Detalhamento Automotivo</li>
              <li>Polimento e Cristalização</li>
              <li>Vitrificação de Pintura</li>
              <li>Higienização Interna</li>
              <li>Lavagem Técnica</li>
              <li>Proteção de Couro</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Rua Exemplo, 123 - Bairro - São Paulo, SP</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-primary-foreground/80">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-primary-foreground/80">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span>contato@estetica.com.br</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p>Seg - Sex: 8h às 18h</p>
                  <p>Sáb: 8h às 14h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Estética Automotiva Premium. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <Link to="/privacidade" className="hover:text-gold transition-smooth">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="hover:text-gold transition-smooth">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
