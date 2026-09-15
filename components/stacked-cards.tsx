'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  AlertTriangle,
  Baby,
  Clock,
  DoorClosed,
  HandHeart,
  HeartPulse,
  Plus,
  RefreshCcw,
  Scale,
  Users,
} from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/558791001553'

const services = [
  ['Aposentadorias', 'Planejamento e requerimento de todas as modalidades: por tempo de contribuição, por idade, especial e por incapacidade permanente junto ao INSS.', Clock],
  ['Auxílio Doença', 'Defesa e requerimento de auxílio por incapacidade temporária para segurados impedidos de trabalhar por motivo de saúde.', HeartPulse],
  ['Benefícios Assistenciais (BPC-LOAS)', 'Requerimento e recurso do Benefício de Prestação Continuada para idosos acima de 65 anos e pessoas com deficiência em situação de vulnerabilidade econômica.', HandHeart],
  ['Pensão por Morte', 'Orientação e defesa na solicitação de pensão por morte para dependentes de segurado falecido, incluindo recursos contra negativas do INSS.', Users],
  ['Salário Maternidade', 'Requerimento e defesa do salário maternidade para seguradas empregadas, trabalhadoras avulsas, contribuintes individuais e seguradas especiais.', Baby],
  ['Auxílio Reclusão', 'Garantia do benefício previdenciário para dependentes de segurados de baixa renda que se encontrem recolhidos à prisão.', DoorClosed],
  ['Auxílio Acidente', 'Defesa do benefício indenizatório para segurados que sofreram acidente e ficaram com sequelas que reduzem a capacidade de trabalho.', AlertTriangle],
  ['Revisões de Benefícios', 'Análise e ação judicial para corrigir o valor de benefícios calculados incorretamente. Recupere os valores pagos a menor desde a concessão.', RefreshCcw],
  ['Ações contra o INSS', 'Representação judicial na Justiça Federal e nos Juizados Especiais Federais em todo o Brasil para garantir seus direitos previdenciários.', Scale],
  ['Outros Benefícios', 'Análise de cada caso para identificar benefícios aos quais você tem direito e ainda não recebe. Consulta inicial gratuita.', Plus],
] as const

/* ── Individual stacking card ─────────────────────────────────────── */

interface StackedCardProps {
  title: string
  text: string
  Icon: React.ElementType
  index: number
  total: number
  containerProgress: ReturnType<typeof useScroll>['scrollYProgress']
}

function StackedCard({ title, text, Icon, index, total, containerProgress }: StackedCardProps) {
  const isLast = index === total - 1

  /*
   * Map scroll progress to per-card scale/opacity.
   * Card i starts shrinking when the next card begins entering.
   * rangeStart = when next card starts entering
   * rangeEnd   = when the card after next starts entering
   */
  const rangeStart = (index + 1) / total
  const rangeEnd = Math.min((index + 2) / total, 1)

  const scale = useTransform(
    containerProgress,
    [rangeStart, rangeEnd],
    isLast ? [1, 1] : [1, 0.92]
  )

  const opacity = useTransform(
    containerProgress,
    [rangeStart, rangeEnd],
    isLast ? [1, 1] : [1, 0.4]
  )

  /* Each card sticks a few pixels lower so the stack peeks */
  const stickyTop = 150 + index * 16

  return (
    /* 
     * This outer div is the "scroll slot". 
     * It takes up real vertical space so each card enters the viewport
     * at a different scroll position. The LAST card has less height
     * since it doesn't need scroll room after it.
     */
    <div
      className="stacked-card-slot"
      style={{ height: isLast ? 'auto' : undefined }}
    >
      <div
        className="stacked-card-sticky"
        style={{ top: stickyTop }}
      >
        <motion.article
          className="service stacked-card"
          style={{
            scale,
            opacity,
            transformOrigin: 'top center',
          }}
        >
          <span className="stacked-card-number">
            {String(index + 1).padStart(2, '0')}
          </span>
          <Icon size={29} />
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ marginTop: 'auto' }}>
            Saiba mais →
          </a>
        </motion.article>
      </div>
    </div>
  )
}

/* ── Stacked Cards section ────────────────────────────────────────── */

export default function StackedCards() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="services" className="services stacked-section">
      {/* Sticky header: stays fixed at the top while cards scroll */}
      <header className="stacked-header">
        <p className="eyebrow">O que ofereço</p>
        <h2>Benefícios</h2>
      </header>

      {/* 
        This container's total height (sum of all card slots) 
        drives scrollYProgress from 0 → 1 
      */}
      <div ref={containerRef} className="stacked-container">
        {services.map(([title, text, Icon], i) => (
          <StackedCard
            key={title}
            title={title}
            text={text}
            Icon={Icon}
            index={i}
            total={services.length}
            containerProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
