import style from "./styles.module.scss";

const Advertisement = () => {
  return (
    <section className={style["banner"]}>
      <div className={style["banner__wrapper-left"]}>
        <h3 className={style["banner__title"]}>
          Есть ли какая-либо
          <span
            className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
          >
            {" "}
            реклама внутри рейтинга
          </span>
        </h3>
        <p className={style["banner__description"]}>
          Администрирование ваших оценок и отзывов требует времени и сил, а
          значит и должна каким-либо образом вознаграждаться. Мы не продаем
          рекламу в виде накрутки отзывов или рейтингов.
        </p>
      </div>

      <div className={style["banner__wrapper-right"]}>
        <h4 className={style["banner__subtitle"]}>
          <span
            className={`${style["banner__subtitle"]}  ${style["banner__subtitle_bold"]}`}
          >
            Единственная платная реклама{" "}
          </span>
          - это баннеры, а также возможность сделать ссылку сайта лидогенератора
          кликабельной
        </h4>
        <p className={style["banner__info"]}>
          Данная реклама не влияет на общественное мнение, однако позволяет
          администрации и дальше заниматься проектом.
        </p>
      </div>
    </section>
  );
};

export default Advertisement;
