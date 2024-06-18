import style from "./styles.module.scss";
import CheckBannerData from "../../constants/CheckBanner/CheckBannerData";
import Card from "./Card/Card";
import Image from "../../images/checkBanner/background.webp";

const CheckBanner = () => {
  return (
    <section className={style["banner"]}>
      <img
        className={style["banner__image"]}
        src={Image}
        alt="Мужчина сидит на сайте"
      />
      <h3 className={style["banner__title"]}>
        <span
          className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
        >
          Какие лиды{" "}
        </span>
        на банкротство физического лица
        <span
          className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
        >
          {" "}
          покупать не стоит
        </span>
      </h3>
      <p className={style["banner__description"]}>
        При выборе лидогенератора следует внимательно изучить:
      </p>
      <div className={style["banner__cards"]}>
        {CheckBannerData.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default CheckBanner;
