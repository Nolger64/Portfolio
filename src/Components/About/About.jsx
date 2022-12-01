import style from "./About.module.css";
import perfil from "../../Assets/perfil.png"

const About = () => {
  return (
    <>
      <div className={style.ContainerAbout}>
        <div className={style.ContainerBannerExp}>
          <div className={style.BannerExp}>
            <div className={style.bannerInfo}>
              <span>Conocimientos en</span>
              <h3>Desarrollo web.</h3>
            </div>
            <div className={style.bannerInfo}>
              <span>Decenas de proyectos</span>
              <h3>Experiencia</h3>
            </div>
            <div className={style.bannerInfo}>
              <span>Desarrollo freelance</span>
              <h3>UI - UX</h3>
            </div>
          </div>
        </div>
        <div className={style.containerPresentationAbout}>
          <div className={style.imgPresentationAbout}>
            <img src={perfil} alt="" className={style.imgPhotoAbout}/>
          </div>
          <div className={style.infoPresentationAbout}>
            <span className="btn-1">👨‍💻 Sobre Mí</span>
            <h1 className={style.tittleAbout}>Nolger Luis</h1>
            <h1 className={style.subtittleAbout}>Rodriguez Medina</h1>
            <p className={style.infAbout}>👋 Mi nombre es Nolger luis Rodríguez Medina. Pero usted me puede llamar Nolger. ¡Un pacer!</p>
            <p className={style.infAbout}>💻 Llevo más de 3 años diseñando y desarrollando interfaces con JavaScript, React JS y TypeScript.</p>
            <p className={style.infAbout}>📚 Actualmente estudio ingeniería de sistemas en la universidad de la Guajira.</p>
            <p className={style.infAbout}>💡 Estoy interesado en el desarrollo FullStack con React, React Native, Java Script, Type Script, Python, MySql.</p>
            <p className={style.infAbout}>🛸 Tratando de ser un poquito mejor día tras día.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
