import { Link, NavLink, Outlet } from 'react-router-dom'

export function SiteLayout() {
  return (
    <>
      <div className="announcement">Cuidado que valoriza sua beleza natural <span aria-hidden="true">✦</span></div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="BioEsthetic — página inicial">
            <img src="/images/logo-placeholder.svg" alt="" />
            <span>bio<span className="brand-accent">esthetic</span><small>ESTÉTICA AVANÇADA</small></span>
          </Link>
          <nav className="main-nav" aria-label="Navegação principal">
            <NavLink to="/" end>Início</NavLink>
            <NavLink to="/procedimentos">Procedimentos</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </nav>
          <Link className="button button-small header-cta" to="/contato">Agende sua avaliação <span aria-hidden="true">↗</span></Link>
        </div>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <Link className="brand footer-brand" to="/">
            <img src="/images/logo-placeholder.svg" alt="" />
            <span>bio<span className="brand-accent">esthetic</span><small>ESTÉTICA AVANÇADA</small></span>
          </Link>
          <p>Beleza com cuidado, ciência e naturalidade.</p>
          <span className="copyright">© {new Date().getFullYear()} BioEsthetic</span>
        </div>
      </footer>
    </>
  )
}
