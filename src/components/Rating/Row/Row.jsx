import style from "./styles.module.scss";
import ThumbsUp from "../../../images/icons/ThumbsUp";
import ThumbsDown from "../../../images/icons/ThumbsDown";
import RatingUp from "../../../images/icons/RatingUp";
import ReviewsIcon from "../../../images/icons/ReviewsIcon";
import WriteReview from "../../../images/icons/WriteReview";
import ShoppingBag from "../../../images/icons/ShoppingBag";
import GrayRectangle from "../../../images/icons/GrayReactangle";
import useWindowDimensions from "../../../services/useWindowDimensions";
import { useState, useEffect } from "react";

const Row = ({
  item,
  number,
  handleOpenPopUpReview,
  handleOpenPopUpBuy,
  handleLikeDislike,
}) => {
  const [allReviewsOpen, setAllReviewsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const [rectangleWidth, setRectangleWidth] = useState("104");
  const [rectangleHeight, setRectangleHeight] = useState("41");

  useEffect(() => {
    if (width < 1051) {
      setRectangleWidth("69");
      setRectangleHeight("30");
    }
    if (width < 471) {
      setRectangleWidth("46");
      setRectangleHeight("19");
    }
  }, [width]);
  const firstElement = { ...item.reviewsArr[0] };

  return (
    <article
      className={`${style["card"]} ${!(number % 2) && style["card_even"]}`}
    >
      <p className={style["card__company-number"]}>{number}</p>
      <div className={style["card__title-group"]}>
        <h5 className={style["card__title"]}>{item.title}</h5>
        <GrayRectangle width={rectangleWidth} height={rectangleHeight} />
      </div>

      <div className={style["card__info-group"]}>
        <div className={style["card__info"]}>
          <ThumbsUp />
          <span className={style["card__number"]}>{item.positive}</span>
        </div>
        <div className={style["card__info"]}>
          <ThumbsDown />
          <span className={style["card__number"]}>{item.negative}</span>
        </div>
        <div className={style["card__info"]}>
          <RatingUp />
          <span className={style["card__number"]}>{item.rating}</span>
        </div>
        <div className={style["card__info"]}>
          <ReviewsIcon />
          <span className={style["card__number"]}>{item.reviews}</span>
        </div>
      </div>

      <p className={style["card__description"]}>{item.description}</p>

      <div className={style["card__review-group"]}>
        <p className={style["card__tag"]}>
          {item.reviews ? "Последний отзыв" : "Отзывов нет"}
        </p>
        {allReviewsOpen ? (
          <>
            {item.reviewsArr.map((item) => {
              return (
                <>
                  <div className={style["card__review-row"]}>
                    <h6 className={style["card__review-title"]}>
                      {item.title}
                      {item.city && `, г. ${item.city}`}
                    </h6>
                    <span className={style["card__review-date"]}>
                      {item.date}
                    </span>
                  </div>
                  <p className={style["card__review-text"]}>{item.text}</p>
                </>
              );
            })}
          </>
        ) : (
          <>
            <div className={style["card__review-row"]}>
              <h6 className={style["card__review-title"]}>
                {firstElement.title}
                {firstElement.city && `, г. ${firstElement.city}`}
              </h6>
              <span className={style["card__review-date"]}>
                {firstElement.date}
              </span>
            </div>
            <p className={style["card__review-text"]}>{firstElement.text}</p>
          </>
        )}

        <div className={style["card__review-buttons"]}>
          {item.reviews ? (
            <button
              className={`${style["card__review-more-button"]} ${
                !(number % 2) && style["card__review-more-button_white"]
              }`}
              onClick={() => setAllReviewsOpen(true)}
            >
              показать еще
            </button>
          ) : (
            ""
          )}

          {allReviewsOpen && (
            <button
              className={style["card__review-hide-button"]}
              onClick={() => setAllReviewsOpen(false)}
            >
              свернуть
            </button>
          )}
        </div>
      </div>

      <div className={style["card__buttons-group"]}>
        <button
          className={style["card__button"]}
          onClick={() => handleLikeDislike("like", item.id)}
        >
          <ThumbsUp /> Оценить положительно
        </button>
        <button
          className={style["card__button"]}
          onClick={() => handleLikeDislike("dislike", item.id)}
        >
          <ThumbsDown /> Оценить отрицательно
        </button>
        <button
          className={style["card__button"]}
          onClick={() => handleOpenPopUpReview()}
        >
          <WriteReview /> Написать отзыв
        </button>
        <button
          className={style["card__button"]}
          onClick={() => {
            handleOpenPopUpBuy();
          }}
        >
          <ShoppingBag /> Купить лиды
        </button>
      </div>
    </article>
  );
};

export default Row;
