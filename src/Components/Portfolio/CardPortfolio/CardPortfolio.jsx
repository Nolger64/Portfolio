import style from './CardPortfolio.module.css';
import img1 from '../../../Assets/whatsapp.png';
const CardPortfolio = () => {
  return (
    <>
      <div className={style.cardContainer}>
        <h6 className={style.cardTittle}>Titulo</h6>
        <p className={style.cardSubtittle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quia vel quae possimus ipsa, quas exercitationem repellat mollitia totam ab libero?</p>
        <div className={style.cardLenContainer}>
            <p className={style.cardLen}>React </p><p className={style.cardLen}>Node JS</p>
        </div>
        <div className={style.cardImgContainer}>
        <img src={img1} alt="" className={style.cardImg}/>
        </div>
        
      </div>
    </>
  );
};
export default CardPortfolio;
