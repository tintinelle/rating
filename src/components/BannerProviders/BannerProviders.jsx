import style from "./styles.module.scss";

const BannerProviders = () => {
  return (
    <section className={style["banner"]}>
      <h1 className={style["banner__title"]}>
        Добавить поставщика лидов на банкротство
      </h1>
    </section>
  );
};

export default BannerProviders;
