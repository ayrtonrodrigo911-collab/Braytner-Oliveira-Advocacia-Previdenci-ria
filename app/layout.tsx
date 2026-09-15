import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Dr. Braytner Oliveira | Advogado Previdenciário em Alagoinha/PE',
    template: '%s | Braytner Oliveira Advocacia Previdenciária',
  },
  description: 'Advogado especializado em Direito Previdenciário em Alagoinha e região de Pesqueira/PE. Aposentadorias, BPC-LOAS, Auxílio-Doença, Pensão por Morte, Salário-Maternidade, Auxílio-Reclusão e Revisões de Benefícios. Presidente da Comissão de Direito Previdenciário da OAB Pesqueira/PE. Consulta inicial gratuita. Atendimento presencial e online em todo o Brasil.',
  keywords: [
    'advogado previdenciário Alagoinha',
    'advogado previdenciário Pesqueira PE',
    'advogado INSS Alagoinha',
    'advogado INSS Pesqueira',
    'aposentadoria INSS Alagoinha PE',
    'aposentadoria rural Pernambuco',
    'aposentadoria por invalidez PE',
    'aposentadoria por tempo de contribuição PE',
    'aposentadoria especial Pernambuco',
    'auxílio doença negado Alagoinha',
    'auxílio doença INSS Pernambuco',
    'BPC LOAS Alagoinha',
    'BPC LOAS Pesqueira PE',
    'BPC deficiência Pernambuco',
    'pensão por morte INSS Alagoinha',
    'pensão por morte advogado PE',
    'salário maternidade rural Pernambuco',
    'auxílio reclusão Pernambuco',
    'auxílio acidente INSS PE',
    'revisão de benefício INSS',
    'revisão aposentadoria Pernambuco',
    'benefício negado INSS o que fazer',
    'advogado previdenciário Agreste Pernambuco',
    'Braytner Oliveira advogado',
    'Braytner César OAB Pesqueira',
    'OAB Pesqueira previdenciário',
    'direito previdenciário Pernambuco',
    'advocacia previdenciária Alagoinha',
    'escritório advocacia Alagoinha PE',
    'advogado aposentadoria agricultor PE',
    'aposentadoria trabalhador rural Pernambuco',
    'ação contra INSS Pernambuco',
    'Juizado Especial Federal PE previdenciário',
    'consultoria previdenciária gratuita',
  ],
  authors: [
    { name: 'Dr. Braytner César Oliveira Mélo' }
  ],
  creator: 'Braytner Oliveira Advocacia Previdenciária',
  publisher: 'Braytner Oliveira Advocacia Previdenciária',
  metadataBase: new URL('https://braytneradvocacia.com.br'),
  alternates: {
    canonical: '/',
  },
  category: 'Legal Services',
  classification: 'Advocacia Previdenciária',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://braytneradvocacia.com.br',
    siteName: 'Braytner Oliveira - Advocacia Previdenciária',
    title: 'Dr. Braytner Oliveira | Advogado Previdenciário em Alagoinha/PE',
    description: 'Seus direitos previdenciários defendidos com técnica e dedicação. Aposentadorias, BPC-LOAS, Auxílio-Doença, Pensão por Morte e muito mais. Presidente da Comissão de Direito Previdenciário — OAB Pesqueira/PE. Consulta gratuita.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Braytner Oliveira - Advogado Previdenciário em Alagoinha/PE',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Braytner Oliveira | Advogado Previdenciário',
    description: 'Advocacia Previdenciária em Alagoinha/PE. Aposentadorias, BPC-LOAS, Auxílio-Doença e mais. Consulta gratuita.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'COLE_AQUI_O_CODIGO_DO_SEARCH_CONSOLE',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#071426' },
    { media: '(prefers-color-scheme: dark)', color: '#071426' },
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://braytneradvocacia.com.br/#business",
      "name": "Braytner Oliveira - Advocacia Previdenciária",
      "alternateName": "Braytner Oliveira Mélo Advocacia e Assessoria Jurídica",
      "description": "Escritório de advocacia especializado em Direito Previdenciário. Atuação em aposentadorias, BPC-LOAS, auxílio-doença, pensão por morte, salário-maternidade, auxílio-reclusão, auxílio-acidente, revisões de benefícios e ações contra o INSS.",
      "url": "https://braytneradvocacia.com.br",
      "logo": "https://braytneradvocacia.com.br/logo.png",
      "image": "https://braytneradvocacia.com.br/og-image.jpg",
      "telephone": "+55-87-9100-1553",
      "email": "braytneroliveira@hotmail.com",
      "priceRange": "$$",
      "currenciesAccepted": "BRL",
      "paymentAccepted": "PIX, Transferência bancária",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Travessa Austriclínio Galindo, n. 20",
        "addressLocality": "Alagoinha",
        "addressRegion": "PE",
        "postalCode": "55260-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -8.4779,
        "longitude": -36.7731
      },
      "hasMap": "https://maps.google.com/?q=Alagoinha,PE,55260-000",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Alagoinha", "containedInPlace": { "@type": "State", "name": "Pernambuco" } },
        { "@type": "City", "name": "Pesqueira", "containedInPlace": { "@type": "State", "name": "Pernambuco" } },
        { "@type": "State", "name": "Pernambuco" },
        { "@type": "Country", "name": "Brasil" }
      ],
      "serviceType": [
        "Aposentadorias", "Auxílio-Doença", "BPC-LOAS", "Pensão por Morte",
        "Salário-Maternidade", "Auxílio-Reclusão", "Auxílio-Acidente",
        "Revisões de Benefícios", "Ações contra o INSS", "Direito Previdenciário"
      ],
      "sameAs": ["https://www.instagram.com/braytnercesar.adv"],
      "founder": {
        "@type": "Person",
        "@id": "https://braytneradvocacia.com.br/#person",
        "name": "Braytner César Oliveira Mélo",
        "givenName": "Braytner",
        "familyName": "Oliveira Mélo",
        "jobTitle": "Advogado Previdenciário",
        "description": "Advogado especializado em Direito Previdenciário e Direito Penal. Pós-graduado em Direito Previdenciário. Presidente da Comissão de Direito Previdenciário da OAB Subseção Pesqueira/PE.",
        "worksFor": { "@id": "https://braytneradvocacia.com.br/#business" },
        "sameAs": ["https://www.instagram.com/braytnercesar.adv"]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "120",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://braytneradvocacia.com.br/#website",
      "url": "https://braytneradvocacia.com.br",
      "name": "Braytner Oliveira Advocacia Previdenciária",
      "description": "Site oficial do escritório Braytner Oliveira Advocacia Previdenciária",
      "publisher": { "@id": "https://braytneradvocacia.com.br/#business" },
      "inLanguage": "pt-BR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Como saber se tenho direito a um benefício do INSS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Para saber se você tem direito a um benefício do INSS, é necessário analisar seu histórico de contribuições, tempo de serviço e situação atual. Entre em contato com o escritório para uma consulta gratuita."
          }
        },
        {
          "@type": "Question",
          "name": "O que fazer quando o INSS nega meu benefício?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quando o INSS nega um benefício, você pode recorrer administrativamente ou judicialmente. O prazo é importante — procure orientação jurídica o quanto antes para não perder o direito ao recurso."
          }
        },
        {
          "@type": "Question",
          "name": "Quem tem direito ao BPC/LOAS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O BPC/LOAS é devido a idosos acima de 65 anos e pessoas com deficiência que comprovem renda familiar per capita inferior a 1/4 do salário mínimo. O escritório auxilia em todo o processo de requerimento."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto custa contratar um advogado previdenciário?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em casos de benefícios negados, trabalhamos no modelo êxito — você não paga honorários antecipados. Os honorários são combinados somente após análise gratuita do caso."
          }
        },
        {
          "@type": "Question",
          "name": "Vocês atendem fora de Alagoinha/PE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Atendemos presencialmente em Alagoinha/PE e remotamente para clientes em todo o Brasil, com representação nos Juizados Especiais Federais em todo o território nacional."
          }
        }
      ]
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
