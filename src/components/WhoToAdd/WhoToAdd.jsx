import style from "./styles.module.scss";
import Image from "../../images/whoToAdd/startup.svg";

const WhoToAdd = () => {
  return (
    <section className={style["banner"]}>
      <img
        className={style["banner__image"]}
        src={Image}
        alt="Команда людей создает идеи"
      />
      <div className={style["banner__wrapper-right"]}>
        <h3 className={style["banner__title"]}>
          <span
            className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
          >
            Кого можно добавить
          </span>{" "}
          в рейтинг поставщиков лидов по банкротству
        </h3>
        <p className={style["banner__description"]}>
          Мы добавляем в рейтинг лидогенераторов, поставщиков лидов, частных
          маркетологов. Всех, кто каким-либо образом поставляет трафик на услуги
          банкротства физического лица.
        </p>
      </div>
    </section>
  );
};

export default WhoToAdd;
