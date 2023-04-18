import imgSureno from '../assets/img/proyects/angular-sureno.png'
import imgTrawen from '../assets/img/proyects/angular-trawen.png'
import imgTesis from '../assets/img/proyects/machineLearning.png'
import imgTumunan from '../assets/img/proyects/php-tumunan.png'

export const Proyects = () => {
  return (
    <>
        <section className="content-card projects" id="projects">
            <h1>Projectos</h1>
            <div className="col-2 project-list">
                <div className="project-tile">
                    <img src={ imgSureno }
                        alt="" />
                    <div className="overlay angular">
                        <div className="project-description">
                            <h3>Café Sureño</h3>
                            <p>
                                Este proyecto contó con relación con el cliente para la toma de requisitos. Tomas de pedidos y agendar pedidos para el retiro en periodo de pandemia fueron las causas de la actualización del negocio.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-tile">
                    <img src={ imgTrawen }
                        alt="" />
                    <div className="overlay angular">
                        <div className="project-description">
                            <h3>Trawen</h3>
                            <p>
                                Dashboard para tener registrados a los jugadores y socios del Club de Voleibol de Trawen.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-tile">
                    <img src={ imgTesis }
                        alt="" />
                    <div className="overlay python">
                        <div className="project-description">
                            <h3>Tesis</h3>
                            <p>
                                Investigación de Técnicas clásicas de Machine Learning para predecir las posibles secuelas de pacientes post ACV Isquémico.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-tile">
                    <img src={ imgTumunan }
                        alt="" />
                    <div className="overlay php">
                        <div className="project-description">
                            <h3>Viña Tumuñan</h3>
                            <p>
                                Aplicación para cliente de San Fernando con inventario y página web subida a su servidor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://github.com/amarianjel">ver más...</a>
        </section>
    </>
  )
}
