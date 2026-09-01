'use client'

import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react'
import { AlertTriangle, ArrowRight, AtSign, Baby, ChevronDown, Clock, DoorClosed, HandHeart, HeartPulse, MapPin, Menu, MessageCircle, Phone, RefreshCcw, Scale, Star, Users, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence, useSpring } from 'framer-motion'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const WHATSAPP_URL = 'https://wa.me/558791001553'
const ABOUT_IMAGES = [
  '/WhatsApp%20Image%202026-09-01%20at%2008.41.50.jpeg',
  '/WhatsApp%20Image%202026-09-01%20at%2008.41.50%20%281%29.jpeg',
  '/WhatsApp%20Image%202026-09-01%20at%2008.41.50%20%282%29.jpeg',
  '/673692008_18582132142060681_4076801890789878809_n.jpg',
]
const HERO_VIDEO = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-NLpEztsOmscBHvyb5EhmHw8XDs5xXj.mp4'

const services = [
  ['Aposentadorias', 'Atuação especializada em aposentadoria do agricultor, aposentadoria por tempo de contribuição e aposentadoria por incapacidade permanente (invalidez), com orientação e acompanhamento junto ao INSS e à Justiça Federal.', Clock],
  ['Auxílio-Doença', 'Requerimento e defesa do auxílio por incapacidade temporária, para segurados impossibilitados de trabalhar, com atuação junto ao INSS e à Justiça Federal.', HeartPulse],
  ['Benefícios Assistenciais (BPC-LOAS)', 'Concessão do BPC/LOAS para idosas e pessoas com deficiência, com análise dos requisitos, organização da documentação e atuação no INSS e na Justiça Federal.', HandHeart],
  ['Pensão por Morte', 'Orientação e requerimento de pensão por morte para dependentes (cônjuge, companheiro(a) e filhos) de segurado falecido, incluindo urbano e rural, com recursos administrativos e ação judicial contra negativas do INSS.', Users],
  ['Salário-Maternidade', 'Requerimento de salário-maternidade para trabalhadoras rurais, empregadas, avulsas e contribuintes individuais, com orientação sobre carência e contribuições necessárias.', Baby],
  ['Auxílio-Reclusão', 'Requerimento de auxílio-reclusão para dependentes de segurados presos em regime fechado ou semiaberto, junto ao INSS e na Justiça Federal.', DoorClosed],
  ['Auxílio-Acidente', 'Requerimento de benefício indenizatório devido ao segurado que sofreu acidente e ficou com sequela que reduza a capacidade de trabalho, junto ao INSS e na Justiça Federal.', AlertTriangle],
  ['Revisões de Benefícios', 'Análise e ação judicial para revisão de benefícios previdenciários concedidos com valor do benefício incorreto (renda mensal inicial), buscando o recálculo e a recuperação dos valores pagos a menor desde a concessão.', RefreshCcw],
  ['Ações contra o INSS', 'Representação técnica na Justiça Federal, Estadual e nos Juizados Especiais Federais, em todo o território nacional, para defender os direitos previdenciários dos segurados.', Scale],
] as const

