import style from "./styles.module.scss";

const WhyRating = () => {
  return (
    <section className={style["banner"]}>
      <div className={style["banner__wrapper-left"]}>
        <h3 className={style["banner__title"]}>
          <span
            className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
          >
            Почему{" "}
          </span>
          мы создали рейтинг поставщиков лидов на банкротство?
        </h3>
        <p className={style["banner__description"]}>
          Чтобы сделать наше бизнес-сообщество более чистым, а также внести свой
          вклад в борьбу с интернет мошенниками, было принято решение создать
          данный рейтинг
        </p>
      </div>

      <div className={style["banner__wrapper-right"]}>
        <h4 className={style["banner__subtitle"]}>
          В связи с тем, что ниша БФЛ развивается очень активно, параллельно с
          ней развиваются и консалтинговые компании.
        </h4>
        <p className={style["banner__info"]}>
          Однако, с ростом количества поставщиков лидов на банкротство, растет и
          количество мошенников, которые обманывают юристов, и продают
          некачественный трафик.
        </p>
      </div>
    </section>
  );
};

export default WhyRating;
