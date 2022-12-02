import { useState } from "react";
import Loader from "../Loader/Loader";
import Gridportfolio from "./GridPortfolio/GridPortfolio";
import style from "./Portfolio.module.css";
const Portfolio = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 500);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className={style.portfolioContainer}>
          <span className="btn-1">⛓ Portfolio</span>
          <div className={style.portfolioTittle}>
            <h3 className={style.portfolioTittle}>Trabajos y proyectos</h3>
            <div className={style.portfolioContainerNav}>
              <button className={style.portfolioBtnNav}>Desarrollo</button>
              <button className={style.portfolioBtnNav}>Diseño</button>
              <button className={style.portfolioBtnNav}>Aplicaciones</button>
            </div>
          </div>
          <div className={style.containerPortfolioGrid}>
            <Gridportfolio />
          </div>
          <div className={style.portfolioFootMore}>
            <button className={style.portfoliolinkMore}>
              Ver más proyectos ➡️
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Portfolio;
