import { useState } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import style from "./GridPortfolio.module.css";
import Loader from "../../Loader/Loader";

/*Imagenes*/

import imgWhatsapp from "../../../Assets/imgProyectos/LinkWhatsapp.png";
import imgFacebook from "../../../Assets/imgProyectos/Facebook.png";
import imgGoogle from "../../../Assets/imgProyectos/Google.png";
import imgLightBeer from "../../../Assets/imgProyectos/LightBeer.png";
import imgPokeApi from "../../../Assets/imgProyectos/PokeApi.png";
import imgPresentacion from "../../../Assets/imgProyectos/Presentacion.png";

/*Descripciones*/

import {
  Whatsapp,
  Google,
  Facebook,
  PokeApi,
  LightBeer,
  Presentacion,
} from "../../../Assets/Description/Descriptions";

/*Lenguajes*/

import {
  lenWhatsapp,
  lenGoogle,
  lenFacebook,
  lenPokeApi,
  lenLightBeer,
  lenPresentacion,
} from "../../../Assets/Leng/Leng";

const Gridportfolio = () => {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 500);
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className={style.grid}>
          <div className={style.card}>
            <CardPortfolio
              Link="https://linkwhat.netlify.app/"
              Tittle="Whatsapp Link"
              InfoCard={Whatsapp}
              Leng={lenWhatsapp}
              img1={imgWhatsapp}
            />
          </div>
          <div className={style.card}>
            <CardPortfolio
              Link="https://nolgerfacebook.netlify.app/"
              Tittle="Interfaz Facebook"
              InfoCard={Facebook}
              Leng={lenFacebook}
              img1={imgFacebook}
            />
          </div>
          <div className={style.card}>
            <CardPortfolio
              Link="https://googlenolger.netlify.app/"
              Tittle="Interfaz Google"
              InfoCard={Google}
              Leng={lenGoogle}
              img1={imgGoogle}
            />
          </div>
          <div className={style.card}>
            <CardPortfolio
              Link="https://pokemon007.netlify.app"
              Tittle="Pokemon Api"
              InfoCard={PokeApi}
              Leng={lenPokeApi}
              img1={imgPokeApi}
            />
          </div>
          <div className={style.card}>
            <CardPortfolio
              Link="https://nolgerlohgin1.netlify.app"
              Tittle="Light Beer"
              InfoCard={LightBeer}
              Leng={lenLightBeer}
              img1={imgLightBeer}
            />
          </div>
          <div className={style.card}>
            {" "}
            <CardPortfolio
              Link="https://presentacion000.netlify.app"
              Tittle="Presentacion"
              InfoCard={Presentacion}
              Leng={lenPresentacion}
              img1={imgPresentacion}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Gridportfolio;
