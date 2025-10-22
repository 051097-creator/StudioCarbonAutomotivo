import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    vehicle: "BMW M3 2022",
    rating: 5,
    text: "Serviço impecável! Meu carro ficou completamente transformado após o detalhamento completo. A equipe é extremamente profissional e atenciosa.",
  },
  {
    name: "Marina Costa",
    vehicle: "Mercedes-Benz C300",
    rating: 5,
    text: "A vitrificação cerâmica superou todas as minhas expectativas. O carro continua com brilho intenso mesmo após 6 meses. Vale cada centavo investido!",
  },
  {
    name: "Roberto Oliveira",
    vehicle: "Porsche 911",
    rating: 5,
    text: "Atendimento diferenciado e resultado perfeito. A atenção aos detalhes é impressionante. Recomendo fortemente para quem busca excelência!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 gradient-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-white/80">
            A satisfação dos nossos clientes é o nosso maior reconhecimento. 
            Confira os depoimentos de quem já confiou seu veículo à nossa equipe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-smooth"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-gold mb-4 opacity-50" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/90 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gold">{testimonial.vehicle}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
