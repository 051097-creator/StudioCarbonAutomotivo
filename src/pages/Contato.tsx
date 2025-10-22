import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Criar mensagem para WhatsApp
    const whatsappNumber = "5511999999999";
    const message = `
Olá! Tenho uma dúvida/mensagem:

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Assunto:* ${formData.subject}

*Mensagem:*
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecionando para WhatsApp...");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Entre em Contato
              </h1>
              <p className="text-xl text-white/90">
                Estamos prontos para atender você e cuidar do seu veículo
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Nossos Contatos</h2>
                  <p className="text-muted-foreground mb-8">
                    Entre em contato conosco através de qualquer um dos canais abaixo. 
                    Teremos prazer em atendê-lo!
                  </p>
                </div>

                <Card className="border-border">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Endereço</h3>
                        <p className="text-muted-foreground">
                          Rua Exemplo, 123 - Bairro<br />
                          São Paulo, SP - CEP 01234-567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Telefones</h3>
                        <p className="text-muted-foreground">
                          (11) 99999-9999<br />
                          (11) 3333-3333
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          contato@estetica.com.br<br />
                          agendamento@estetica.com.br
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Horário de Funcionamento</h3>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 8h às 18h<br />
                          Sábado: 8h às 14h<br />
                          Domingo: Fechado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-muted rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">Atendimento via WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefere conversar pelo WhatsApp? Clique no botão abaixo e 
                    fale diretamente com nossa equipe!
                  </p>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full gradient-gold text-primary font-semibold">
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Abrir WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Envie sua Mensagem</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          className="mt-2"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          className="mt-2"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          className="mt-2"
                          placeholder="(11) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject">Assunto</Label>
                        <Input
                          id="subject"
                          className="mt-2"
                          placeholder="Sobre o que você quer falar?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          className="mt-2"
                          placeholder="Digite sua mensagem aqui..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gradient-gold text-primary font-bold shadow-gold hover:opacity-90"
                      >
                        <Send className="mr-2 w-5 h-5" />
                        Enviar Mensagem
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        * Campos obrigatórios
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Nossa Localização</h2>
              <div className="rounded-2xl overflow-hidden shadow-elegant h-96 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">
                  [Mapa do Google Maps será integrado aqui]
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
