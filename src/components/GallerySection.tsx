import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import beforeAfter from "@/assets/before-after-1.jpg";

const GallerySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Resultados Reais</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Transformações que Impressionam
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o antes e depois dos nossos trabalhos. Cada projeto é executado com 
            perfeição e atenção aos mínimos detalhes.
          </p>
        </div>

        {/* Featured Before/After */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
            <img
              src={beforeAfter}
              alt="Transformação de veículo - antes e depois do detalhamento profissional"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-smooth"></div>
            
            {/* Before/After Labels */}
            <div className="absolute top-4 left-4 bg-destructive/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-white font-bold text-sm">ANTES</span>
            </div>
            <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-primary font-bold text-sm">DEPOIS</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">+5.000</div>
            <div className="text-sm text-muted-foreground">Veículos Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">+10</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Garantia de Qualidade</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary font-semibold">
            Ver Mais Trabalhos
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
