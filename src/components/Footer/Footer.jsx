import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2026 Psic. Denise Hanono. Todos los derechos reservados.</p>
      <nav className="footer__nav">
        <a href="https://wa.me/tunumero" target="_blank" rel="noreferrer" className="footer__link">WhatsApp</a>
        <a href="mailto:tucorreo@gmail.com" className="footer__link">Contacto</a>
      </nav>
    </footer>
  )
}

export default Footer