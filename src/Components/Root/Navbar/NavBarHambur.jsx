const NavBarHambur = (props) => {

  return (
    <>
      {props.openMenu ? (
        <p onClick={props.setOpenMenu} className="hambur-icon-cerrar">
          X
        </p>
      ) : (
        <p onClick={props.setOpenMenu} className="hambur-icon">
          lll
        </p>
      )}
      
    </>
  );
};
export default NavBarHambur;
