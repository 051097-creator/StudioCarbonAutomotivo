import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Estética automotiva profissional - carro premium recebendo detalhamento"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20 animate-fade-in-down">
            <Award className="w-5 h-5 text-gold animate-float" />
            <span className="text-sm font-medium">+10 Anos de Excelência</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Transforme Seu Veículo em
            <span className="text-gradient-gold block mt-2">Uma Obra de Arte</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Estética automotiva premium com técnicas avançadas de detalhamento, vitrificação e proteção. 
            Resultados excepcionais para quem exige o melhor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Link to="/agendamento">
              <Button size="lg" className="gradient-gold text-primary font-bold text-lg px-8 py-6 shadow-gold hover:opacity-90 hover:scale-105 transition-smooth">
                Agende Seu Serviço
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/servicos">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 font-semibold text-lg px-8 py-6 transition-smooth"
              >
                Conheça Nossos Serviços
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-smooth animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <Shield className="w-10 h-10 text-gold mb-4 mx-auto animate-float" />
              <h3 className="font-bold text-lg mb-2">Garantia de Qualidade</h3>
              <p className="text-sm text-white/80">
                Produtos premium e técnicas profissionais certificadas
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-smooth animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <Clock className="w-10 h-10 text-gold mb-4 mx-auto animate-float" style={{ animationDelay: "0.5s" }} />
              <h3 className="font-bold text-lg mb-2">Agendamento Flexível</h3>
              <p className="text-sm text-white/80">
                Horários adaptados à sua rotina e necessidades
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-smooth animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
              <Award className="w-10 h-10 text-gold mb-4 mx-auto animate-float" style={{ animationDelay: "1s" }} />
              <h3 className="font-bold text-lg mb-2">Equipe Especializada</h3>
              <p className="text-sm text-white/80">
                Profissionais treinados e certificados internacionalmente
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
