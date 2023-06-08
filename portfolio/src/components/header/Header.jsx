import "./Header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Vítor Emanuel</h1>
        <h5 className="text-light">Desenvolvedor Front-End</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Minha foto pessoal" />
        </div>

        <a href="#contato" className="scroll__down">Ir para o final</a>
      </div>
    </header>
  )
}

export default Header