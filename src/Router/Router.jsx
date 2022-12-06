import { createHashRouter } from "react-router-dom";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Notfound from "../Components/Notfound/Notfound";
import Portfolio from "../Components/Portfolio/Portfolio";
import Root from "../Components/Root/Root";
import Skills from "../Components/Skills/Skills";
import Recommendations from "../Components/Recommendations/Recommendations";
import Contact from "../Components/Contact/Contact";
import Loader from "../Components/Loader/Loader";

export const Router = createHashRouter([
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
                path:"/Recommendations",
                element: <Recommendations />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/Loader",
                element: <Loader />
            }
        ]
    }
    
])