import style from './Cards.module.css'
const Cards = (props) => {
  return (
    <>
      <div className={style.cardsContainer}>
        <img className={style.imgCardsAbout} src={props.img} alt="" />
        <span className={style.subTittleCardsAbout}>{props.subTittle}</span>
        <h3 className={style.tittleCardsAbout}>{props.tittle}</h3>
      </div>
    </>
  );
};
export default Cards;
