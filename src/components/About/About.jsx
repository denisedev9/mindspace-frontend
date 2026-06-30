import './About.css'

function About() {
  return (
    <main className="about">
      <section className="about__hero">
        <h1 className="about__title">Sobre mí</h1>
        <p className="about__subtitle">Conoce mi historia y mi enfoque terapéutico</p>
      </section>

      <section className="about__content">
        <div className="about__text-block">
          <h2 className="about__heading">Mi historia</h2>
          <p className="about__text">Soy Denise Hanono, psicóloga clínica con pasión por acompañar a las personas en su proceso de autoconocimiento y bienestar emocional. Creo profundamente en la capacidad de cada persona para sanar y crecer.</p>
        </div>

        <div className="about__text-block">
          <h2 className="about__heading">Formación</h2>
          <ul className="about__list">
            <li className="about__list-item">Licenciatura en Psicología</li>
            <li className="about__list-item">Especialidad en Terapia Cognitivo-Conductual</li>
            <li className="about__list-item">Certificación en Mindfulness</li>
          </ul>
        </div>

        <div className="about__text-block">
          <h2 className="about__heading">Especialidades</h2>
          <ul className="about__list">
            <li className="about__list-item">Ansiedad y estrés</li>
            <li className="about__list-item">Depresión</li>
            <li className="about__list-item">Relaciones de pareja</li>
            <li className="about__list-item">Autoestima y desarrollo personal</li>
            <li className="about__list-item">Duelo y pérdida</li>
          </ul>
        </div>

        <div className="about__text-block">
          <h2 className="about__heading">Mi enfoque</h2>
          <p className="about__text">Trabajo desde un enfoque humanista e integrativo, adaptando las herramientas terapéuticas a las necesidades únicas de cada persona. Mi objetivo es crear un espacio seguro, sin juicios, donde puedas explorar tus emociones y encontrar tu propio camino hacia el bienestar.</p>
        </div>
      </section>
    </main>
  )
}

export default About