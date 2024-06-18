import style from "./styles.module.scss";
import Image from "../../images/notFullRating/people.svg";

const NotFullRating = () => {
  return (
    <section className={style["banner"]}>
      <div className={style["banner__wrapper-left"]}>
        <img
          className={style["banner__image"]}
          src={Image}
          alt="Мозговой штурм"
        />
        <p className={style["banner__info"]}>
          Мы всегда рады вашей активности и вашей инициативе. Делая наш лучше,
          вы помогаете другим юристам и предпринимателям вести бизнес
          качественно и бороться с мошенничеством.
        </p>
      </div>

      <div className={style["banner__wrapper-right"]}>
        <h3 className={style["banner__title"]}>
          В вашем рейтинге
          <span
            className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
          >
            {" "}
            не все лидогенераторы и маркетологи по банкротству
          </span>
        </h3>
        <p className={style["banner__description"]}>
          Мы знаем. Мы не заполняем их самостоятельно. Если вы знаете
          качественного поставщика лидов на банкротство, которого еще нет в
          нашем рейтинге, расскажите ему о нашем сайте, и пусть он добавится
          самостоятельно.
        </p>
      </div>
    </section>
  );
};

export default NotFullRating;
