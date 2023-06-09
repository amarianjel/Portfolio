import { Link } from 'react-router-dom'
import './pageNotFound.css'

export const PageNotFound = () => {
    return (
    <>
        <section className="page_404">
            <div className="container">
                <div className="row">	
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3>Parece que estás perdido</h3>
                                <p>¡La página que buscas no está disponible!</p>
                                <Link to="/" className="link_404">Ir a Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
