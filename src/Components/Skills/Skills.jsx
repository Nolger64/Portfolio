import { useState } from "react";
import Loader from "../Loader/Loader";
import tech1 from '../../Assets/tecnologiaDiarias.png';
import tech1Res from '../../Assets/tecnologiaDiariasMobile.png';
import tech2 from '../../Assets/tecnologiaNoDiarias.png';
import tech2Res from '../../Assets/tecnologiaNoDiariasMobile.png'
import style from './Skills.module.css';
import useScreenSize from "../../Hook/useScreenSize";

const Skills = () => {
  const [load, setLoad] = useState(true);
  const { width } = useScreenSize();
  setTimeout(() => {
    setLoad(false);
  }, 500);

  return (
  <>
  {load ? (
    <Loader />
  ):(
    <div className={style.skillsContainer}>
        <p className="btn-1 mar-1">👩‍💻 Habilidades - Experiencia</p>
        <div className={style.skillsHab}>
            <h3 className={style.skillsTittle}>Tecnologías que uso día a día.</h3>
            {width < 800 ? (
                <img className={style.skillsImg} src={tech1Res} alt="" />
            ):(
                <img className={style.skillsImg} src={tech1} alt="" />
            )}
        </div>
        <div className={style.skillsHab}>
            <h3 className={style.skillsTittle}>Otras tecnologías que con las que he trabajado.</h3>
            {width < 800 ? (
                <img className={style.skillsImg} src={tech2Res} alt="" />
            ):(
                <img className={style.skillsImg} src={tech2} alt="" />
            )}
        </div>
    </div>
  )}
  </>
  );
};
export default Skills;
