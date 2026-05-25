import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Stethoscope,
  Activity,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Phone,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  HeartPulse,
  Scale,
  Award,
  UserCheck
} from 'lucide-react';
import { seoData } from './data';

// --- Reusable Components ---

function Section({ children, className = '', id = '' }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

function SectionHeading({ subtitle, title, description, centered = false }: { subtitle?: string, title: string, description?: string, centered?: boolean }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {subtitle && (
        <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

function PrimaryButton({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg ${className}`}
    >
      {children}
    </a>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white">
              <Stethoscope size={24} />
            </div>
            <span className="font-bold text-2xl text-gray-900 tracking-tight">Urge<span className="text-primary-600">gastro</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#o-que-e" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">O que é</a>
            <a href="#beneficios" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Benefícios</a>
            <a href="#como-funciona" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Como funciona</a>
            <a href="#faq" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">FAQ</a>
            <PrimaryButton className="px-5 py-2" href={seoData.cta_principal.link}>
              Agendar Avaliação
            </PrimaryButton>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#o-que-e" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">O que é</a>
              <a href="#beneficios" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">Benefícios</a>
              <a href="#como-funciona" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">Como funciona</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">FAQ</a>
              <div className="mt-4">
                <PrimaryButton className="w-full" href={seoData.cta_principal.link}>
                  Agendar Avaliação
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const data = seoData.secoes[0];
  return (
    <div className="relative pt-24 lg:pt-32 pb-16 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 lg:pr-8"
          >
            <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 font-medium text-primary-700 text-sm mb-6">
              Emagrecimento com Saúde em Porto Alegre
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              {data.titulo}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {data.texto}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton href={seoData.cta_principal.link} className="text-lg px-8 py-4">
                {data.cta}
                <ArrowRight className="ml-2" size={20} />
              </PrimaryButton>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary-600" size={20} />
                <span>Minimamente Invasivo</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-primary-600" size={20} />
                <span>Recuperação Rápida</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 mt-16 lg:mt-0 relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-primary-600/10 mix-blend-multiply rounded-2xl z-10"></div>
              <img 
                src="/hero-image.jpg" 
                alt="Médico especialista da Urgegastro" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-20">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Procedimento</p>
                <p className="font-bold text-gray-900">Sem Cortes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Introducao() {
  const data = seoData.secoes[1];
  return (
    <Section id="o-que-e" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80" 
            alt="Equipamento de endoscopia" 
            className="rounded-2xl shadow-lg border border-gray-100"
          />
        </motion.div>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionHeading subtitle="Conceito" title={data.h2} />
          <p className="text-lg text-gray-600 leading-relaxed">
            {data.texto}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
             <div className="bg-primary-50 p-4 rounded-xl">
                <HeartPulse className="text-primary-600 mb-2" size={28} />
                <h4 className="font-bold text-gray-900">Segurança</h4>
                <p className="text-sm text-gray-600 mt-1">Realizado por endoscopia, sem incisões.</p>
             </div>
             <div className="bg-primary-50 p-4 rounded-xl">
                <Scale className="text-primary-600 mb-2" size={28} />
                <h4 className="font-bold text-gray-900">Eficácia</h4>
                <p className="text-sm text-gray-600 mt-1">Auxilia na perda de peso duradoura.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Indicacoes() {
  const data = seoData.secoes[2];
  return (
    <Section className="bg-gray-50 border-y border-gray-100">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <SectionHeading subtitle="Para quem é" title={data.h2} description={data.texto} centered />
      </div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {data.lista?.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4"
          >
            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <CheckCircle2 size={16} />
            </div>
            <p className="font-medium text-gray-800">{item}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Beneficios() {
  const data = seoData.secoes[3];
  const icons = [
    <Activity className="text-primary-600" size={32} />,
    <ShieldCheck className="text-primary-600" size={32} />,
    <Clock className="text-primary-600" size={32} />,
    <HeartPulse className="text-primary-600" size={32} />,
    <Scale className="text-primary-600" size={32} />,
    <UserCheck className="text-primary-600" size={32} />
  ];

  return (
    <Section id="beneficios" className="bg-white">
      <SectionHeading subtitle="Vantagens" title={data.h2} centered />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {data.lista?.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-primary-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
               {icons[idx % icons.length]}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item}</h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Comparacao() {
  const comparacao = seoData.secoes[4];
  const recuperacao = seoData.secoes[6];
  const resultados = seoData.secoes[7];

  return (
    <Section className="bg-slate-900 text-white">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <SectionHeading subtitle="Diferenças e Resultados" title={comparacao.h2} />
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {comparacao.texto}
          </p>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
               <Scale size={20} className="text-primary-400" />
               {resultados.h2}
            </h4>
            <p className="text-gray-300">
              {resultados.texto}
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
           <div className="bg-white/5 p-8 rounded-2xl border border-white/10 h-full">
              <h3 className="text-2xl font-bold mb-4">{recuperacao.h2}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {recuperacao.texto}
              </p>
              <ul className="space-y-4">
                {['Dieta líquida nos primeiros dias', 'Adaptação alimentar progressiva', 'Acompanhamento médico contínuo', 'Retorno rápido às atividades (sob orientação)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={20} className="text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
           </div>
        </motion.div>
      </div>
    </Section>
  );
}

function ComoFunciona() {
  const data = seoData.secoes[5];
  return (
    <Section id="como-funciona" className="bg-white">
      <SectionHeading subtitle="Passo a Passo" title={data.h2} centered />
      
      <div className="max-w-4xl mx-auto mt-16">
        <div className="relative">
          {/* Vertical line through steps */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-100 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12">
            {data.passos?.map((passo, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative z-10 md:flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`hidden md:block w-1/2 space-y-4 ${isEven ? 'pl-12' : 'pr-12 text-right'}`}>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary-100 items-center justify-center text-primary-600 font-bold z-10 shadow-sm">
                    {idx + 1}
                  </div>
                  
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-shadow">
                       <span className="md:hidden inline-block mb-3 bg-primary-100 text-primary-700 text-xs font-bold px-2 py-1 rounded">Passo {idx + 1}</span>
                       <h3 className="text-xl font-bold text-gray-900 mb-3">{passo.titulo.replace(/^\d+\.\s*/, '')}</h3>
                       <p className="text-gray-600">{passo.descricao}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

function AutoridadeMedica() {
  const data = seoData.secoes[8];
  return (
    <Section className="bg-primary-50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <SectionHeading subtitle="Equipe Urgegastro" title={data.h2} />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {data.texto}
          </p>
          <div className="bg-white p-6 rounded-xl border border-primary-100 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-3">Nossos diferenciais:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Award className="text-primary-600" size={20} /> Especialistas em Gastroenterologia
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Award className="text-primary-600" size={20} /> Endoscopia Digestiva de Excelência
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Award className="text-primary-600" size={20} /> Acompanhamento Individualizado
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" 
            alt="Clínica Urgegastro Porto Alegre" 
            className="rounded-2xl shadow-xl w-full object-cover"
            style={{ maxHeight: '400px' }}
          />
          <div className="absolute -bottom-6 -right-4 md:right-auto md:-left-6 bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-100">
            <p className="font-bold text-gray-900 text-lg">Atendimento no</p>
            <p className="text-primary-600 font-medium">Coração de Porto Alegre</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function CTAIntermediario() {
  const data = seoData.secoes[9];
  return (
    <Section className="bg-primary-600 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-500 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-primary-700 opacity-50 blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-3xl mx-auto py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.h2}</h2>
        <p className="text-primary-100 text-lg mb-10">{data.texto}</p>
        <a 
          href={seoData.cta_principal.link} 
          className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-bold rounded-md hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
        >
          {data.cta}
          <Phone className="ml-2" size={20} />
        </a>
      </div>
    </Section>
  );
}

function FAQ() {
  const data = seoData.secoes[10];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-gray-50 border-t border-gray-100">
      <SectionHeading subtitle="Respostas Rápidas" title={data.h2} centered />
      
      <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {data.perguntas?.map((faq: any, idx: number) => (
          <div key={idx} className="border-b border-gray-100 last:border-0">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.pergunta}</span>
              <ChevronDown 
                className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.resposta}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  const data = seoData.secoes[11];
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center border-b border-slate-800 pb-16 mb-10">
           <div>
             <h2 className="text-3xl font-bold mb-4">{data.h2}</h2>
             <p className="text-slate-400 text-lg">{data.texto}</p>
           </div>
           <div className="md:text-right">
             <PrimaryButton href={seoData.cta_principal.link} className="w-full md:w-auto px-8 py-4 text-lg">
                {data.cta}
             </PrimaryButton>
           </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Stethoscope size={20} />
            <span className="font-bold text-lg text-white">Urge<span className="text-primary-500">gastro</span></span>
          </div>
          <p>© {new Date().getFullYear()} Urgegastro - Porto Alegre. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <Introducao />
        <Indicacoes />
        <Beneficios />
        <Comparacao />
        <ComoFunciona />
        <AutoridadeMedica />
        <CTAIntermediario />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
