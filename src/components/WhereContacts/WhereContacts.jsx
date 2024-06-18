import style from "./styles.module.scss";
import Image from "../../images/whereContacts/asking-question.svg";

const WhereContacts = () => {
  return (
    <section className={style["banner"]}>
      <div className={style["banner__wrapper-left"]}>
        <h3 className={style["banner__title"]}>
          Я оставил заявку на вашем сайте,
          <span
            className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
          >
            {" "}
            куда попадут мои контакты?
          </span>
        </h3>
        <p className={style["banner__description"]}>
          Ваши контакты попадут администрации, не льдогенераторам. Мы свяжемся с
          вами, уточним ваши запросы, а потом, получив от вас разрешение,
          подберем для вас того или иного лидогенератора или маркетолога.
        </p>
      </div>

      <img
        className={style["banner__image"]}
        src={Image}
        alt="Мужчина задается вопросом"
      />
    </section>
  );
};

export default WhereContacts;
