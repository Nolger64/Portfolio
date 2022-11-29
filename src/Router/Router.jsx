import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Carrer from "../Components/Career/Carrer";
import Home from "../Components/Home/Home";
import Notfound from "../Components/Notfound/Notfound";
import Portfolio from "../Components/Portfolio/Portfolio";
import Root from "../Components/Root/Root";
import Skills from "../Components/Skills/Skills";
import Recommendations from "../Components/Recommendations/Recommendations";
import Contact from "../Components/Contact/Contact";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Notfound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: '/Portfolio',
                element: <Portfolio />
            },
            {
                path: '/Skills',
                element: <Skills />
            },
            {
                path: "/Carrer",
                element: <Carrer />
            },
            {
                path:"/Recommendations",
                element: <Recommendations />
            },
            {
                path: "/Contact",
                element: <Contact />
            }
        ]
    }
    
])