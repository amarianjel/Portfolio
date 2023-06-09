import { useState } from 'react';

import imgHTML from '../assets/img/skills/html.png'
import imgCSS from '../assets/img/skills/css3.png'
import imgJAVASCRIPT from '../assets/img/skills/javascript.png'
import imgBoostrap from '../assets/img/skills/bootstrap-logo-shadow.png'
import imgNodejs from '../assets/img/skills/node.png'
import imgReact from '../assets/img/skills/react.png'
import imgPostgreSql from '../assets/img/skills/postgreSql.png'
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
import imgMongoDB from '../assets/img/skills/mongodb.png'
import imgPostman from '../assets/img/skills/postman.png'
import imgDjango from '../assets/img/skills/django.png'
import imgSelenium from '../assets/img/skills/selenium.png'


export const About = () => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(true);
    };


return (
    <>
        <section className="content-card about" id="about">
            <h1>Sobre mi</h1>
            <div className="about-item about-me">
                <p>Egresado del área de las Ciencias de la Computación, Universidad del Bío Bío,  Licenciado en Ciencias de la Ingeniería e Ingeniero Civil Informático. Diplomado en Emprendimiento y Liderazgo que imparte dicha Universidad.  Tesis “Análisis de datos en Pacientes post ACV isquémico, usando Técnicas clásicas de Machine learning” del área de salud.</p>
                <p>He trabajado en diversos proyectos de Back-end y Front-end con metodologías de Scrum aportando en la formación de directrices para el proyecto y metodología Ágil en directa colaboración con el cliente.</p>
                <p>Durante este periodo he estado colaborando en proyectos de distintas áreas como, salud, deporte y negocios.</p>
            </div>
            <div className="col-2 skillLenguaje">
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
                        {hover ? <img src={ imgBoostrap } alt="Imagen Habilidad" /> : 'Boostrap'}
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
                        {hover ? <img src={ imgNodejs } alt="Imagen Habilidad" /> : 'NodeJs'}
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
                        {hover ? <img src={ imgReact } alt="Imagen Habilidad" /> : 'React'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgDjango } alt="Imagen Habilidad" /> : 'Django'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgSelenium } alt="Imagen Habilidad" /> : 'Data extraction'}
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
                        {hover ? <img src={ imgMachineLearning } alt="Imagen Habilidad" /> : 'Machine Learning'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgPostgreSql } alt="Imagen Habilidad" /> : 'DB Relacional'}
                    </span>
                    <span 
                        className={hover ? 'imgSkill' : 'skill'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hover ? <img src={ imgMongoDB } alt="Imagen Habilidad" /> : 'DB no Relacional'}
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
                        {hover ? <img src={ imgBPMN } alt="Imagen Habilidad" /> : 'BPMN'}
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
                        {hover ? <img src={ imgPostman } alt="Imagen Habilidad" /> : 'Check Point'}
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
