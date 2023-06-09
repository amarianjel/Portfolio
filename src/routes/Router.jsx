import { createBrowserRouter } from 'react-router-dom'
import { PageNotFound } from '../pageNotFound/PageNotFound'
import { PortfolioApp } from '../PortfolioApp';


const routes = [
    {
        path: "/",
        element: <PortfolioApp />,
    },

    {
        path: "*",
        element: <PageNotFound />,
    },
];

const options = {
    basename: '/Portfolio/',
};

const router = createBrowserRouter(routes, options);


export default router;