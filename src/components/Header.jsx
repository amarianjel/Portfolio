import perfil from '../assets/img/perfil.jpg'
import Curriculum from '../../public/download/curriculum_Ingeniero_Civil_Informatica_Abraham_Marianjel.pdf'

export const Header = () => {
  return (
    <>
        <section className="header">
            <img className="header-img"
                src={ perfil }
                alt="" />
            <h1>Abraham Marianjel</h1>
            <h2>Ingeniero Civil Informático</h2>
            <div className="socials">
                <a href="https://www.linkedin.com/in/amarianjel" target="_blank" className="fab fa-linkedin-in" id="profile-link"></a>
                <a href="https://github.com/amarianjel?tab=repositories" target="_blank" className="fab fa-github"></a>
                <a href="https://codepen.io/amarianjel" target="_blank" className="fab fa-codepen"></a>
            </div>
            <a href={ Curriculum } download className="cta">Descargar CV</a>
        </section>
    </>
  )
}
