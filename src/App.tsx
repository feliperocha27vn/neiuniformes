import {
  BadgePlus,
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

function App() {
  return (
    <div className="mx-auto w-full max-w-[1126px]">
      {/* ===== 1. Header ===== */}
      <header className="flex items-center justify-between px-5 md:px-8 lg:px-12 h-[60px] md:h-[72px] lg:h-[80px] bg-white/95 border-b border-line sticky top-0 z-50 backdrop-blur-sm">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-sm overflow-hidden">
            <img
              src="/logo.svg"
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
          {['Diferenciais', 'Como funciona', 'Produtos', 'Depoimentos'].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-body text-sm font-medium text-muted hover:text-text transition-colors no-underline"
              >
                {link}
              </a>
            ),
          )}
          <button
            type="button"
            className="bg-accent text-text font-body text-sm font-bold py-2.5 px-5 rounded-sm cursor-pointer border-none hover:bg-accent-dark transition-colors"
          >
            Solicitar Orçamento
          </button>
        </nav>
      </header>

      {/* ===== 2. Hero ===== */}
      <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 xl:gap-20 px-6 md:px-8 lg:px-12 pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24">
        <div className="flex flex-col gap-6 lg:flex-1">
          <div className="flex items-center gap-2 bg-accent-soft border border-accent rounded-sm px-3 py-2 w-fit">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-body text-[13px] md:text-sm font-bold text-text">
              Uniformes corporativos sob medida
            </span>
          </div>

          <h1 className="font-heading text-[44px] md:text-[56px] lg:text-[64px] font-bold text-text leading-[1.1] tracking-tight">
            Seu time vestido com profissionalismo
          </h1>

          <p className="font-body text-base md:text-lg text-muted leading-relaxed lg:max-w-[90%]">
            Uniformes personalizados para empresas que valorizam presença,
            conforto e consistência de marca. Atendimento próximo, produção ágil
            e acabamento preparado para o dia a dia da sua equipe.
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-accent text-text font-body text-[15px] font-bold py-4 px-6 rounded-sm cursor-pointer border-none hover:bg-accent-dark transition-colors md:max-w-sm lg:max-w-xs"
            >
              Solicitar Orçamento
            </button>
            <p className="text-center md:text-left font-body text-sm font-medium text-muted">
              Resposta rápida pelo WhatsApp
            </p>
          </div>
        </div>

        <div className="relative rounded-md overflow-hidden border border-line lg:flex-1 lg:h-[420px]">
          <div className="bg-[#f0f0f0] h-[220px] md:h-[280px] lg:h-full flex items-end p-4 md:p-6">
            <div className="flex-1" />
          </div>
          <div className="bg-white/95 p-3.5 md:p-4 flex flex-col gap-1 border-t border-line lg:hidden">
            <p className="font-heading text-[13px] md:text-sm font-bold text-text">
              Imagem: equipe uniformizada
            </p>
            <p className="font-body text-xs md:text-sm text-muted">
              Foto de colaboradores com uniformes corporativos personalizados.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 3. Diferenciais ===== */}
      <section
        id="diferenciais"
        className="flex flex-col gap-10 md:gap-12 lg:gap-16 px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-bg-soft"
      >
        <div className="flex flex-col gap-2.5 lg:max-w-[60%]">
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
              className="flex flex-col gap-3.5 bg-white rounded-md border border-line p-5 md:p-6"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-sm">
                <Icon className="w-5 h-5 text-text" />
              </div>
              <h3 className="font-heading text-xl md:text-[22px] font-bold text-text leading-[1.1]">
                {title}
              </h3>
              <p className="font-body text-sm md:text-[15px] text-muted leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 4. Como Funciona ===== */}
      <section
        id="como-funciona"
        className="flex flex-col gap-10 md:gap-12 lg:gap-16 px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24"
      >
        <div className="flex flex-col gap-2.5 md:gap-4 lg:max-w-[60%]">
          <p className="font-body text-[13px] md:text-sm font-extrabold text-accent uppercase tracking-wide">
            Como funciona
          </p>
          <h2 className="font-heading text-[30px] md:text-[36px] lg:text-[40px] font-bold text-text leading-[1.1]">
            Do primeiro contato à entrega, sem ruído
          </h2>
          <p className="font-body text-[15px] md:text-base text-muted leading-relaxed">
            Um processo objetivo para transformar a identidade da sua empresa em
            uniformes prontos para uso.
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
              className="flex flex-col gap-4 flex-1 bg-white border border-line rounded-md p-6 md:p-7 lg:p-8"
            >
              <span className="font-heading text-5xl md:text-[56px] lg:text-[64px] font-extrabold text-accent leading-[0.9]">
                {step}
              </span>
              <h3 className="font-heading text-[22px] md:text-xl lg:text-2xl font-bold text-text leading-[1.1]">
                {title}
              </h3>
              <p className="font-body text-sm md:text-[15px] text-muted leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 5. Produtos ===== */}
      <section
        id="produtos"
        className="flex flex-col gap-10 md:gap-12 lg:gap-16 px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-bg-soft"
      >
        <div className="flex flex-col gap-3.5 lg:max-w-[60%]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-[3px] bg-accent rounded-[1px]" />
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
              className="flex flex-col gap-5 bg-white border border-line rounded-md p-[22px] md:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center w-11 h-11 bg-[#fff7d6] rounded-sm">
                  <Icon className="w-[22px] h-[22px] text-text" />
                </div>
                <span className="font-body text-[13px] font-bold text-accent">
                  {num}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-xl md:text-[22px] font-bold text-text">
                  {title}
                </h3>
                <p className="font-body text-sm md:text-[15px] text-muted leading-relaxed">
                  {desc}
                </p>
              </div>
              <div className="bg-[#fff4c4] rounded-full px-3 py-1.5 w-fit">
                <span className="font-body text-xs font-bold text-text">
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 6. Depoimentos ===== */}
      <section
        id="depoimentos"
        className="flex flex-col gap-10 md:gap-12 lg:gap-16 px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24"
      >
        <div className="flex flex-col gap-3.5 lg:max-w-[60%]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-[3px] bg-accent rounded-[1px]" />
            <span className="font-body text-[13px] md:text-sm font-bold text-text">
              Depoimentos
            </span>
          </div>
          <h2 className="font-heading text-[30px] md:text-[36px] lg:text-[40px] font-bold text-text leading-[1.1]">
            Empresas que confiam na NeiUniformes
          </h2>
          <p className="font-body text-[15px] md:text-base text-muted leading-[1.55]">
            Atendimento próximo, produção cuidadosa e entregas pensadas para
            manter equipes uniformizadas sem complicação.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-5 gap-4">
          {[
            {
              quote:
                'Os jalecos chegaram com acabamento impecável e padronização perfeita. A equipe percebeu a diferença no primeiro uso.',
              name: 'Clínica Aurora',
              role: 'Diretora de Operações',
              avatar: 'CA',
            },
            {
              quote:
                'Os aventais reforçaram a identidade do salão e aguentam bem a rotina. O processo foi claro do orçamento à entrega.',
              name: 'Bistrô Norte',
              role: 'Chef Proprietário',
              avatar: 'BN',
            },
            {
              quote:
                'Padronizamos camisetas e calças para vários setores. A modelagem ficou confortável e a comunicação foi ágil.',
              name: 'Grupo Vitta',
              role: 'Gerente de RH',
              avatar: 'GV',
            },
          ].map(({ quote, name, role, avatar }) => (
            <div
              key={name}
              className="flex flex-col gap-5 flex-1 bg-white border border-line rounded-md p-6 md:p-7 lg:p-8"
            >
              <span className="font-heading text-[40px] md:text-[48px] font-bold text-accent leading-[0.8] select-none">
                &ldquo;
              </span>
              <p className="font-body text-[15px] md:text-base text-text leading-[1.5]">
                {quote}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent shrink-0">
                  <span className="font-body text-sm font-bold text-text">
                    {avatar}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-body text-sm md:text-[15px] font-bold text-text">
                    {name}
                  </span>
                  <span className="font-body text-[13px] md:text-sm text-muted">
                    {role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 7. CTA Final ===== */}
      <section className="w-full bg-accent py-16 md:py-20 lg:py-24">
        <div className="flex flex-col items-center gap-6 md:gap-8 mx-auto max-w-[1126px] px-6 md:px-8 lg:px-12">
          <div className="flex flex-col gap-3 text-center max-w-2xl">
            <h2 className="font-heading text-[34px] md:text-[40px] lg:text-[48px] font-bold text-text leading-[1.1]">
              Pronto para uniformizar sua equipe?
            </h2>
            <p className="font-body text-base md:text-lg text-text leading-relaxed">
              Conte o que sua empresa precisa e receba um atendimento direto
              para montar o melhor orçamento.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2.5 w-full md:w-fit bg-text text-bg font-body text-[15px] md:text-base font-extrabold py-4 md:py-5 px-6 md:px-8 rounded-sm cursor-pointer border-none hover:bg-text/90 transition-colors"
          >
            <MessageCircle className="w-[18px] md:w-5 h-[18px] md:h-5" />
            Fale conosco pelo WhatsApp
          </button>
        </div>
      </section>

      {/* ===== 8. Footer ===== */}
      <footer className="w-full bg-text text-white pt-12 md:pt-14 lg:pt-16 pb-8 md:pb-10">
        <div className="flex flex-col gap-9 lg:gap-12 mx-auto max-w-[1126px] px-6 md:px-8 lg:px-12">
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

            <div className="flex gap-12 md:gap-16 lg:gap-20">
              <div className="flex flex-col gap-3">
                <span className="font-heading text-base font-bold text-bg">
                  Links
                </span>
                <span className="font-body text-sm md:text-[15px] text-footer-text cursor-pointer hover:text-bg transition-colors">
                  Diferenciais
                </span>
                <span className="font-body text-sm md:text-[15px] text-footer-text cursor-pointer hover:text-bg transition-colors">
                  Como funciona
                </span>
                <span className="font-body text-sm md:text-[15px] text-footer-text cursor-pointer hover:text-bg transition-colors">
                  Produtos
                </span>
                <span className="font-body text-sm md:text-[15px] text-footer-text cursor-pointer hover:text-bg transition-colors">
                  Depoimentos
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-heading text-base font-bold text-bg">
                  Contato
                </span>
                <span className="font-body text-[13px] md:text-sm text-footer-text">
                  WhatsApp: (00) 00000-0000
                </span>
                <span className="font-body text-[13px] md:text-sm text-footer-text">
                  contato@neiuniformes.com.br
                </span>
                <span className="font-body text-[13px] md:text-sm text-footer-text">
                  Atendimento para empresas
                </span>
              </div>
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
    </div>
  );
}

export default App;
