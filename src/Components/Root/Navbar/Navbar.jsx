import NavLinks from "./NavLinks";
import NavBarHambur from "./NavBarHambur";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    {
      openMenu ? setOpenMenu(false) : setOpenMenu(true);
    }
  };
  return (
    <>
      <div className="Nav-bar">
        <div className="container">
          <div className="left-bar">
            <p>Nolger.com</p>
          </div>
          <div className="rigth-bar">
            <NavLinks />
          </div>
          <div className="hambur">
            <NavBarHambur setOpenMenu={handleOpenMenu} openMenu={openMenu} />
          </div>
        </div>
      </div>
      <div className="menu-responsive">
        {openMenu && <NavLinks setOpenMenu={handleOpenMenu} className="responsive-nav" />}
      </div>
    </>
  );
};
export default NavBar;
