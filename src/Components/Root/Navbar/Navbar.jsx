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
      <NavLink to="/">
        <span onClick={CloseMenu}> Home</span>
      </NavLink>
      <NavLink to="/About">
        <span onClick={CloseMenu}>Sobre Mi</span>
      </NavLink>
      <NavLink to="/Portfolio">
        <span onClick={CloseMenu}>Portfolio</span>
      </NavLink>
      <NavLink to="/Skills">
        <span onClick={CloseMenu}>Habilidades</span>
      </NavLink>
      <NavLink to="/Carrer">
        <span onClick={CloseMenu}>Carrera</span>
      </NavLink>
      <NavLink to="/Recommendations">
        <span onClick={CloseMenu}>Recomendaciones</span>
      </NavLink>
      <NavLink to="/Contact">
        <span onClick={CloseMenu}>Cotacto</span>
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
