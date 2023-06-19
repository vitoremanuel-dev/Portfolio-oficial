import "./Nav.css"

import { AiOutlineHome } from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBookAlt} from "react-icons/bi"
import {MdOutlineContactSupport} from "react-icons/md"
import {LuBookOpen} from "react-icons/lu"

import { useState } from "react"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
      <a href="#sobre" onClick={() => setActiveNav("#sobre")} className={activeNav === "#sobre" ? "active" : ""}><AiOutlineUser /></a>
      <a href="#experiencia" onClick={() => setActiveNav("#experiencia")} className={activeNav === "#experiencia" ? "active" : ""}><BiBookAlt /></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><LuBookOpen /></a>
      <a href="#contato" onClick={() => setActiveNav("#contato")} className={activeNav === "#contato" ? "active" : ""}><MdOutlineContactSupport /></a>
    </nav>
  )
}

export default Nav