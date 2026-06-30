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
          <h1 className="hero__title">Psic. Denise Hanono</h1>
          <p className="hero__subtitle">Psicóloga clínica especializada en ansiedad, relaciones y bienestar emocional.</p>
          <a href="https://wa.me/tunumero" target="_blank" rel="noreferrer" className="hero__button">Agenda una sesión</a>
        </div>
      </section>

      <section className="affirmation">
        <h2 className="affirmation__title">Afirmación del día</h2>
        {isLoading && <Preloader />}
        {error && <p className="affirmation__error">{error}</p>}
        {!isLoading && !error && (
          <p className="affirmation__text">"{affirmation}"</p>
        )}
      </section>

      <section className="services">
        <h2 className="services__title">¿En qué puedo ayudarte?</h2>
        <ul className="services__list">
          <li className="services__item">Ansiedad y estrés</li>
          <li className="services__item">Depresión</li>
          <li className="services__item">Relaciones de pareja</li>
          <li className="services__item">Autoestima</li>
          <li className="services__item">Duelo</li>
          <li className="services__item">Desarrollo personal</li>
        </ul>
      </section>

      <section className="cta">
        <h2 className="cta__title">¿Listo para empezar tu camino?</h2>
        <Link to="/articles" className="cta__button">Lee mis artículos</Link>
      </section>
    </main>
  )
}

export default Main