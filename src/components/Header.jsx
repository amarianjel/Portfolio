import perfil from '../assets/perfil.jpg'

export const Header = () => {
  return (
    <>
        <section class="header">
            <img class="header-img"
                src={ perfil }
                alt="" />
            <h1>Abraham Marianjel</h1>
            <h2>Ingeniero Civil Informático</h2>
            <div class="socials">
                <a href="https://www.linkedin.com/in/abraham-marianjel-sep%C3%BAlveda-95a607b6/" target="_blank" class="fab fa-linkedin-in" id="profile-link"></a>
                <a href="https://github.com/amarianjel?tab=repositories" target="_blank" class="fab fa-github"></a>
                <a href="https://codepen.io/amarianjel" target="_blank" class="fab fa-codepen"></a>
            </div>
            <a href="" class="cta">Descargar CV</a>
        </section>
    </>
  )
}
