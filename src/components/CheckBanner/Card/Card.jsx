import style from "./styles.module.scss";
import useWindowDimensions from "../../../services/useWindowDimensions";
import { useState, useEffect } from "react";

const Card = ({ item }) => {
  const { width } = useWindowDimensions();
  const [cardHeight, setCardHeight] = useState(item.height);
  useEffect(() => {
    if (width < 801) setCardHeight("30vw");
    if (width < 501) setCardHeight(item.heightMobile);
  }, [width]);

  return (
    <article className={style["card"]} style={{ minHeight: `${cardHeight}` }}>
      <img src={item.icon} alt="Иконка" className={style["card__icon"]} />
      <h4 className={style["card__title"]}>{item.title}</h4>
      <p className={style["card__description"]}>{item.description}</p>
    </article>
  );
};

export default Card;
