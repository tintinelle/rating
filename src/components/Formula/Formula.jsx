import style from "./styles.module.scss";

const Formula = () => {
  return (
    <section className={style["banner"]}>
      <div className={style["banner__title-group"]}>
        <h3 className={style["banner__title"]}>
          Формула расчета рейтинга лидогенератора
        </h3>
        <p className={style["banner__description"]}>
          Формула очень простая и прозрачная, однако, максимально легко
          определяет уровень соотношения положительных и отрицательных оценок
        </p>
      </div>
      <div className={style["banner__card"]}>
        <h4 className={style["banner__subtitle"]}>Расчет рейтинга:</h4>
        <p className={style["banner__info"]}>
          (Положительные оценки - Отрицательные оценки) / Положительные оценки *
          100%.
        </p>
      </div>
    </section>
  );
};

export default Formula;
