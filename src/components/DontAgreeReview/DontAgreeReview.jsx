import style from "./styles.module.scss";
import Image from "../../images/dontAgreeReview/strategy.svg";

const DontAgreeReview = () => {
  return (
    <section className={style["banner"]}>
      <img
        className={style["banner__image"]}
        src={Image}
        alt="Мужчина размышляет"
      />
      <div className={style["banner__wrapper-right"]}>
        <h3 className={style["banner__title"]}>
          <span
            className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
          >
            Если я не согласен с отзывом,
          </span>{" "}
          который был размещен на сайте
        </h3>
        <p className={style["banner__description"]}>
          Вы можете отправить запрос через форму обратной связи. Мы начнем
          разбирательство. Если окажется, что отзыв был размещен по ошибке, он
          будет удален.
        </p>
      </div>
    </section>
  );
};

export default DontAgreeReview;
