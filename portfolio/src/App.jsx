import './App.css'

import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Sobre from "./components/sobre/Sobre"
import Experiencia from "./components/experiencia/Experiencia"
import Portfolio from "./components/portfolio/Portfolio"
import Contato from "./components/contato/Contato"
import Footer from "./components/footer/Footer"

function App() {


  return (
    <div className='app'>
      <Header />
      <Nav />
      <Sobre />
      <Experiencia />
      <Portfolio />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
