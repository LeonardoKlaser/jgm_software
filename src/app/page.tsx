import Image from "next/image"
import { Laptop, Printer, BarChart, Clock, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Suporte de TI Profissional</h1>
        <p className="text-xl mb-8">Soluções confiáveis para manter seu negócio funcionando sem problemas</p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Suporte de TI: A Base do Seu Sucesso Digital</h2>
            <p className="mb-4">
              O suporte de TI é fundamental para o funcionamento eficiente e seguro de qualquer empresa moderna. Como
              profissional experiente, ofereço soluções personalizadas que garantem:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Redução de tempo de inatividade e aumento da produtividade</li>
              <li>Proteção contra ameaças cibernéticas e perda de dados</li>
              <li>Otimização de sistemas para melhor desempenho</li>
              <li>Suporte rápido e eficiente para minimizar interrupções</li>
              <li>Implementação de tecnologias inovadoras para impulsionar seu negócio</li>
            </ul>
            <p>
              Com um suporte de TI confiável, você pode focar no crescimento do seu negócio, enquanto eu cuido da sua
              infraestrutura tecnológica.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profissional de TI"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <WhenToHireSection />
        <HowIHelpSection />
        <AboutMeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function ServicesSection() {
  const services = [
    { icon: <Laptop className="w-12 h-12 mb-4" />, title: "Suporte de TI" },
    { icon: <Clock className="w-12 h-12 mb-4" />, title: "Manutenção" },
    { icon: <Printer className="w-12 h-12 mb-4" />, title: "Impressoras" },
    { icon: <BarChart className="w-12 h-12 mb-4" />, title: "Power BI" },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhenToHireSection() {
  const reasons = [
    "Problemas técnicos frequentes",
    "Necessidade de atualização de sistemas",
    "Preocupações com segurança de dados",
    "Expansão do negócio",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Quando Contratar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="IT Support"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowIHelpSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Como Posso Ajudar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Soluções Personalizadas</h3>
            <p className="mb-4">
              Ofereço soluções de TI adaptadas às necessidades específicas do seu negócio, garantindo eficiência e
              produtividade.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Suporte Rápido e Confiável</h3>
            <p>
              Com atendimento ágil e expertise técnica, resolvo problemas rapidamente para minimizar o tempo de
              inatividade do seu negócio.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="IT Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutMeSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-full shadow-md"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">João da Silva</h3>
            <p className="mb-4">
              Com mais de 10 anos de experiência em TI, sou apaixonado por ajudar empresas a otimizar suas operações
              através de soluções tecnológicas eficientes. Minha expertise abrange desde suporte técnico até
              implementações complexas de sistemas e análise de dados.
            </p>
            <p>
              Estou sempre atualizado com as últimas tendências e tecnologias para oferecer o melhor serviço aos meus
              clientes. Meu objetivo é ser um parceiro confiável para o sucesso tecnológico do seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
        <p className="text-xl mb-8">Estou pronto para ajudar com suas necessidades de TI. Entre em contato agora!</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="mailto:contato@example.com"
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            E-mail
          </a>
        </div>
      </div>
    </section>
  )
}