const faqs = [
  ['Como saber se tenho direito a um benefício do INSS?', 'O direito a um benefício depende da situação de cada segurado, como idade, tempo de contribuição, atividade exercida, incapacidade e histórico previdenciário. Fazemos uma análise individualizada para identificar os benefícios que podem ser devidos e o melhor caminho para requerê-los.'],
  ['Quais são os requisitos para me aposentar?', 'Os requisitos variam conforme o tipo de aposentadoria e o histórico de cada pessoa. Analisamos idade, tempo de contribuição, períodos rurais e urbanos, atividade especial, contribuições e regras de transição para verificar qual possibilidade se aplica ao seu caso.'],
  ['Quem tem direito à aposentadoria rural?', 'O trabalhador rural pode ter direito à aposentadoria mediante o cumprimento dos requisitos de idade e comprovação da atividade rural. Para o segurado especial, como o agricultor familiar, a regra geral exige 55 anos para mulheres e 60 anos para homens, além de 180 meses de atividade rural. Cada caso deve ser analisado de acordo com a documentação e o histórico de trabalho.'],
  ['Tenho direito a algum benefício por incapacidade?', 'Quem está temporariamente ou permanentemente incapacitado para o trabalho pode ter direito a benefício por incapacidade, desde que preenchidos os demais requisitos previdenciários. Analisamos a situação, a documentação médica e o histórico contributivo para orientar sobre o benefício adequado e sua solicitação.'],
  ['O que fazer quando o INSS nega meu benefício?', 'Uma negativa do INSS não significa necessariamente que você não tenha direito ao benefício. É importante analisar o motivo do indeferimento, os documentos apresentados e o histórico previdenciário para verificar a possibilidade de recurso administrativo ou de buscar o reconhecimento do direito na Justiça Federal.'],
  ['Quem tem direito ao BPC/LOAS?', 'O BPC pode ser devido à pessoa com 65 anos ou mais ou à pessoa com deficiência que preencha os requisitos socioeconômicos previstos em lei. Não é necessário ter contribuído para o INSS, pois se trata de um benefício assistencial. A análise considera, entre outros aspectos, a renda e a situação do grupo familiar.'],
  ['Como saber se o valor do meu benefício está correto?', 'O valor do benefício depende do histórico previdenciário e das regras aplicáveis à sua concessão. Podemos analisar o processo, os períodos reconhecidos, os salários de contribuição e o cálculo realizado pelo INSS para verificar se o benefício foi concedido corretamente e se existe possibilidade de revisão.'],
  ['Quais documentos preciso para solicitar um benefício?', 'Os documentos variam conforme o benefício e a situação de cada segurado. Em geral, podem ser necessários documentos pessoais, carteira de trabalho, comprovantes de contribuição, documentos que comprovem atividade rural ou especial e, nos benefícios por incapacidade, documentação médica. Orientamos sobre os documentos necessários para cada caso antes do requerimento.'],
]

const testimonialsData = [
  ['Linda Morrison', 'A comunicação foi sempre ágil e profissional. Eu sabia que poderia entrar em contato sempre que tivesse dúvidas.'],
  ['James Mitchell', 'Nosso planejamento foi conduzido com precisão e cuidado. Finalmente temos tranquilidade sabendo que tudo está em ordem.'],
  ['Margaret Williams', 'Cada etapa foi explicada com clareza e nunca me senti apressada. Um atendimento excepcional do início ao fim.'],
  ['Carlos Sampaio', 'Dr. Braytner me ajudou a conseguir minha aposentadoria. Muito atencioso e explicou tudo com muita clareza.'],
  ['Maria Aparecida', 'Minha pensão por morte havia sido negada, mas a equipe conseguiu reverter a situação no juizado. Serei eternamente grata!'],
  ['João Vítor', 'Excelente profissional! Me orientou sobre o auxílio-doença em um momento delicado da minha vida. Recomendadíssimo.'],
]

interface ButtonProps {
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
  target?: string
}

function Button({ children, href = WHATSAPP_URL, className = '', onClick, target = '_blank' }: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel="noreferrer"
      onClick={onClick}
      className={`button ${className}`}
    >
      <span className="btn-shine" />
      <span className="btn-content">{children}</span>
    </a>
  )
}

function Stars() {
  return <span className="stars" aria-label="5 de 5 estrelas">{[1, 2, 3, 4, 5].map((n) => <Star key={n} size={14} fill="currentColor" />)}</span>
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
    </svg>
  )
}

/* ── 3D Card Interativo com Framer Motion ────────────────────────── */
interface TiltCardProps {
  title: string
  text: string
  Icon: React.ElementType
}

