import { Navigation, Header, Home, About, Proyects, Experience, Contact } from './components';

export const PortfolioApp = () => {
    return (
        <>
            <nav id="navbar" class="navbar"><a href="#"></a></nav>
            <div class="container">
                <Navigation></Navigation>
                <div class="portfolio">
                    <Header></Header>
                    <div class="content">
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