import "./Sobre.css"

import { FiAward } from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
import {VscFolderOpened} from "react-icons/vsc"

const Sobre = () => {
  return (
    <section id="sobre">
      <h5>Um pouco</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="#" alt="Minha foto vai aqui, tenho que importar" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experiência</h5>
              <small>À procura do primeiro emprego</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>Ainda sem cliente</small>
            </article>

            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projetos</h5>
              <small>10+ completos (pessoais)</small>
            </article>
          </div>

          <p>VOU FALAR TUDO SOBRE MIM AQUI, TEM QUE SER BREVE E ATRAENTE</p>

          <a href="#contato" className="btn btn-primary">Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default Sobre