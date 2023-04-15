export const Contact = () => {
  return (
    <>
        <section class="content-card contact" id="contact">
            <h1>Contacto</h1>
            <form class="form" id="form" action="https://www.freecodecamp.com/email-submit">
                <div class="input-box">
                    <input type="text" class="text-input" name="name" placeholder="Nombre" />
                </div>
                <div class="input-box">
                    <input type="email" class="text-input" name="email" id="email" placeholder="Email" />
                </div>
                <div class="input-box">
                    <input type="subject" class="text-input" name="subject" id="subject"
                        placeholder="Asunto" />
                </div>
                <div class="input-box">
                    <textarea name="text" class="message" placeholder="Mensaje..."></textarea>
                </div>
                <div class="input-box">
                    <input type="submit" class="submit-btn" id="submit" value="Enviar" />
                </div>
            </form>
        </section>
    </>
  )
}
