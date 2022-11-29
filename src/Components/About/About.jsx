import Cards from "./Cards/Cards";
import img from "../../Assets/code.png";
import style from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={style.ContainerAbout}>
        <div className={style.ContainerGridExp}>
          <Cards tittle="Progamador" subTittle="2 años como" img={img} />
          <Cards tittle="Progamador" subTittle="2 años como" img={img} />
          <Cards tittle="Progamador" subTittle="2 años como" img={img} />
        </div>
        <div className={style.ContainerBannerExp}>
           <div className={style.BannerExp}>
                <div className={style.bannerInfo}>
                    <span>Conocimientos es</span>
                    <h3>Front-end</h3>
                </div>
                <div className={style.bannerInfo}>
                    <span>Decenas de projectos</span>
                    <h3>Experiencia</h3>
                </div>
                <div className={style.bannerInfo}>
                    <span>Diseño frerlancer y</span>
                    <h3>UI - UX</h3>
                </div>
            </div> 
        </div>
      </div>
    </>
  );
};
export default About;
