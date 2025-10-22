import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, Car, User, Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Agendamento = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const services = [
    "Lavagem Técnica Completa",
    "Lavagem a Seco Ecológica",
    "Higienização Interna Completa",
    "Polimento Técnico",
    "Detalhamento Completo",
    "Vitrificação Cerâmica",
    "Restauração de Faróis",
    "Outro (especificar na mensagem)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.service) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Criar mensagem para WhatsApp
    const whatsappNumber = "5511999999999";
    const message = `
Olá! Gostaria de agendar um serviço:

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Veículo:* ${formData.vehicle}
*Serviço:* ${formData.service}
*Data preferencial:* ${formData.date || "A definir"}
*Horário preferencial:* ${formData.time || "A definir"}
*Mensagem:* ${formData.message || "Nenhuma"}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp
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
                Agende Seu Serviço
              </h1>
              <p className="text-xl text-white/90">
                Preencha o formulário e entraremos em contato para confirmar seu agendamento
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Dados do Agendamento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Nome Completo *</Label>
                          <div className="relative mt-2">
                            <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="name"
                              className="pl-10"
                              placeholder="Seu nome"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="phone">Telefone *</Label>
                          <div className="relative mt-2">
                            <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="phone"
                              type="tel"
                              className="pl-10"
                              placeholder="(11) 99999-9999"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <div className="relative mt-2">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            className="pl-10"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="vehicle">Veículo (Marca/Modelo/Ano)</Label>
                        <div className="relative mt-2">
                          <Car className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="vehicle"
                            className="pl-10"
                            placeholder="Ex: Honda Civic 2020"
                            value={formData.vehicle}
                            onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div>
                        <Label htmlFor="service">Serviço Desejado *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Date and Time */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">Data Preferencial</Label>
                          <div className="relative mt-2">
                            <Calendar className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="date"
                              type="date"
                              className="pl-10"
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="time">Horário Preferencial</Label>
                          <div className="relative mt-2">
                            <Clock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="time"
                              type="time"
                              className="pl-10"
                              value={formData.time}
                              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message">Observações</Label>
                        <Textarea
                          id="message"
                          className="mt-2"
                          placeholder="Alguma informação adicional ou solicitação especial..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gradient-gold text-primary font-bold shadow-gold hover:opacity-90"
                      >
                        <MessageCircle className="mr-2 w-5 h-5" />
                        Enviar via WhatsApp
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        * Campos obrigatórios. Você será redirecionado ao WhatsApp para confirmar o agendamento.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <Card className="bg-primary text-primary-foreground border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Horário de Atendimento</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gold" />
                      <div>
                        <p className="font-semibold">Segunda a Sexta</p>
                        <p className="text-primary-foreground/80">8h às 18h</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gold" />
                      <div>
                        <p className="font-semibold">Sábado</p>
                        <p className="text-primary-foreground/80">8h às 14h</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gold" />
                      <div>
                        <p className="font-semibold">Domingo</p>
                        <p className="text-primary-foreground/80">Fechado</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Contatos Diretos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gold" />
                      <div>
                        <p className="font-semibold">Telefone</p>
                        <p className="text-muted-foreground">(11) 99999-9999</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-gold" />
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <p className="text-muted-foreground">(11) 99999-9999</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gold" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">contato@estetica.com.br</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent border-border">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Dica:</strong> Agende com antecedência 
                      para garantir o melhor horário. Serviços de detalhamento completo podem 
                      levar de 1 a 3 dias.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Agendamento;
