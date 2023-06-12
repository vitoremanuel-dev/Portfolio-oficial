import "./Contato.css"
import { TfiEmail } from "react-icons/tfi"
import { SlSocialInstagram } from "react-icons/sl"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contato = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u5fdnph', 'Yservice_u5fdnph', form.current, 'iMxgBtThtqUMAme_1')
     
    e.target.reset()
  };
  return (
    <section id="contato">
      <h5>Entrar em contato</h5>
      <h2>Meus contatos</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vitoremanuel.dev@gmail.com</h5>
            <a href="mailto:vitoremanuel.dev@gmail.com" target="_blank">Enviar uma mensagem</a>
          </article>

          <article className="contact__option">
            <SlSocialInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>@vitor-e_</h5>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 86 99902-9470</h5>
            <a href="https://api.whatsapp.com/send?phone=5586999029470&text=Oi,%20vim%20pelo%20seu%20portfolio" target="_blank">Enviar uma mensagem</a>
          </article>
        </div>
        {/* FIM DAS OPÇÕES DE CONTATO */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu nome completo" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <textarea name="message" rows="7" placeholder="Sua mensagem" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contato