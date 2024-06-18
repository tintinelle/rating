import style from "./styles.module.scss";
import IdeaIcon from "../../images/icons/Idea";
import TickIcon from "../../images/icons/Tick";

const WhyToBuy = () => {
  return (
    <section className={style["banner"]}>
      <div className={style["banner__title-group"]}>
        <h3 className={style["banner__title"]}>
          <span
            className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
          >
            Зачем{" "}
          </span>
          покупать лиды на банкротство физического лица
        </h3>
        <p className={style["banner__description"]}>
          Молодым юристам, а также крупным компаниям всегда требуется больше
          клиентов, ведь чем больше клиентов, тем больше сделок.
        </p>
      </div>
      <div className={style["banner__wrapper"]}>
        <div className={style["banner__card"]}>
          <IdeaIcon />
          <div className={style["banner__text-group"]}>
            <h3 className={style["banner__subtitle"]}>Опытным компаниям</h3>
            <p className={style["banner__text"]}>
              покупка лидов - это способ получить дополнительные ресурсы для
              своего отдела продаж. А чем больше ресурсов в моменте, тем больше
              и прибыль.
            </p>
          </div>
        </div>

        <div className={style["banner__card"]}>
          <TickIcon />
          <div className={style["banner__text-group"]}>
            <h3 className={style["banner__subtitle"]}>Молодым компаниям</h3>
            <p className={style["banner__text"]}>
              Покупка лидов на банкротство, это лучший способ найти первей
              сделки с клиентами
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyToBuy;
