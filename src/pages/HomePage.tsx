import { Link } from 'react-router-dom'

const highlights = [
  { number: '01', title: 'Cuidado individual', text: 'Cada plano começa com uma conversa atenta sobre você e seus objetivos.' },
  { number: '02', title: 'Beleza natural', text: 'Abordagens personalizadas para resultados harmônicos e elegantes.' },
  { number: '03', title: 'Ciência e segurança', text: 'Atendimento responsável, com informação clara em cada etapa.' },
]

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-line" /> ESTÉTICA AVANÇADA, COM PROPÓSITO</span>
            <h1>Sua beleza,<br />em sua melhor <em>essência.</em></h1>
            <p className="hero-description">Um cuidado que respeita sua individualidade e realça o que faz você ser única.</p>
            <div className="hero-actions">
              <Link className="button" to="/contato">Agende uma avaliação <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" to="/procedimentos">Conheça os procedimentos <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-note"><span className="note-mark">✳</span><span>Atendimento acolhedor<br /><strong>do primeiro contato ao cuidado contínuo</strong></span></div>
          </div>
          <div className="hero-visual">
            <img className="hero-photo" src="/images/consultorio-placeholder.svg" alt="Imagem provisória do consultório BioEsthetic" />
            <div className="image-caption"><span>UM ESPAÇO PENSADO PARA VOCÊ</span><span>01 — 03</span></div>
            <div className="hero-stamp" aria-label="Cuidado e naturalidade"><span>cuidado</span><b>✳</b><span>naturalidade</span></div>
          </div>
        </div>
      </section>
      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <div><span className="eyebrow">BEM-VINDA À BIOESTHETIC</span><h2>Um olhar cuidadoso.<br /><em>Um cuidado só seu.</em></h2></div>
          <p>Mais do que procedimentos, acreditamos em escolhas conscientes e em uma beleza que continua sendo sua. Aqui, cada detalhe é pensado para que você se sinta bem, segura e acolhida.</p>
        </div>
      </section>
      <section className="values-section section-pad">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">NOSSO JEITO DE CUIDAR</span><h2>Beleza com <em>intenção.</em></h2></div><span className="section-index">01 / 03</span></div>
          <div className="value-grid">{highlights.map((item) => <article className="value-card" key={item.number}><span className="value-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-star" aria-hidden="true">✳</span></article>)}</div>
        </div>
      </section>
      <section className="closing-cta"><div className="container closing-inner"><div><span className="eyebrow">SEU PRÓXIMO PASSO</span><h2>Vamos conversar<br />sobre <em>você?</em></h2></div><Link className="button button-light" to="/contato">Fale com a BioEsthetic <span aria-hidden="true">↗</span></Link></div></section>
    </>
  )
}
