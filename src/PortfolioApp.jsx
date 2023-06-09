import { Navigation, Header, Home, About, Proyects, Experience, Contact } from './components';

export const PortfolioApp = () => {
    return (
        <>
            <nav id="navbar" className="navbar"><a href=""></a></nav>
            <div className="container">
                <Navigation></Navigation>
                <div className="portfolio">
                    <Header></Header>
                    <div className="content">
                        <Home></Home>
                        <About></About>
                        <Proyects></Proyects>
                        <Experience></Experience>
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        </>
    )
}