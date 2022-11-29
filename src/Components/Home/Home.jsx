import "./Home.css";
import useScreenSize from "../../Hook/useScreenSize";

import perfil from "../../Assets/perfil.png";
import { useState } from "react";

const Home = () => {
  const { width } = useScreenSize();
  console.log(width);
  const goWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=573126613981");
  };
  const goHV = () => {
    window.open(
      "https://drive.google.com/file/d/1rPybjX3e6dW8O7ZDK3JXNw3qjFUFsnlM/view?usp=share_link"
    );
  };
  return (
    <>
      {width > 800 ? (
        <div className="home">
          <div className="left-home">
            <p className="btn-1">👋 Saludos</p>
            <h1 className="tittle-1">Nolger</h1>
            <h1 className="tittle-1">Rodriguez</h1>
            <p className="rol-dev">Front-end developer Ui Designer</p>
          </div>
          <div className="mid-home">
            <img src={perfil} alt="" className="fotoPerfil" />
          </div>
          <div className="rigth-home">
            <p className="link-1" onClick={goHV}>
              Descargar HV ⤵️
            </p>
            <button className="btn-2" onClick={goWhatsapp}>
              📲 Vamos al Whatsapp
            </button>
          </div>
        </div>
      ) : (
        <div className="home">
          <div className="mid-home">
            <img src={perfil} alt="" className="fotoPerfil" />
          </div>
          <div className="left-home">
            <p className="btn-1">👋 Saludos</p>
            <h1 className="tittle-1">Nolger</h1>
            <h1 className="tittle-1">Rodriguez</h1>
            <p className="rol-dev">Front-end developer Ui Designer</p>
          </div>
          <div className="rigth-home">
            <p className="link-1" onClick={goHV}>
              Descargar HV ⤵️
            </p>
            <button className="btn-2" onClick={goWhatsapp}>
              📲 Vamos al Whatsapp
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
