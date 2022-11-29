import { useRouteError, Link } from "react-router-dom"

const Notfound = () => {
    const error = useRouteError();
    return(
        <>
            <h1>Error 404</h1>
            <p>Apgina no encontrada</p>
            <Link to="/">Regresar a la pagina de inicio</Link>      
        </>
    )
}
export default Notfound

//Esta pagina trata el tema de los errores 404
//Usando el hook useRouterError