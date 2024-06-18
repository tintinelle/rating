import style from "./styles.module.scss";
import useWindowDimensions from "../../services/useWindowDimensions";
import reviewImage from "../../images/reviewsBanner/review.webp";
import reviewImageMobile from "../../images/reviewsBanner/review-mobile.webp";

const ReviewsBanner = () => {
  const { width } = useWindowDimensions();

  return (
    <section className={style["reviews"]}>
      <h3 className={style["reviews__title"]}>
        <span
          className={`${style["reviews__title"]}  ${style["reviews__title_blue"]}`}
        >
          Отзывы{" "}
        </span>
        о лидах на банкротство
      </h3>
      {width > 1001 ? (
        <img
          src={reviewImage}
          alt="Оценка 4.5"
          className={style["reviews__image"]}
        />
      ) : (
        <img
          src={reviewImageMobile}
          alt="Оценка 4.5"
          className={style["reviews__image"]}
        />
      )}
      <p className={style["reviews__description"]}>
        Отзывы представленные на сайте проходят модерацию, однако, администрация
        не может вручаться, что данные отзывы не оставили сами сотрудники
        компаний, которые занимаются продажей лидов на банкротство, или же, не
        были написаны конкурентами. Мы проверяем только соответствие информации
        на предмет нарушения ГК РФ
      </p>
      <p className={style["reviews__info"]}>
         Мы проверяем только соответствие информации на предмет нарушения ГК РФ.
      </p>
    </section>
  );
};

export default ReviewsBanner;
