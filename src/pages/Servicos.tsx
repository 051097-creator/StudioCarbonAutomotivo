import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, Shield, Droplet, Brush, Car, Zap, 
  Wind, Flame, Sun, FileCheck 
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    category: "Lavagem e Higienização",
    icon: Droplet,
    color: "bg-blue-500",
    items: [
      {
        name: "Lavagem Técnica Completa",
        description: "Método de duas águas com produtos pH neutro, preservando a pintura",
        duration: "1-2h",
        price: "A partir de R$ 150",
      },
      {
        name: "Lavagem a Seco Ecológica",
        description: "Processo sustentável sem uso de água, ideal para ambientes restritos",
        duration: "1h",
        price: "A partir de R$ 120",
      },
      {
        name: "Higienização Interna Completa",
        description: "Limpeza profunda a vapor de todos os componentes internos",
        duration: "3-4h",
        price: "A partir de R$ 300",
      },
      {
        name: "Limpeza de Ar-Condicionado",
        description: "Eliminação de bactérias e mau cheiro do sistema de climatização",
        duration: "1h",
        price: "A partir de R$ 180",
      },
    ],
  },
  {
    category: "Detalhamento Automotivo",
    icon: Brush,
    color: "bg-purple-500",
    items: [
      {
        name: "Polimento Técnico",
        description: "Correção de pintura em múltiplas etapas, removendo riscos e hologramas",
        duration: "6-8h",
        price: "A partir de R$ 800",
      },
      {
        name: "Detalhamento Completo",
        description: "Processo completo incluindo lavagem, polimento, vitrificação e higienização",
        duration: "2-3 dias",
        price: "A partir de R$ 2.500",
      },
      {
        name: "Cristalização de Pintura",
        description: "Acabamento final que realça o brilho e profundidade da cor",
        duration: "2-3h",
        price: "A partir de R$ 400",
      },
      {
        name: "Tratamento de Couro",
        description: "Limpeza, hidratação e proteção profunda do couro",
        duration: "2-3h",
        price: "A partir de R$ 350",
      },
    ],
  },
  {
    category: "Proteção Avançada",
    icon: Shield,
    color: "bg-green-500",
    items: [
      {
        name: "Vitrificação Cerâmica",
        description: "Revestimento cerâmico de alta performance com proteção de até 5 anos",
        duration: "1-2 dias",
        price: "A partir de R$ 1.800",
      },
      {
        name: "Aplicação de Cera de Carnaúba",
        description: "Proteção natural premium com brilho profundo e duradouro",
        duration: "2-3h",
        price: "A partir de R$ 300",
      },
      {
        name: "Película de Proteção (PPF)",
        description: "Filme autorregenera tivo transparente para proteção contra impactos",
        duration: "2-3 dias",
        price: "Sob consulta",
      },
      {
        name: "Impermeabilização de Estofados",
        description: "Proteção contra líquidos e manchas nos bancos e carpetes",
        duration: "2-3h",
        price: "A partir de R$ 400",
      },
    ],
  },
  {
    category: "Serviços Especializados",
    icon: Zap,
    color: "bg-amber-500",
    items: [
      {
        name: "Restauração de Faróis",
        description: "Recuperação completa de faróis opacos ou amarelados",
        duration: "1-2h",
        price: "A partir de R$ 250",
      },
      {
        name: "Limpeza e Tratamento de Rodas",
        description: "Limpeza profunda, polimento e proteção das rodas",
        duration: "2-3h",
        price: "A partir de R$ 300",
      },
      {
        name: "Lavagem de Motor",
        description: "Limpeza segura e detalhada do compartimento do motor",
        duration: "1-2h",
        price: "A partir de R$ 200",
      },
      {
        name: "Remoção de Manchas e Odores",
        description: "Tratamento especializado para manchas difíceis e eliminação de odores",
        duration: "2-4h",
        price: "A partir de R$ 350",
      },
    ],
  },
];

const Servicos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Nossos Serviços
              </h1>
              <p className="text-xl text-white/90">
                Soluções completas e personalizadas para cada necessidade do seu veículo
              </p>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {services.map((category, index) => (
              <div key={index} className="mb-20 last:mb-0">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{category.category}</h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
                  {category.items.map((service, idx) => (
                    <Card key={idx} className="hover:shadow-elegant transition-smooth border-border">
                      <CardHeader>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">
                            <FileCheck className="w-4 h-4 inline mr-1" />
                            {service.duration}
                          </span>
                          <span className="font-bold text-gold">{service.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Por Que Escolher Nossos Serviços?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Garantia de Qualidade</h3>
                <p className="text-muted-foreground text-sm">
                  Produtos premium e garantia em todos os nossos serviços
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Resultados Excepcionais</h3>
                <p className="text-muted-foreground text-sm">
                  Transformação visível e duradoura do seu veículo
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Equipamentos Profissionais</h3>
                <p className="text-muted-foreground text-sm">
                  Tecnologia de ponta para os melhores resultados
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto gradient-primary rounded-3xl p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Pronto para Agendar?</h2>
              <p className="text-xl text-white/90 mb-8">
                Entre em contato conosco e receba um orçamento personalizado para seu veículo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/agendamento">
                  <Button size="lg" className="gradient-gold text-primary font-bold shadow-gold hover:opacity-90">
                    Agendar Serviço
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold"
                  >
                    Solicitar Orçamento
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
