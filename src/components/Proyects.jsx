import React from 'react'

export const Proyects = () => {
  return (
    <>
        <section className="content-card projects" id="projects">
            <h1>Projectos</h1>
            <div className="col-2 project-list">
                <div className="project-tile">
                    <img src="https://shots.codepen.io/nietoperq/pen/BaPJqGW-512.webp?version=1674304822"
                        alt="" />
                    <div className="overlay">
                        <div className="project-description">
                            <h3>Project 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Nisi aperiam voluptate accusamus velit omnis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-tile">
                    <img src="https://shots.codepen.io/nietoperq/pen/GRBOjyV-512.webp?version=1674084446"
                        alt="" />
                    <div className="overlay">
                        <div className="project-description">
                            <h3>Project 2</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Nisi aperiam voluptate accusamus velit omnis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-tile">
                    <img src="https://shots.codepen.io/nietoperq/pen/dyjWxgX-512.webp?version=1673554073"
                        alt="" />
                    <div className="overlay">
                        <div className="project-description">
                            <h3>Project 3</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Nisi aperiam voluptate accusamus velit omnis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-tile">
                    <img src="https://shots.codepen.io/nietoperq/pen/vYagdwo-512.webp?version=1673549480"
                        alt="" />
                    <div className="overlay">
                        <div className="project-description">
                            <h3>Project 4</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Nisi aperiam voluptate accusamus velit omnis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://github.com/nietoperq">see more...</a>
        </section>
    </>
  )
}
