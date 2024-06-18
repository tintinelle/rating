import style from "./styles.module.scss";
import bannerImage from "../../images/bannerMain/girl_mobile.webp";
import ArrowPink from "../../images/icons/ArrowPink";
import ArrowRed from "../../images/icons/ArrowRed";
import useWindowDimensions from "../../services/useWindowDimensions";

const BannerMain = ({ handleOpenPopUpBuy }) => {
  const { width } = useWindowDimensions();

  return (
    <section className={style["banner"]}>
      <p className={style["banner__description"]}>
        Рейтинг лидогенераторов БФЛ
      </p>
      <h1 className={style["banner__title"]}>
        <span
          className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
        >
          Лиды на банкротство{" "}
        </span>
        физических лиц
      </h1>
      <h2 className={style["banner__subtitle"]}>
        У нас вы узнаете где купить качественные лиды на банкротство!
      </h2>
      <button
        className={style["banner__button"]}
        onClick={() => handleOpenPopUpBuy()}
      >
        Купить лиды в один клик
        {width < 801 ? <ArrowRed /> : <ArrowPink />}
      </button>
      {width < 601 && (
        <img
          src={bannerImage}
          alt="Девушка за ноутбуком"
          className={style["banner__image"]}
        />
      )}
    </section>
  );
};

export default BannerMain;
