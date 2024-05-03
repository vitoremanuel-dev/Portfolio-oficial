import "./Footer.css"

import { AiOutlineLinkedin } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">VÍTOR EMANUEL</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#experiencia">Experiência</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/vitoremanuel-dev/" target="_blank"><AiOutlineLinkedin /></a>
        <a href="https://github.com/vitoremanuel-dev/" target="_blank"><AiOutlineGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; VITOREMANUEL-DEV</small>
      </div>
    </footer>
  )
}

export default Footer