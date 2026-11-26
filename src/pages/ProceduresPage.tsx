import { Link } from 'react-router-dom'

const procedures = [
  { number: '01', name: 'Estética facial', description: 'Cuidados personalizados para valorizar a harmonia e a expressão natural do seu rosto.' },
  { number: '02', name: 'Estética corporal', description: 'Protocolos pensados para suas necessidades, conforto e bem-estar.' },
  { number: '03', name: 'Tecnologias estéticas', description: 'Recursos modernos integrados a um plano de cuidado individualizado.' },
]

export function ProceduresPage() {
  return (
    <section className="inner-page section-pad">
      <div className="container">
        <span className="eyebrow">CUIDADO PERSONALIZADO</span>
        <div className="page-heading"><h1>Procedimentos<br /><em>para você.</em></h1><p>Cada jornada começa com uma avaliação. Vamos entender seus objetivos e conversar sobre as opções mais adequadas para você.</p></div>
        <div className="procedure-list">{procedures.map((item) => <article className="procedure-row" key={item.number}><span className="procedure-number">{item.number}</span><h2>{item.name}</h2><p>{item.description}</p><span className="procedure-arrow" aria-hidden="true">↗</span></article>)}</div>
        <p className="disclaimer">Os procedimentos indicados dependem de avaliação individual e orientação profissional. Os resultados podem variar de pessoa para pessoa.</p>
        <div className="page-cta"><h2>Tem dúvidas sobre qual cuidado escolher?</h2><Link className="button" to="/contato">Converse com a gente <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  )
}
