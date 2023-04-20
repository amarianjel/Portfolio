import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/charizard-mega-x.gif";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Home = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Programador Web", "Programador" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const handleClick = () =>{
    const click = document.getElementById('contact');
    click.scrollIntoView({ behavior: "smooth"});
  }

  return (
    <>
      <section className="banner" id="home">
        <section className="content-card home" id="welcome-section">
          <div className="container">
            <div className="row">
            <div className="col-12 md-6 xs-5"></div>
            <TrackVisibility>
                      {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Bienvenid@ a mi Portafolio</span>
                        <h1>{`Hola! Soy Abraham`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Programador Web", "Programador" ]'><span className="wrap">{text}</span></span></h1>
                          <p>Motivado, proactivo</p>
                          <button onClick={ handleClick }>Conectemos <ArrowRightCircle size={25} /></button>
                      </div>}
            </TrackVisibility>
            </div>
            <div className="row">
              <div className="col-12 md-6 xs-5">
              <TrackVisibility>
                      {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                          <img src={headerImg} alt="Header Img"/>
                        </div>}
                    </TrackVisibility>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
