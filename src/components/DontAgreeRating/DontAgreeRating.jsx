import style from "./styles.module.scss";
import Image from "../../images/dontAgreeRating/subscribe.svg";

const DontAgreeRating = () => {
  return (
    <section className={style["banner"]}>
      <div className={style["banner__wrapper-left"]}>
        <h3 className={style["banner__title"]}>
          Если я не согласен со своим
          <span
            className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
          >
            {" "}
            рейтингом
          </span>
        </h3>
        <p className={style["banner__description"]}>
          Мы не влияем на рейтинг. Мы не оцениваем вас и вашу компанию. Мы
          собираем мнение клиентов о вашей организации ведя строгий учет, и даем
          им возможность высказать его публично.
        </p>
      </div>
      <img
        className={style["banner__image"]}
        src={Image}
        alt="Мужчина отмечает что-то галочкой"
      />
    </section>
  );
};

export default DontAgreeRating;
