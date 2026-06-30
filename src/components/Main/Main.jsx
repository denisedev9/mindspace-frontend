import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../Preloader/Preloader.jsx'
import { getAffirmation } from '../../utils/affirmationsApi.js'
import './Main.css'

function Main() {
  const [affirmation, setAffirmation] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    getAffirmation()
      .then((data) => {
        setAffirmation(data.affirmation)
      })
      .catch(() => {
        setError('Lo sentimos, algo ha salido mal. Por favor, inténtalo más tarde.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <main className="main">
      <section className="hero">
        <div className="hero__content">
          <span className="hero__tag">Psicología Clínica Online</span>
          <h1 className="hero__title">Un espacio seguro <span>para ti</span></h1>
          <p className="hero__subtitle">Acompaño a adolescentes y adultos en su proceso de autoconocimiento, sanación y crecimiento personal. Todo desde la comodidad de tu hogar.</p>
          <div className="hero__buttons">
            <a href="https://wa.me/tunumero" target="_blank" rel="noreferrer" className="hero__button">Agenda una sesión</a>
            <Link to="/about" className="hero__button hero__button_secondary">Conoce más</Link>
          </div>
        </div>
        <div className="hero__decoration">
          <div className="hero__circle hero__circle_large"></div>
          <div className="hero__circle hero__circle_medium"></div>
          <div className="hero__circle hero__circle_small"></div>
        </div>
      </section>

      <section className="affirmation">
        <span className="affirmation__tag">Para ti, hoy</span>
        <h2 className="affirmation__title">Afirmación del día</h2>
        {isLoading && <Preloader />}
        {error && <p className="affirmation__error">{error}</p>}
        {!isLoading && !error && (
          <p className="affirmation__text">"{affirmation}"</p>
        )}
      </section>

      <section className="services">
        <span className="services__tag">Servicios</span>
        <h2 className="services__title">¿Cómo puedo acompañarte?</h2>
        <ul className="services__list">
          <li className="services__item">
            <div className="services__item-icon">🧠</div>
            <h3 className="services__item-title">Terapia Individual Online</h3>
            <p className="services__item-text">Sesiones personalizadas para adolescentes y adultos. Un espacio confidencial para trabajar tus emociones y alcanzar tu bienestar.</p>
            <a href="https://wa.me/tunumero" target="_blank" rel="noreferrer" className="services__item-button">Agendar sesión</a>
          </li>
          <li className="services__item">
            <div className="services__item-icon">🧘</div>
            <h3 className="services__item-title">Grupo de Meditación Online</h3>
            <p className="services__item-text">Sesiones grupales de meditación guiada para conectar con el presente, reducir el estrés y encontrar calma en tu día a día.</p>
            <a href="https://wa.me/tunumero" target="_blank" rel="noreferrer" className="services__item-button">Unirme al grupo</a>
          </li>
        </ul>
      </section>

      <section className="cta">
        <h2 className="cta__title">¿Listo para empezar tu camino?</h2>
        <p className="cta__subtitle">Da el primer paso hacia tu bienestar emocional hoy.</p>
        <Link to="/articles" className="cta__button">Lee mis artículos</Link>
      </section>
    </main>
  )
}

export default Main