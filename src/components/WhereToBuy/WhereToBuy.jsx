import style from "./styles.module.scss";
import Image from "../../images/whereToBuy/image.svg";

const WhereToBuy = () => {
  return (
    <section className={style["banner"]}>
      <h3 className={style["banner__title"]}>
        <span
          className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
        >
          Где{" "}
        </span>
        купить лиды на банкротство физического лица
      </h3>
      <img
        className={style["banner__image"]}
        src={Image}
        alt="Мужчина за ноутбуком"
      />
      <div className={style["banner__wrapper"]}>
        <p
          className={`${style["banner__info"]}  ${style["banner__info_first"]}`}
        >
          В рейтинг попадают компании и маркетологи, которые оказывают услуги
          лидогенерации по банкротству
        </p>
        <p
          className={`${style["banner__info"]}  ${style["banner__info_second"]}`}
        >
          Администрация не несет ответственности за качество оказываемых услуг
          участниками рейтинга
        </p>
        <p
          className={`${style["banner__info"]}  ${style["banner__info_third"]}`}
        >
          У нас вы найдете рейтинг поставщиков лидов на банкротство во всех
          регионах России.
        </p>
        <p
          className={`${style["banner__info"]}  ${style["banner__info_fourth"]}`}
        >
          Доверяя рейтингу - вы доверяете общественному мнению пользователей
          сайта.
        </p>
        <div
          className={`${style["banner__info"]}  ${style["banner__info_fifth"]}`}
        ></div>
      </div>
    </section>
  );
};

export default WhereToBuy;
