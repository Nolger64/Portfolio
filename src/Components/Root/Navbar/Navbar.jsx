import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { contextPortfolio } from "../../../Contexts/ContextPortfolioPorvider";

//Componnete Direcciones del navBar//

const NavLinks = (props) => {
  //   Cerra el menu cada ves que selecione una opcion  //
  const CloseMenu = () => {
    props.setOpenMenu(false);
  };

  return (
    <>
      <NavLink onClick={CloseMenu} className="nav" to="/">
        <span> Home</span>
      </NavLink>
      <NavLink  onClick={CloseMenu} to="/About">
        <span>Sobre Mi</span>
      </NavLink>
      <NavLink  onClick={CloseMenu} to="/Portfolio">
        <span>Portfolio</span>
      </NavLink>
      <NavLink  onClick={CloseMenu} to="/Skills">
        <span>Habilidades</span>
      </NavLink>
      <NavLink  onClick={CloseMenu} to="/Carrer">
        <span>Carrera</span>
      </NavLink>
      <NavLink  onClick={CloseMenu} to="/Recommendations">
        <span>Recomendaciones</span>
      </NavLink>
      <NavLink  onClick={CloseMenu} to="/Contact">
        <span>Cotacto</span>
      </NavLink>
    </>
  );
};

//----------------------------------------------------------------//

//      Componente Navbar funcion principal     //

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const ContextPage = useContext(contextPortfolio);

  //  Abrir y cerrar menu hambuesa cuando esta modo movil   //
  const hambur = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  //Rertorna las equitas graficas principales//
  return (
    <>
      <div className="Nav-bar">
        <div className="container">
          <div className="left-bar">
            <p>Nolger.com </p>
          </div>
          <div className="rigth-bar">
            <NavLinks />
          </div>
          <div className="hambur">
            {openMenu ? (
              <p onClick={hambur} className="hambur-icon-cerrar">
                X
              </p>
            ):(
              <p onClick={hambur} className="hambur-icon">
                lll
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="menu-responsive">
        {openMenu && (
          <NavLinks setOpenMenu={setOpenMenu} className="responsive-nav" />
        )}
      </div>
    </>
  );
};
export default NavBar;
