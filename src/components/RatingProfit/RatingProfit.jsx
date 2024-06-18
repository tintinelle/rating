import style from "./styles.module.scss";
import Image from "../../images/ratingProfit/social-media-discussion.svg";

const RatingProfit = () => {
  return (
    <section className={style["banner"]}>
      <div className={style["banner__wrapper-left"]}>
        <h3 className={style["banner__title"]}>
          <span
            className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
          >
            Зачем мне, как поставщику{" "}
          </span>
          ваш рейтинг
        </h3>
        <p className={style["banner__description"]}>
          Вы можете рассказать о себе тем, кто ищет ваши услуги. Как правило,
          участники рейтинга перебирают разных поставщиков в поисках идеального
          партнера.
        </p>
      </div>
      <img
        className={style["banner__image"]}
        src={Image}
        alt="Люди делятся мнениями"
      />
    </section>
  );
};

export default RatingProfit;
