import style from "./CarrerCard.module.css";

const CarrerCard = (props) => {
  return (
    <>
      <div className={style.CarrerCardContainer}>
        <div className={style.CarrerCardTittle}>{props.tittle}</div>
        <p className={style.CarrerCardSubTittle}>{props.parr}</p>
        <div className={style.CarrerCardFoot}><p>{props.date.start}</p><p>{props.date.end}</p></div>
      </div>
    </>
  );
};
export default CarrerCard;
