import style from "./styles.module.scss";

const HowToAdd = () => {
  return (
    <section className={style["banner"]}>
      <div className={style["banner__wrapper-left"]}>
        <h3 className={style["banner__title"]}>
          <span
            className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
          >
            Как{" "}
          </span>
          добавить компанию в рейтинг лидогенераторов БФЛ
        </h3>
      </div>

      <div className={style["banner__wrapper-right"]}>
        <p className={style["banner__info"]}>
          Чтобы попасть в рейтинг поставщиков лидов просто заполните форму на
          сайте. Поставщик добавляется только если передает администрации
          регистрационные данные, а также контакты. Если у поставщика нет
          публичного сайта, он не может быть размещен в каталоге
        </p>
      </div>
    </section>
  );
};

export default HowToAdd;
