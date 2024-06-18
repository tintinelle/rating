import style from "./styles.module.scss";
import SquaresArrowsIcon from "../../images/icons/SquaresArrows";
import ThumbsUpIcon from "../../images/icons/ThumbsUpRed";
import DialogsIcon from "../../images/icons/Dialogs";

const Estimation = () => {
  return (
    <section className={style["banner"]}>
      <h3 className={style["banner__title"]}>
        <span
          className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
        >
          Как{" "}
        </span>
        проходит оценка лидов на банкротство
      </h3>
      <p className={style["banner__description"]}>
        Оценка осуществляется за счет посетителей сайта. При выборе оценки мы
        запрашиваем номер телефона. Если оценка одно из лидогенераторов уже
        производилась с использованием данного телефона, второй раз оценку
        совершить нельзя
      </p>
      <div className={style["banner__cards"]}>
        <article className={style["banner__card"]}>
          <SquaresArrowsIcon />
          <p className={style["banner__info"]}>
            Мы не оцениваем каким-либо образом лидогенераторов, а также никаким
            образом не указываем, кто плохой, а кто хороший.
          </p>
        </article>
        <article className={style["banner__card"]}>
          <ThumbsUpIcon />
          <p className={style["banner__info"]}>
            Насколько данная оценка объективная - решать только вам
          </p>
        </article>
        <article className={style["banner__card"]}>
          <DialogsIcon />
          <p className={style["banner__info"]}>
            Мы только собираем общественное мнение пользователей сети интернет,
            и рассказываем о нем на нашем сайте.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Estimation;
