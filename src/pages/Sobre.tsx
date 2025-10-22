import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Target, Users, Zap } from "lucide-react";
import facilityImage from "@/assets/facility.jpg";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Sobre Nós
              </h1>
              <p className="text-xl text-white/90">
                Mais de 10 anos dedicados à excelência em estética automotiva
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Nossa História</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  Paixão por Automóveis e Perfeição
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Fundada em 2013, nossa estética automotiva nasceu da paixão por veículos e 
                    do compromisso com a excelência. Desde o início, nosso objetivo sempre foi 
                    oferecer serviços de qualidade premium que superassem as expectativas dos 
                    nossos clientes.
                  </p>
                  <p>
                    Com mais de uma década de experiência, desenvolvemos técnicas avançadas de 
                    detalhamento, investimos em equipamentos de última geração e formamos uma 
                    equipe altamente especializada. Cada membro da nossa equipe é treinado nas 
                    mais modernas técnicas internacionais de estética automotiva.
                  </p>
                  <p>
                    Hoje, somos reconhecidos como referência em estética automotiva premium, 
                    atendendo desde carros populares até veículos de luxo e coleção. Nossa 
                    missão é preservar e valorizar seu patrimônio com o cuidado que ele merece.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={facilityImage}
                  alt="Instalações modernas da estética automotiva"
                  className="rounded-2xl shadow-elegant"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold text-primary p-8 rounded-xl shadow-gold">
                  <div className="text-4xl font-bold mb-1">+10</div>
                  <div className="text-sm font-semibold">Anos de Excelência</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Nossos Valores</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                O Que Nos Move
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-elegant transition-smooth">
                <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excelência</h3>
                <p className="text-muted-foreground">
                  Buscamos a perfeição em cada detalhe, utilizando as melhores técnicas e produtos do mercado.
                </p>
              </div>

              <div className="bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-elegant transition-smooth">
                <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compromisso</h3>
                <p className="text-muted-foreground">
                  Comprometidos com prazos, qualidade e satisfação total dos nossos clientes.
                </p>
              </div>

              <div className="bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-elegant transition-smooth">
                <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Confiança</h3>
                <p className="text-muted-foreground">
                  Construímos relações duradouras baseadas em transparência e respeito.
                </p>
              </div>

              <div className="bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-elegant transition-smooth">
                <div className="w-16 h-16 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Inovação</h3>
                <p className="text-muted-foreground">
                  Sempre atualizados com as últimas tecnologias e tendências do setor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Nossa Equipe</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Profissionais Certificados
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Nossa equipe é composta por especialistas treinados e certificados internacionalmente 
                em técnicas avançadas de detalhamento automotivo. Cada profissional passa por 
                capacitação contínua para garantir os melhores resultados.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-muted rounded-xl p-6">
                  <div className="text-5xl font-bold text-gradient-gold mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Equipe Certificada</div>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <div className="text-5xl font-bold text-gradient-gold mb-2">+5.000</div>
                  <div className="text-sm text-muted-foreground">Veículos Atendidos</div>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <div className="text-5xl font-bold text-gradient-gold mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
