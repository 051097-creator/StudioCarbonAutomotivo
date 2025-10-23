import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const whatsappNumber = "5511999999999"; // Formato: 55 + DDD + número
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar um serviço de estética automotiva."
  );

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-3xl shadow-elegant overflow-hidden hover:shadow-gold transition-smooth animate-scale-in">
          <div className="p-12 md:p-16 text-center">
            {/* Content */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Pronto para Transformar Seu Veículo?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Agende agora seu serviço e descubra por que somos referência em 
              estética automotiva premium. Garantia de qualidade e satisfação!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/agendamento">
                <Button
                  size="lg"
                  className="gradient-gold text-primary font-bold text-lg px-8 py-6 shadow-gold hover:opacity-90 hover:scale-105 transition-smooth"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Agendar Online
                </Button>
              </Link>
              
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 font-semibold text-lg px-8 py-6 transition-smooth"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Phone className="w-5 h-5 text-gold" />
              <span className="text-lg">Ou ligue: (11) 99999-9999</span>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="h-2 gradient-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
