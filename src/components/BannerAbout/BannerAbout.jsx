import style from "./styles.module.scss";

const BannerAbout = () => {
  return (
    <section className={style["banner"]}>
      <h1 className={style["banner__title"]}>
        <span
          className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
        >
          Рейтинг поставщиков лидов{" "}
        </span>
        на банкротство физического лица
      </h1>
    </section>
  );
};

export default BannerAbout;
