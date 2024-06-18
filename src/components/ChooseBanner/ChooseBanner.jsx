import style from "./styles.module.scss";

const ReviewsBanner = () => {
  return (
    <section className={style["banner"]}>
      <div className={style["banner__wrapper-left"]}>
        <h3 className={style["banner__title"]}>
          <span
            className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
          >
            Как выбрать{" "}
          </span>
          поставщика и купить лиды на банкротство
        </h3>
        <p className={style["banner__info"]}>
          Самое главное - это то, чтобы вам было комфортно общаться с
          представителями компании, а их лиды оказались качественными и
          выгодными для вас
        </p>
      </div>

      <div className={style["banner__wrapper-right"]}>
        <p className={style["banner__description"]}>
          Мы рекомендуем при выборе поставщика лидов на банкротство
          руководствоваться отзывами и рейтингом, а также своими личными
          предпочтениями.
        </p>
        <p className={style["banner__recommendations"]}>(наши рекомендации)</p>
      </div>
    </section>
  );
};

export default ReviewsBanner;
