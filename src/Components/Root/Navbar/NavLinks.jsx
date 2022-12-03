import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
  
  return (
    <>
      <NavLink onClick={props.setOpenMenu} className="nav" to="/">
        <span> Home</span>
      </NavLink>
      <NavLink onClick={props.setOpenMenu} to="/About">
        <span>Sobre Mi</span>
      </NavLink>
      <NavLink onClick={props.setOpenMenu} to="/Portfolio">
        <span>Portfolio</span>
      </NavLink>
      <NavLink onClick={props.setOpenMenu} to="/Skills">
        <span>Habilidades</span>
      </NavLink>
      <NavLink onClick={props.setOpenMenu} to="/Carrer">
        <span>Carrera</span>
      </NavLink>
      <NavLink onClick={props.setOpenMenu} to="/Contact">
        <span>Cotacto</span>
      </NavLink>
    </>
  );
};
/*

      <NavLink onClick={props.setOpenMenu} to="/Recommendations">
        <span>Recomendaciones</span>
      </NavLink>

*/
export default NavLinks;
