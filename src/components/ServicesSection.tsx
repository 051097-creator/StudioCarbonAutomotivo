import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Droplet, Brush, Car, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import polishingImage from "@/assets/service-polishing.jpg";
import coatingImage from "@/assets/service-coating.jpg";
import interiorImage from "@/assets/service-interior.jpg";

const services = [
  {
    icon: Brush,
    title: "Polimento Técnico",
    description: "Correção de pintura profissional, removendo riscos, hologramas e oxidações",
    image: polishingImage,
    features: ["Correção em múltiplas etapas", "Equipamento profissional", "Acabamento espelhado"],
  },
  {
    icon: Shield,
    title: "Vitrificação Cerâmica",
    description: "Proteção de longa duração com revestimento cerâmico de alta performance",
    image: coatingImage,
    features: ["Proteção até 5 anos", "Efeito hidrofóbico", "Resistência UV"],
  },
  {
    icon: Sparkles,
    title: "Detalhamento Interno",
    description: "Limpeza profunda e tratamento completo de todos os componentes internos",
    image: interiorImage,
    features: ["Higienização a vapor", "Tratamento de couro", "Eliminação de odores"],
  },
  {
    icon: Droplet,
    title: "Lavagem Técnica",
    description: "Processo seguro de lavagem que preserva a pintura e evita micro riscos",
    features: ["Método de duas águas", "Produtos pH neutro", "Secagem sem contato"],
  },
  {
    icon: Car,
    title: "Restauração de Faróis",
    description: "Recuperação total de faróis opacos, amarelados ou arranhados",
    features: ["Lixamento progressivo", "Polimento óptico", "Aplicação UV"],
  },
  {
    icon: Zap,
    title: "Proteção PPF",
    description: "Película de proteção transparente para preservar a pintura original",
    features: ["Auto-regeneração", "Proteção contra pedras", "Instalação invisível"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Excelência em Cada Detalhe
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços premium para manter seu veículo impecável, 
            protegido e valorizado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-smooth group cursor-pointer border-border"
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/servicos">
            <Button size="lg" className="gradient-gold text-primary font-bold shadow-gold hover:opacity-90">
              Ver Todos os Serviços
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
