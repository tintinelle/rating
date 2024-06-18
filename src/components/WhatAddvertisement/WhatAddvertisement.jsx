import style from "./styles.module.scss";
import SquaresArrowsIcon from "../../images/icons/SquaresArrows";
import ThumbsUpIcon from "../../images/icons/ThumbsUpRed";
import DialogsIcon from "../../images/icons/Dialogs";

const WhatAddvertisement = () => {
  return (
    <section className={style["banner"]}>
      <h3 className={style["banner__title"]}>
        <span
          className={`${style["banner__title"]}  ${style["banner__title_blue"]}`}
        >
          Какие виды размещения и рекламы{" "}
        </span>
        присутствуют на сайте
      </h3>
      <p className={style["banner__description"]}>
        Мы размещаем только тех поставщиков, которые каким-либо образом могут
        подтвердить свою хозяйственную деятельность (ООО, ИП, самозанятый), а
        также предоставить договор на продажу лидов, адрес, и рабочие контакты.
      </p>
      <div className={style["banner__cards"]}>
        <p className={style["banner__subtitle"]}>
          На сайте присутствует реклама:
        </p>
        <article className={style["banner__card"]}>
          <SquaresArrowsIcon />
          <p className={style["banner__info"]}>
            Размещение платного баннера на странице рейтинга
          </p>
        </article>
        <article className={style["banner__card"]}>
          <ThumbsUpIcon />
          <p className={style["banner__info"]}>
            Добавление кликабельной ссылки на сайт поставщика под его логотипом
            и названием
          </p>
        </article>
        <article className={style["banner__card"]}>
          <DialogsIcon />
          <p className={style["banner__info"]}>
            Каких-либо других форм рекламы на сайте не существует
          </p>
        </article>
      </div>
    </section>
  );
};

export default WhatAddvertisement;
