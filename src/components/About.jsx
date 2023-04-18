import { useState } from 'react';

import imgHTML from '../assets/img/skills/html.png'
import imgCSS from '../assets/img/skills/css3.png'
import imgJAVASCRIPT from '../assets/img/skills/javascript.png'
import imgBoostrap from '../assets/img/skills/bootstrap-logo-shadow.png'
import imgNodejs from '../assets/img/skills/node.png'
import imgReact from '../assets/img/skills/react.png'
import imgSql from '../assets/img/skills/sql.png'
import imgGit from '../assets/img/skills/git.png'
import imgTrello from '../assets/img/skills/trello.png'
import imgPhp from '../assets/img/skills/php.png'
import imgPython from '../assets/img/skills/python.png'
import imgJava from '../assets/img/skills/java.png'
import imgMachineLearning from '../assets/img/skills/jupyter.png'
import imgAngular from '../assets/img/skills/angular.png'
import imgYii2 from '../assets/img/skills/yii.png'
import imgMaterialize from '../assets/img/skills/materialize.png'
import imgBPMN from '../assets/img/skills/bizagi.png'

export const About = () => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };


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
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgHTML } alt="Imagen Habilidad" /> : 'HTML'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgCSS } alt="Imagen Habilidad" /> : 'CSS'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgJAVASCRIPT } alt="Imagen Habilidad" /> : 'JavaScript'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgBoostrap } alt="Imagen Habilidad" /> : 'Boostrap'}
                    </span>
                    {/*  */}
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgNodejs } alt="Imagen Habilidad" /> : 'NodeJs'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgReact } alt="Imagen Habilidad" /> : 'React'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgSql } alt="Imagen Habilidad" /> : 'SQL'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgGit } alt="Imagen Habilidad" /> : 'Git'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgTrello } alt="Imagen Habilidad" /> : 'Trello'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgPhp } alt="Imagen Habilidad" /> : 'PHP'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgPython } alt="Imagen Habilidad" /> : 'Python'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgJava } alt="Imagen Habilidad" /> : 'Java'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgMachineLearning } alt="Imagen Habilidad" /> : 'Machine Learning'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgAngular } alt="Imagen Habilidad" /> : 'Angular'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgYii2 } alt="Imagen Habilidad" /> : 'Yii 2'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgMaterialize } alt="Imagen Habilidad" /> : 'Materialize CSS'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgBPMN } alt="Imagen Habilidad" /> : 'BPMN'}
                    </span>
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
