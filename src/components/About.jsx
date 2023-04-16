import imgBoostrap from '../assets/img/skills/bootstrap-logo-shadow.png'
export const About = () => {
    /*var boostrap = document.getElementById('boostrap');

    boostrap.onclick = function(){
        boostrap.src = imgBoostrap;
    }*/

    /*document.getElementById("boostrap").innerHTML = "<img src={ imgBoostrap } className='mark'>";*/

  return (
    <>
        <section className="content-card about" id="about">
            <h1>Sobre mi</h1>
            <div className="about-item about-me">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                    non dolore facere reiciendis iusto nemo tempore laboriosam
                    laborum fugit dolorum totam incidunt tempora laudantium
                    obcaecati natus sit, aspernatur consectetur! Voluptates?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                    consectetur quos fugiat fugit! Officiis, temporibus.
                </p>
            </div>
            <div className="col-2">
                <div className="about-item skills">
                    <h1>Habilidades</h1>
                    <span className="skill">HTML</span>
                    <span className="skill">CSS</span>
                    <span className="skill">JavaScript</span>
                    <span className="skill" id="boostrap" >Boostrap</span>
                    <span className="skill">Node.js</span>
                    <span className="skill">React</span>
                    <span className="skill">SQL</span>
                    <span className="skill">Git</span>
                    <span className="skill">API</span>
                    <span className="skill">Unix/Linux</span>
                    <span className="skill">Jira</span>
                    <span className="skill">Confluence</span>
                    <span className="skill">Figma</span>
                </div>

                <div className="about-item languages">
                    <h1>Lenguajes</h1>
                    <div className="language">
                        <p>Español</p>
                        <span className="bar"><span className="espanol"></span></span>
                    </div>
                    <div className="language">
                        <p>English</p>
                        <span className="bar"><span className="english"></span></span>
                    </div>
                    <div className="language">
                        <p>Korean</p>
                        <span className="bar"><span className="korean"></span></span>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
