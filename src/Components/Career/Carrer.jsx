import { useState } from "react";
import Loader from "../Loader/Loader";
import style from "./Carrer.module.css";
import CarrerGrid from "./carrerGrid/CarrerGrid";
const Carrer = () => {
  const [load, setLoad] = useState(true);
  const [datePro, setDatePro] = useState(2018);
  const [dateStud, setDateStud] = useState(2017);

  setTimeout(() => {
    setLoad(false);
  }, 500);
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className={style.carrerContainer}>
          <p className="btn-1">💼 Carrera</p>
          <div className={style.carrerContainerdiv}>
            <div className={style.carrerPro}>
              <h3 className={style.carrerTittle}>Área profesional</h3>
              <h6 className={style.carrerSubTittle}>{datePro} - Actualmente</h6>
              <CarrerGrid state="pro" />
            </div>
            <div className={style.carrerStud}>
              <h3 className={style.carrerTittle}>Área académica</h3>
              <h6 className={style.carrerSubTittle}>{dateStud} - Actualmente</h6>
              <CarrerGrid state="stud" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Carrer;
