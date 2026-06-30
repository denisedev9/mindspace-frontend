import { useState } from 'react'
import Preloader from '../Preloader/Preloader.jsx'
import './Articles.css'

const ARTICLES_DATA = [
  {
    _id: '1',
    title: '¿Qué es la ansiedad y cómo manejarla?',
    summary: 'La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés. En este artículo exploramos sus causas y herramientas para gestionarla.',
    content: 'La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés. En este artículo exploramos sus causas y herramientas para gestionarla. Es importante reconocer que la ansiedad, en niveles moderados, es parte de nuestra vida y puede ser adaptativa. Sin embargo, cuando se vuelve excesiva, puede interferir con nuestra vida diaria.',
    date: '2026-01-15',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600',
  },
  {
    _id: '2',
    title: 'El poder del autoconocimiento',
    summary: 'Conocerte a ti mismo es el primer paso hacia el bienestar emocional. Descubre cómo iniciar este camino de introspección.',
    content: 'Conocerte a ti mismo es el primer paso hacia el bienestar emocional. Descubre cómo iniciar este camino de introspección. El autoconocimiento nos permite identificar nuestras fortalezas y áreas de mejora, entender nuestras emociones y tomar decisiones más alineadas con nuestros valores.',
    date: '2026-02-10',
    image: 'https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=600',
  },
  {
    _id: '3',
    title: 'Relaciones saludables: ¿cómo construirlas?',
    summary: 'Las relaciones interpersonales son fundamentales para nuestro bienestar. Aprende a construir vínculos más sanos y auténticos.',
    content: 'Las relaciones interpersonales son fundamentales para nuestro bienestar. Aprende a construir vínculos más sanos y auténticos. Una relación saludable se basa en la comunicación asertiva, el respeto mutuo y la capacidad de establecer límites claros.',
    date: '2026-03-05',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600',
  },
  {
    _id: '4',
    title: 'Mindfulness: vivir el presente',
    summary: 'El mindfulness es una práctica que nos ayuda a conectar con el momento presente y reducir el estrés del día a día.',
    content: 'El mindfulness es una práctica que nos ayuda a conectar con el momento presente y reducir el estrés del día a día. A través de la atención plena, podemos aprender a observar nuestros pensamientos sin juzgarlos y encontrar calma en medio del caos.',
    date: '2026-04-01',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600',
  },
  {
    _id: '5',
    title: 'El duelo: aprender a soltar',
    summary: 'El duelo no solo se experimenta ante la muerte. Cualquier pérdida significativa puede generarlo. Aprende a atravesarlo sanamente.',
    content: 'El duelo no solo se experimenta ante la muerte. Cualquier pérdida significativa puede generarlo. Aprende a atravesarlo sanamente. El proceso de duelo es único para cada persona y no tiene un tiempo definido. Lo importante es permitirse sentir y buscar apoyo cuando sea necesario.',
    date: '2026-05-12',
    image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600',
  },
  {
    _id: '6',
    title: 'Autoestima: el amor propio como base',
    summary: 'Una autoestima sana es la base de nuestro bienestar emocional. Descubre cómo cultivarla en tu vida diaria.',
    content: 'Una autoestima sana es la base de nuestro bienestar emocional. Descubre cómo cultivarla en tu vida diaria. La autoestima no se trata de sentirse superior a los demás, sino de reconocer nuestro propio valor y tratarnos con la misma compasión que le daríamos a un buen amigo.',
    date: '2026-06-01',
    image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600',
  },
]

const ARTICLES_PER_PAGE = 3

function Articles() {
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE)
  const [selectedArticle, setSelectedArticle] = useState(null)

  const visibleArticles = ARTICLES_DATA.slice(0, visibleCount)
  const hasMore = visibleCount < ARTICLES_DATA.length

  function handleShowMore() {
    setVisibleCount((prev) => prev + ARTICLES_PER_PAGE)
  }

  function handleCardClick(article) {
    setSelectedArticle(article)
  }

  function handleBack() {
    setSelectedArticle(null)
  }

  if (selectedArticle) {
    return (
      <main className="article-page">
        <button className="article-page__back" onClick={handleBack}>← Volver a artículos</button>
        <img className="article-page__image" src={selectedArticle.image} alt={selectedArticle.title} />
        <h1 className="article-page__title">{selectedArticle.title}</h1>
        <p className="article-page__date">{new Date(selectedArticle.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p className="article-page__content">{selectedArticle.content}</p>
      </main>
    )
  }

  return (
    <main className="articles">
      <section className="articles__hero">
        <h1 className="articles__title">Artículos</h1>
        <p className="articles__subtitle">Reflexiones y herramientas para tu bienestar emocional</p>
      </section>

      <section className="articles__content">
        <ul className="articles__list">
          {visibleArticles.map((article) => (
            <li key={article._id} className="article-card" onClick={() => handleCardClick(article)}>
              <img className="article-card__image" src={article.image} alt={article.title} />
              <div className="article-card__info">
                <p className="article-card__date">{new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h2 className="article-card__title">{article.title}</h2>
                <p className="article-card__summary">{article.summary}</p>
                <button className="article-card__button">Leer más</button>
              </div>
            </li>
          ))}
        </ul>

        {hasMore && (
          <button className="articles__more-button" onClick={handleShowMore}>Mostrar más</button>
        )}
      </section>
    </main>
  )
}

export default Articles