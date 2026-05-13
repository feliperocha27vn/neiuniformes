import { motion } from 'framer-motion';
import {
  BadgePlus,
  MapPin,
  Menu,
  MessageCircle,
  MessagesSquare,
  Package,
  PanelBottom,
  Shirt,
  Tag,
  Truck,
  Utensils,
} from 'lucide-react';
import MapGL, { Marker, NavigationControl, FullscreenControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const WHATSAPP_NUMBER = '5518997029009';
const WHATSAPP_MESSAGE = 'Olá, vim pelo site e gostaria de solicitar um orçamento para uniformes da minha empresa!';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function App() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
        {/* ===== 1. Header ===== */}
        <header className="w-full bg-white/95 border-b border-line sticky top-0 z-50 backdrop-blur-sm">
          <div className="mx-auto w-full max-w-281.5 flex items-center justify-between px-5 md:px-8 lg:px-12 h-15 md:h-18 lg:h-20">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center justify-center w-9 h-9 md:size-20 rounded-sm overflow-hidden">
                <img
                  src="/logo.webp"
                  alt="NeiUniformes"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading text-lg md:text-xl font-extrabold text-text">
                NeiUniformes
              </span>
            </div>

            <Menu className="w-6 h-6 text-text cursor-pointer lg:hidden" />

            <nav className="hidden lg:flex items-center gap-8">
              {['Diferenciais', 'Como funciona', 'Produtos'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="font-body text-sm font-medium text-muted hover:text-text transition-colors no-underline"
                >
                  {link}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-zinc-50 font-body text-sm font-bold py-2.5 px-6 rounded-full cursor-pointer border-none hover:-translate-y-0.5 hover:shadow-md shadow-accent/30 transition-all no-underline"
              >
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        </header>

        {/* ===== 2. Hero ===== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full pt-6 md:pt-8 lg:pt-12 pb-14 md:pb-20 lg:pb-24"
        >
          <div className="mx-auto w-full max-w-281.5 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 xl:gap-20 px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-6 lg:flex-1">
              <div className="flex items-center gap-2 bg-accent-soft rounded-full px-4 py-2 w-fit">
                <div className="w-2 h-2 rounded-full bg-accent-dark" />
                <span className="font-body text-sm font-bold text-accent-dark">
                  Uniformes corporativos sob medida
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-[1.1] tracking-tight break-words">
                Seu time vestido com profissionalismo
              </h1>

              <p className="font-body text-base md:text-lg text-muted leading-relaxed max-w-2xl">
                Uniformes personalizados para empresas que valorizam presença,
                conforto e consistência de marca. Atendimento próximo, produção
                ágil e acabamento preparado para o dia a dia da sua equipe.
              </p>

              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-accent text-zinc-50 font-body text-base font-bold py-4 px-8 rounded-full cursor-pointer border-none hover:-translate-y-0.5 hover:shadow-lg shadow-accent/30 transition-all md:max-w-sm lg:max-w-xs no-underline"
                >
                  Solicitar Orçamento
                </a>
                <p className="text-center md:text-left font-body text-sm font-medium text-muted">
                  Resposta rápida pelo WhatsApp
                </p>
              </div>
            </div>

            <div className="relative lg:flex-1 flex items-center justify-center mt-10 lg:mt-0 lg:h-120">
              {/* Main Image Container */}
              <div className="relative w-full max-w-md lg:max-w-none h-80 md:h-100 lg:h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/20">
                <img
                  src="/equipe-uniformizada.jpeg"
                  alt="Equipe Uniformizada"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===== 3. Diferenciais ===== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          id="diferenciais"
          className="w-full bg-bg-soft py-16 md:py-20 lg:py-24"
        >
          <div className="mx-auto w-full max-w-281.5 flex flex-col gap-10 md:gap-12 lg:gap-16 px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-2.5 lg:max-w-3/5">
              <p className="font-body text-[13px] md:text-sm font-extrabold text-accent uppercase tracking-wide">
                Por que escolher a NeiUniformes
              </p>
              <h2 className="font-heading text-[30px] md:text-[36px] lg:text-[40px] font-bold text-text leading-[1.1]">
                Uniformes bem feitos, processo simples e atendimento de verdade
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
              {[
                {
                  icon: MessagesSquare,
                  title: 'Atendimento personalizado',
                  desc: 'Orientação próxima para escolher modelos, tecidos, cores e aplicações que fazem sentido para sua operação.',
                },
                {
                  icon: Truck,
                  title: 'Entrega rápida',
                  desc: 'Fluxo de produção organizado para cumprir prazos e manter sua equipe pronta sem complicação.',
                },
                {
                  icon: Package,
                  title: 'Pedidos pequenos aceitos',
                  desc: 'Atendemos empresas em diferentes fases, de equipes compactas a reposições recorrentes.',
                },
                {
                  icon: Tag,
                  title: 'Valores acessíveis',
                  desc: 'Opções equilibradas entre custo, durabilidade e apresentação para a realidade da sua empresa.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3.5 bg-white rounded-md border border-line p-5 md:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-accent-soft rounded-md">
                    <Icon className="w-5 h-5 text-accent-dark" />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-text leading-[1.1]">
                    {title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== 4. Como Funciona ===== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          id="como-funciona"
          className="w-full py-16 md:py-20 lg:py-24"
        >
          <div className="mx-auto w-full max-w-281.5 flex flex-col gap-10 md:gap-12 lg:gap-16 px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-2.5 md:gap-4 lg:max-w-3/5">
              <p className="font-body text-[13px] md:text-sm font-extrabold text-accent uppercase tracking-wide">
                Como funciona
              </p>
              <h2 className="font-heading text-[30px] md:text-[36px] lg:text-[40px] font-bold text-text leading-[1.1]">
                Do primeiro contato à entrega, sem ruído
              </h2>
              <p className="font-body text-[15px] md:text-base text-muted leading-relaxed">
                Um processo objetivo para transformar a identidade da sua
                empresa em uniformes prontos para uso.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-5 gap-4">
              {[
                {
                  step: '01',
                  title: 'Escolha o modelo',
                  desc: 'Selecione camiseta, jaleco, avental, calça ou outra peça adequada para sua rotina.',
                },
                {
                  step: '02',
                  title: 'Personalize com sua marca',
                  desc: 'Ajustamos cores, bordados, silk e detalhes para manter o padrão visual da empresa.',
                },
                {
                  step: '03',
                  title: 'Receba na sua empresa',
                  desc: 'Combinamos a entrega e deixamos sua equipe pronta para representar melhor sua marca.',
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="flex flex-col gap-4 flex-1 bg-white border border-line rounded-md p-6 md:p-7 lg:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-accent leading-[0.9]">
                    {step}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-text leading-[1.1]">
                    {title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== 5. Produtos ===== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          id="produtos"
          className="w-full bg-bg-soft py-16 md:py-20 lg:py-24"
        >
          <div className="mx-auto w-full max-w-281.5 flex flex-col gap-10 md:gap-12 lg:gap-16 px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-3.5 lg:max-w-3/5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-0.75 bg-accent rounded-0.25" />
                <span className="font-body text-[13px] md:text-sm font-bold text-text">
                  Produtos
                </span>
              </div>
              <h2 className="font-heading text-[30px] md:text-[36px] lg:text-[40px] font-bold text-text leading-[1.1]">
                Uniformes corporativos para cada rotina da sua equipe
              </h2>
              <p className="font-body text-[15px] md:text-base text-muted leading-[1.55]">
                Peças profissionais com acabamento limpo e identidade visual
                consistente para empresas que precisam vestir bem todos os dias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
              {[
                {
                  icon: Shirt,
                  num: '01',
                  title: 'Camisetas',
                  desc: 'Malhas para operação, eventos e atendimento com bordado ou silk em acabamento preciso.',
                  tag: 'Uso diário',
                },
                {
                  icon: BadgePlus,
                  num: '02',
                  title: 'Jalecos',
                  desc: 'Modelos para saúde, estética e laboratórios com caimento estruturado e bolsos funcionais.',
                  tag: 'Profissional',
                },
                {
                  icon: Utensils,
                  num: '03',
                  title: 'Aventais',
                  desc: 'Proteção e presença de marca para gastronomia, varejo e áreas de produção.',
                  tag: 'Proteção',
                },
                {
                  icon: PanelBottom,
                  num: '04',
                  title: 'Calças',
                  desc: 'Tecidos resistentes para equipes em movimento, com conforto para turnos longos.',
                  tag: 'Resistência',
                },
              ].map(({ icon: Icon, num, title, desc, tag }) => (
                <div
                  key={num}
                  className="flex flex-col gap-5 bg-white border border-line rounded-md p-5.5 md:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-11 h-11 bg-accent-soft rounded-md">
                      <Icon className="w-5.5 h-5.5 text-accent-dark" />
                    </div>
                    <span className="font-body text-sm font-bold text-accent-dark">
                      {num}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-text">
                      {title}
                    </h3>
                    <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                      {desc}
                    </p>
                  </div>
                  <div className="bg-accent-soft rounded-full px-3 py-1 w-fit">
                    <span className="font-body text-xs font-bold text-accent-dark">
                      {tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      {/* ===== 6. Localização da Fábrica ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        id="localizacao"
        className="w-full bg-white py-16 md:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-281.5 flex flex-col gap-10 md:gap-12 lg:gap-16 px-6 md:px-8 lg:px-12">
          <div className="flex flex-col gap-2.5 md:gap-4 lg:max-w-3/5">
            <p className="font-body text-[13px] md:text-sm font-extrabold text-accent uppercase tracking-wide">
              Nossa Estrutura
            </p>
            <h2 className="font-heading text-[30px] md:text-[36px] lg:text-[40px] font-bold text-text leading-[1.1]">
              Venha conhecer nossa fábrica
            </h2>
            <p className="font-body text-[15px] md:text-base text-muted leading-relaxed">
              Nossa produção é feita com equipamentos modernos e uma equipe
              especializada para garantir o melhor acabamento em cada peça.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Informações */}
            <div className="flex flex-col gap-5 lg:w-1/3">
              <div className="flex flex-col gap-3 p-6 bg-bg-soft border border-line rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent-soft rounded-md shrink-0">
                    <MapPin className="w-5 h-5 text-accent-dark" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text">
                    Endereço
                  </h3>
                </div>
                <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                  Av. Edilsinho Capuano, 60 - Res. Capuano
                  <br />
                  Birigui - SP, 16204-100
                </p>
                <a
                  href="https://www.google.com/maps/place/Av.+Edilsinho+Capuano,+60+-+Res.+Capuano,+Birigui+-+SP,+16204-100/@-21.3036396,-50.3581904,19.06z/data=!4m6!3m5!1s0x94966b305dc31333:0x61a7b209aea9f9cc!8m2!3d-21.3036133!4d-50.3571725!16s%2Fg%2F11y6nsgck6?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-bold text-accent hover:text-accent-dark transition-colors w-fit mt-2"
                >
                  Ver no mapa &rarr;
                </a>
              </div>
            </div>

            {/* Mapa react-map-gl */}
            <div className="relative flex-1 min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden border border-line shadow-sm bg-bg-soft z-0">
              <MapGL
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN || "SUA_CHAVE_DO_MAPBOX_AQUI"}
                initialViewState={{
                  longitude: -50.3571725,
                  latitude: -21.3036133,
                  zoom: 16.5,
                  pitch: 45
                }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
              >
                <Marker longitude={-50.3571725} latitude={-21.3036133} color="#ef4444" anchor="bottom" />
                <NavigationControl position="bottom-right" />
                <FullscreenControl position="top-right" />
              </MapGL>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== 7. CTA ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full bg-accent py-16 md:py-20 lg:py-24"
      >
        <div className="flex flex-col items-center gap-6 md:gap-8 mx-auto max-w-281.5 px-6 md:px-8 lg:px-12">
          <div className="flex flex-col gap-3 text-center max-w-2xl">
            <h2 className="font-heading text-[34px] md:text-[40px] lg:text-[48px] font-bold text-text leading-[1.1]">
              Pronto para uniformizar sua equipe?
            </h2>
            <p className="font-body text-base md:text-lg text-text leading-relaxed">
              Conte o que sua empresa precisa e receba um atendimento direto
              para montar o melhor orçamento.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full md:w-fit bg-text text-bg font-body text-base font-extrabold py-4 md:py-5 px-8 rounded-full cursor-pointer border-none hover:-translate-y-0.5 hover:shadow-lg shadow-text/30 hover:bg-text/90 transition-all no-underline"
          >
            <MessageCircle className="w-4.5 md:w-5 h-4.5 md:h-5" />
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </motion.section>

      {/* ===== 8. Footer ===== */}
      <footer className="w-full bg-text text-white pt-12 md:pt-14 lg:pt-16 pb-8 md:pb-10">
        <div className="flex flex-col gap-9 lg:gap-12 mx-auto max-w-281.5 px-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-9 lg:gap-16">
            <div className="flex flex-col gap-4 lg:max-w-sm">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-sm overflow-hidden">
                  <img
                    src="/logo.svg"
                    alt="NeiUniformes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-heading text-lg md:text-xl font-extrabold text-bg">
                  NeiUniformes
                </span>
              </div>
              <p className="font-body text-sm md:text-[15px] text-footer-text leading-relaxed">
                Uniformes corporativos personalizados para empresas que querem
                vestir suas equipes com presença, conforto e confiança.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 pt-5 md:pt-6 border-t border-footer-border">
            <span className="font-body text-[13px] md:text-sm text-footer-dim">
              © 2026 NeiUniformes. Todos os direitos reservados.
            </span>
            <span className="font-body text-[13px] md:text-sm text-footer-dim">
              Privacidade e termos
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
