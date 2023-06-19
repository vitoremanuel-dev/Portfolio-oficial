import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"

import TAREFAS from "../../assets/tarefas.png"

const data = [
  {
    id: 1,
    image: TAREFAS,
    title: "To-do List",
    github: "https://github.com/vitoremanuel-dev/lista-de-tarefas-react",
    demo: "https://vitoremanuel-dev.github.io/lista-de-tarefas-react/"
  },
  {
    id: 2,
    image: IMG1,
    title: "Esse é um dos meus projetos",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 3,
    image: IMG1,
    title: "Esse é um dos meus projetos",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 4,
    image: IMG1,
    title: "Esse é um dos meus projetos",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 5,
    image: IMG1,
    title: "Esse é um dos meus projetos",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 6,
    image: IMG1,
    title: "Esse é um dos meus projetos",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos recentes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio