export const Contact = () => {
  return (
    <>
        <section className="content-card contact" id="contact">
            <h1>Contacto</h1>
            <form className="form" id="form" action="https://www.freecodecamp.com/email-submit">
                <div className="input-box">
                    <input type="text" className="text-input" name="name" placeholder="Nombre" />
                </div>
                <div className="input-box">
                    <input type="email" className="text-input" name="email" id="email" placeholder="Email" />
                </div>
                <div className="input-box">
                    <input type="subject" className="text-input" name="subject" id="subject"
                        placeholder="Asunto" />
                </div>
                <div className="input-box">
                    <textarea name="text" className="message" placeholder="Mensaje..."></textarea>
                </div>
                <div className="input-box">
                    <input type="submit" className="submit-btn" id="submit" value="Enviar" />
                </div>
            </form>
        </section>
    </>
  )
}
