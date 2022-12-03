import { useState } from "react";
import Loader from "../Loader/Loader";
import style from "./Contact.module.css";

const Contact = () => {
  const [load, setLoad] = useState(true);
  const goWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=573126613981");
  };
  const goEmail = () => {
    window.open("mailto:nolgerluisrodriguezmedina@gmail.com");
  };
  setTimeout(() => {
    setLoad(false);
  }, 500);
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className={style.contactContainer}>
          <div className={style.contactBtnHi}>
            <p className="btn-1">📬 Contacta Me</p>
          </div>
          <h1 className={style.contactTittle}>¡Vamos a conversar!</h1>
          <div className={style.contactBtnsContainer}>
            <p className={style.contactBtnW} onClick={goWhatsapp}>📲 Vamos al Whatsapp</p>
            <p className={style.contactBtnE} onClick={goEmail}>
              Enviarme un correo: <br />
              Nolgerluisrodriguezmedina@gmail.com
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Contact;
