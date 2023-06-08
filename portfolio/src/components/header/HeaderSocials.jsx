import { BsLinkedin } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/vitoremanuel-dev/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/vitoremanuel-dev" target="_blank"><AiFillGithub /></a>
        </div>
    )
}

export default HeaderSocials