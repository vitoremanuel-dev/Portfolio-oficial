import cv from "../../assets/cv.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={cv} download className="btn">Baixar CV</a>
        <a href="#contato" className="btn btn-primary">Contato</a>
    </div>
  )
}

export default CTA