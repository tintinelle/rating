import style from "./styles.module.scss";
import Image from "../../images/questionBanner/fingers.svg";

const QuestionBanner = () => {
  return (
    <section className={style["banner"]}>
      <h4 className={style["banner__title"]}>
        А если отрицательных оценок будет больше? Тогда и рейтинг будет
        отрицательным. Но это уже и не рейтинг, а больше черный список?
      </h4>
      <img
        className={style["banner__image"]}
        src={Image}
        alt="Проверка по отпечатку на телефоне"
      />
      <p className={style["banner__description"]}>
        Если такие поставщики будут попадаться, то мы будем автоматически
        заносить их в отдельную категорию.
      </p>
    </section>
  );
};

export default QuestionBanner;