function TiltCard({ title, text, Icon }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })

  const rotateX = useSpring(0, { stiffness: 260, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 260, damping: 20 })
  const scale = useSpring(1, { stiffness: 260, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Center coordinates: -0.5 to +0.5
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    // Incline tilt: max 12deg
    rotateX.set(-yPct * 16)
    rotateY.set(xPct * 16)

    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.15,
    })
  }

  const handleMouseEnter = () => {
    scale.set(1.03)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    scale.set(1)
    setGlarePos((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div style={{ perspective: 1000, height: '100%' }}>
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
        className="service service-square relative overflow-hidden"
      >
        {/* Specular 3D Glare Light */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[16px]"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 240px at ${glarePos.x}% ${glarePos.y}%, rgba(99,211,228,0.28), transparent 70%)`,
          }}
        />

        <div style={{ transform: 'translateZ(24px)', display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
          <Icon size={29} />
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ marginTop: 'auto' }}>
            Saiba mais →
          </a>
        </div>
      </motion.article>
    </div>
  )
}

/* ── Animação de surgimento com framer-motion v11 ──────────────────── */
interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}

function FadeIn({ children, delay = 0, className = '', style, direction = 'up' }: FadeInProps) {
  const getVariants = () => {
    switch (direction) {
      case 'up': return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
      case 'down': return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } }
      case 'left': return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }
      case 'right': return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }
      case 'scale': return { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }
      default: return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      variants={getVariants()}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export default function AdvorumSite() {
  const [menu, setMenu] = useState(false)
  const [open, setOpen] = useState<number | null>(null)
  const [aboutImageIndex, setAboutImageIndex] = useState(2)
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [
      AutoScroll({
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        speed: 1.5,
      }),
    ]
  )

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const imageTimer = window.setInterval(() => {
      setAboutImageIndex((current) => (current + 1) % ABOUT_IMAGES.length)
    }, 5000)
    return () => window.clearInterval(imageTimer)
  }, [])

  return <main>
    {/* ── Nav ────────────────────────────────────────────────────────── */}
    <motion.nav
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="nav-inner">
        <a href="#top" className="logo"><span>Braytner Oliveira</span><br /><small>Advocacia Previdenciária</small></a>
        <div className="nav-links">
          <a href="#about">Sobre mim</a>
          <a href="#services">Áreas de Atuação</a>
          <a href="#testimonials">Depoimentos</a>
          <a href="#faq">Dúvidas</a>
          <Button>Entre em contato</Button>
        </div>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Abrir menu">
          {menu ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#about" onClick={() => setMenu(false)}>Sobre mim</a>
            <a href="#services" onClick={() => setMenu(false)}>Áreas de Atuação</a>
            <a href="#faq" onClick={() => setMenu(false)}>Dúvidas</a>
            <Button>Entre em contato</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>

    {/* ── Hero ───────────────────────────────────────────────────────── */}
    <section id="top" className="hero">
      <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <FadeIn className="hero-content" delay={0.2}>
        <p className="eyebrow">ADVOCACIA ESPECIALIZADA</p>
        <h1>Direito Previdenciário</h1>
        <p className="lead">Atuação especializada na defesa dos direitos e benefícios previdenciários, com conhecimento técnico, estratégia e atendimento humanizado.</p>
        <div className="actions">
          <Button>Fale com um especialista <ArrowRight size={16} /></Button>
          <a className="phone" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Phone size={17} /> +55 87 9100-1553</a>
        </div>
      </FadeIn>

      <FadeIn className="review" delay={0.5}>
        <Stars /> <span>4,9 · Mais de 120 avaliações</span>
      </FadeIn>
    </section>

    {/* ── Serviços (Grid 3×3) ──────────────────────────────────────── */}
    <section id="services" className="services">
      <FadeIn>
        <header>
          <p className="eyebrow">ÁREAS DE ATUAÇÃO</p>
          <h2>Benefícios Previdenciários</h2>
          <p className="section-description">Atuação especializada na orientação, requerimento e defesa dos direitos dos segurados perante o INSS e o Poder Judiciário.</p>
        </header>
      </FadeIn>
      <div className="service-grid">
        {services.map(([title, text, Icon], i) => (
          <FadeIn key={title} delay={0.08 * (i % 3)}>
            <TiltCard title={title} text={text} Icon={Icon} />
          </FadeIn>
        ))}
      </div>
    </section>

    {/* ── Estatísticas ───────────────────────────────────────────────── */}
    <section className="stats">
      {[
        ['09+', 'frentes de atuação previdenciária', 'Aposentadorias, BPC-LOAS, pensões, revisões e muito mais'],
        ['PE + Brasil', 'atendimento presencial e online', 'Orientação próxima para você, esteja onde estiver'],
        ['Sob medida', 'estratégia para cada caso', 'Análise individual, linguagem clara e acompanhamento jurídico'],
      ].map(([number, title, sub], i) => (
        <FadeIn key={number} delay={0.15 * i}>
          <article className="stat">
            <strong>{number}</strong>
            <h3>{title}</h3>
            <p>{sub}</p>
          </article>
        </FadeIn>
      ))}
    </section>

    {/* ── Split (imagem + texto) ─────────────────────────────────────── */}
    <section className="split">
      <FadeIn direction="left" className="split-image">
        <div className="split-photo-stage">
          {ABOUT_IMAGES.map((image, index) => (
            <motion.div
              key={image}
              className="split-photo-frame"
              animate={{ x: '-50%', y: '-50%', opacity: index === aboutImageIndex ? 1 : 0, scale: index === aboutImageIndex ? 1.03 : 1.08 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              style={{ width: '96%', height: '100%' }}
            >
              <img className={`split-photo ${index === 2 ? 'split-photo-landscape' : ''}`} src={image} alt="Dr. Braytner Oliveira em seu escritório" />
            </motion.div>
          ))}
        </div>
        <span className="sr-only">Advogado em atendimento no escritório</span>
      </FadeIn>
      <FadeIn direction="right" className="split-copy" delay={0.15}>
        <p className="eyebrow">QUEM SOMOS?</p>
        <h2><span className="about-title-kicker">UMA ADVOCACIA QUE</span><br />TRANSFORMA CONHECIMENTO EM RESULTADOS</h2>
        <p>O escritório Braytner Oliveira Advocacia Previdenciária nasceu do compromisso de oferecer uma atuação jurídica de excelência, pautada no conhecimento técnico, na ética e, acima de tudo, na valorização de cada história que nos é confiada.</p>
        <p>À frente do escritório está seu sócio fundador, advogado especializado em Direito Previdenciário, com uma trajetória de mais de 8 anos de advocacia construída sobre constante aperfeiçoamento profissional e dedicação à defesa dos direitos de seus clientes.</p>
        <p>Pós-Graduado em Direito Previdenciário e também em Direito Penal e Processual Penal, exerce atualmente a função de Presidente da Comissão de Direito Previdenciário da OAB Subseção Pesqueira/PE, tendo atuado anteriormente como Vice-Presidente da Comissão de Direito Eleitoral da mesma Subseção.</p>
        <p>Mais do que títulos e qualificações, acreditamos que a advocacia exige proximidade, responsabilidade e sensibilidade para compreender as necessidades de cada pessoa.</p>
      </FadeIn>
    </section>

    {/* ── Por que trabalhar comigo ────────────────────────────────────── */}
    <section id="about" className="about">
      <FadeIn direction="left">
        <div>
          <p className="eyebrow">POR QUE TRABALHAR COM NOSSO ESCRITÓRIO</p>
          <h2>Planejamos o melhor caminho para a sua aposentadoria ou seu benefício previdenciário.</h2>
          <div className="actions">
            <Button>Fale com um especialista</Button>
            <a className="phone" href={WHATSAPP_URL} target="_blank" rel="noreferrer">ou ligue +55 87 9100-1553</a>
          </div>
        </div>
      </FadeIn>
      <FadeIn direction="right" delay={0.2} className="copy">
        <p className="about-intro">Seu futuro merece um planejamento feito para você.</p>
        <p>Analisamos sua história de trabalho, contribuição e necessidade para identificar seus direitos e as melhores possibilidades do seu benefício.</p>
        <p>Oferecemos orientação personalizada e atuação no INSS e na Justiça Federal, sempre buscando a melhor solução para cada caso.</p>
      </FadeIn>
    </section>

    {/* ── Depoimentos ────────────────────────────────────────────────── */}
    <section id="testimonials" className="testimonials">
      <FadeIn>
        <header>
          <p className="eyebrow">Depoimentos</p>
          <h2>O que nossos clientes dizem</h2>
        </header>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <div
          className="embla"
          ref={emblaRef}
          style={{ marginTop: '58px' }}
        >
          <div className="embla__container">
            {testimonialsData.map(([name, quote], i) => (
              <div className="embla__slide" key={name + i}>
                <article className="testimonial" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Stars />
                  <p>&quot;{quote}&quot;</p>
                  <div className="person" style={{ marginTop: 'auto' }}>
                    <div className="avatar">{name.split(' ').map((n) => n[0]).join('')}</div>
                    <div><b>{name}</b><small>Cliente de advocacia previdenciária</small></div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>

    {/* ── Citação ────────────────────────────────────────────────────── */}
    <FadeIn>
      <section className="quote">
        <header className="quote-heading">
          <p className="eyebrow">POR TRÁS DO NOSSO TRABALHO</p>
          <h2>Conheça nosso escritório e quem está ao seu lado</h2>
        </header>
        <div className="quote-image-space" aria-label="Espaços reservados para imagens">
          <div><img src="/Atendimento1.jpeg" alt="Atendimento jurídico no escritório" /></div>
          <div><img src="/Atendimento2.jpeg" alt="Atendimento jurídico personalizado" /></div>
        </div>
      </section>
    </FadeIn>

    {/* ── FAQ ────────────────────────────────────────────────────────── */}
    <section id="faq" className="faq">
      <FadeIn>
        <div>
          <p className="eyebrow">DÚVIDAS FREQUENTES</p>
          <h2>Tem dúvidas? Encontre as respostas.</h2>
          <p className="muted">Estas são algumas das perguntas mais comuns que recebemos. Se não encontrar o que procura, entre em contato conosco.</p>
          <Button className="faq-help-button whatsapp">
            <MessageCircle size={17} /> Tirar dúvida no WhatsApp
          </Button>
          <p className="faq-attendance">Atendimento presencial em Alagoinha/PE e on-line em todo o Brasil.</p>
        </div>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div>
          {faqs.map(([question, answer], index) => (
            <div className="faq-item" key={question}>
              <button onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}>
                {question}
                <ChevronDown size={18} className={open === index ? 'rotate' : ''} />
              </button>
              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ paddingTop: '10px' }}>{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>

    {/* ── Localização ────────────────────────────────────────────────── */}
    <section id="location" className="location">
      <FadeIn direction="left" className="location-copy">
        <p className="eyebrow">LOCALIZAÇÃO</p>
        <h2>Venha nos visitar ou fale conosco pelo WhatsApp</h2>
        <p className="muted">Atendemos presencialmente em Alagoinha/PE e, de forma on-line, clientes em todo o Brasil.</p>
        <div className="contact-list">
          <a href="https://maps.google.com/?q=Travessa+Austriclinio+Galindo,+20,+Alagoinha,+PE" target="_blank" rel="noreferrer">
            <MapPin size={22} />
            <span><b>Travessa Austriclínio Galindo, n. 20</b><small>Alagoinha - PE · CEP 55260-000 · Brasil</small><em>Próximo aos Correios e ao Conselho Tutelar</em></span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={22} />
            <span><b>+55 87 9100-1553</b><small>Disponível durante o horário comercial</small></span>
          </a>
          <a href="https://instagram.com/braytnercesar.adv" target="_blank" rel="noreferrer">
            <AtSign size={22} />
            <span><b>@braytnercesar.adv</b><small>Siga para conteúdo jurídico diário</small></span>
          </a>
          <div>
            <Clock size={22} />
            <span><b>Seg a Sex, 08:00 às 18:00</b><small className="closed">Sáb e Dom, Fechado</small></span>
          </div>
        </div>
        <div className="actions">
          <Button href={WHATSAPP_URL} className="whatsapp">
            <MessageCircle size={18} /> Falar pelo WhatsApp
          </Button>
          <Button href="https://maps.google.com/?q=Alagoinha,PE,Brasil" className="maps">
            <MapPin size={18} /> Ver no Google Maps
          </Button>
        </div>
      </FadeIn>
      <FadeIn direction="right" delay={0.2} className="map-wrap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544!2d-36.7731!3d-8.4779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7061e1234567890%3A0xabcdef1234567890!2sAlagoinha%2C%20PE%2C%2055260-000!5e0!3m2!1spt-BR!2sbr!4v1698765432100!5m2!1spt-BR!2sbr" title="Localização, Braytner Oliveira Advocacia" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </FadeIn>
    </section>

    {/* ── CTA final ──────────────────────────────────────────────────── */}
    <section id="contact" className="cta">
      <FadeIn direction="scale" className="cta-content">
        <p className="eyebrow">Comece agora</p>
        <h2>Seus direitos. Nosso compromisso.</h2>
        <p>Conte com orientação especializada<br />para buscar o benefício previdenciário adequado ao seu caso.</p>
        <Button>Agendar atendimento <ArrowRight size={17} /></Button>
      </FadeIn>
    </section>

    {/* ── Footer ─────────────────────────────────────────────────────── */}
    <footer>
      <FadeIn className="footer-grid">
        <div>
          <a className="logo" href="#top"><span>Braytner Oliveira</span><br /><small>Advocacia Previdenciária</small></a>
          <p className="muted">Seu direito previdenciário, tratado com atenção, estratégia e experiência.</p>
          <div className="social-links" aria-label="Redes sociais e contato">
            <a className="social-link social-link-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar com Braytner Oliveira pelo WhatsApp" title="WhatsApp">
              <MessageCircle size={19} aria-hidden="true" />
            </a>
            <a className="social-link social-link-instagram" href="https://instagram.com/braytnercesar.adv" target="_blank" rel="noreferrer" aria-label="Acessar o Instagram de Braytner Oliveira" title="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div>
          <b>Explore</b>
          <a href="#about">Sobre nós</a>
          <a href="#services">Benefícios</a>
          <a href="#faq">Dúvidas</a>
          <a href="#contact">Contato</a>
        </div>
        <div>
          <b>Contato</b>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">+55 87 9100-1553</a>
          <a href="mailto:braytneroliveira@hotmail.com">braytneroliveira@hotmail.com</a>
          <span>Trav. Austriclínio Galindo, n. 20<br />Alagoinha, PE · CEP 55260-000<br />Seg a Sex, 08h às 18h · Sáb e Dom, Fechado</span>
        </div>
        <div>
          <b>Rede Social</b>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://instagram.com/braytnercesar.adv" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div>
          <b>Atendimento</b>
          <span>Presencial: Alagoinha/PE</span>
          <span>On-line: todo o Brasil</span>
        </div>
      </FadeIn>
      <FadeIn className="copyright" delay={0.2}>
        <span>© 2026  Dr. Braytner Oliveira · Todos os direitos reservados.</span>
      </FadeIn>
    </footer>
  </main>
}
