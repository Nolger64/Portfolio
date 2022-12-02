import { useState } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import style from "./GridPortfolio.module.css";
import Loader from "../../Loader/Loader";

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
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
          <div className={style.card}>
            <CardPortfolio />
          </div>
        </div>
      )}
    </>
  );
};
export default Gridportfolio;
