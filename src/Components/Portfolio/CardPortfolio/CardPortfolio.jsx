import style from './CardPortfolio.module.css';

const CardPortfolio = (props) => {
  const len = props.Leng.map((len, index) => {
    return <p className={style.cardLen} key={index}>{len}</p>
  })
  return (
    <>
      <div className={style.cardContainer} onClick={() => window.open(props.Link)}>
        <h6 className={style.cardTittle}>{props.Tittle}</h6>
        <p className={style.cardSubtittle}>{props.InfoCard}</p>
        <div className={style.cardLenContainer}>
          {len}
        </div>
        <div className={style.cardImgContainer}>
        <img src={props.img1} alt="" className={style.cardImg}/>
        </div>
        
      </div>
    </>
  );
};
export default CardPortfolio;
