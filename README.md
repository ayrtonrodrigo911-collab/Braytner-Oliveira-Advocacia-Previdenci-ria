# Braytner Oliveira Advocacia Previdenciária

Landing page institucional para o escritório Braytner Oliveira Advocacia Previdenciária, com foco em atendimento humanizado, orientação especializada e atuação em benefícios previdenciários.

## Sobre o projeto

O site apresenta os serviços do escritório, informações sobre sua atuação, depoimentos, perguntas frequentes, localização e canais de contato. A interface foi desenvolvida com uma identidade visual em azul-marinho e dourado, priorizando legibilidade, acessibilidade e uma experiência fluida em telas grandes e dispositivos móveis.

## Funcionalidades

- Hero section com chamada para ação e imagem de fundo com efeito de rolagem.
- Seção institucional “Quem somos?” com galeria de imagens alternadas.
- Áreas de atuação com cards de benefícios previdenciários.
- Seção “Por que trabalhar com nosso escritório”.
- Perguntas frequentes com respostas expansíveis.
- Depoimentos de clientes.
- Informações de localização e mapa integrado.
- Links diretos para WhatsApp, Instagram e e-mail.
- Rodapé com informações de contato, atendimento presencial e on-line.
- Layout responsivo para desktop, tablet e celular.
- Animações suaves de entrada e interação.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Framer Motion
- Lenis
- Embla Carousel
- Lucide React
- Tailwind CSS 4 e PostCSS
- Vercel Analytics

## Como executar localmente

### Pré-requisitos

- Node.js 20 ou superior
- npm, pnpm ou outro gerenciador compatível

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
npm run build
npm run start
```

## Estrutura principal

```text
app/
  globals.css          # estilos globais e identidade visual
  layout.tsx           # layout e metadados da aplicação
  page.tsx             # página principal

components/
  advorum-site.tsx     # conteúdo e seções da landing page
  stacked-cards.tsx    # componentes visuais auxiliares
  ui/                  # componentes reutilizáveis de interface

public/
  *.jpeg, *.jpg        # fotos institucionais e imagem de fundo
```

## Personalização

Os principais conteúdos da página estão em `components/advorum-site.tsx`. Cores, espaçamentos, tipografia, responsividade e animações estão concentrados em `app/globals.css`.

As imagens institucionais devem ser adicionadas à pasta `public/` e referenciadas com caminhos iniciados por `/`.

## Contato do escritório

- WhatsApp: [+55 87 9100-1553](https://wa.me/558791001553)
- Instagram: [@braytnercesar.adv](https://instagram.com/braytnercesar.adv)
- Atendimento presencial: Alagoinha/PE
- Atendimento on-line: todo o Brasil

## Licença

Projeto institucional desenvolvido para Braytner Oliveira Advocacia Previdenciária. O uso, a reprodução e a distribuição do código e dos materiais visuais dependem da autorização dos responsáveis pelo projeto.
