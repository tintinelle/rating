import style from "./styles.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import useWindowDimensions from "../../services/useWindowDimensions";
import { useState, useEffect } from "react";

const Footer = ({ handleOpenPopUpBuy }) => {
  const { width } = useWindowDimensions();
  const [buttonWidth, setButtonWidth] = useState("52.5%");
  useEffect(() => {
    if (width < 1001) setButtonWidth("60%");
  }, [width]);

  return (
    <footer className={style["footer"]}>
      <h2 className={style["footer__title"]}>Рейтинг лидогенераторов БФЛ</h2>
      <div className={style["footer__contacts"]}>
        <a className={style["footer__contact"]} href="tel:+">
          Телефон
        </a>
        <a className={style["footer__contact"]} href="mailto:">
          Почта
        </a>
      </div>
      <nav className={style["navbar"]}>
        <ul className={style["navbar__links"]}>
          <li>
            <Link className={style["navbar__link"]} to="/">
              Купить лиды на банкротство
            </Link>
          </li>
          <li>
            <Link className={style["navbar__link"]} to="/about">
              О Рейтинге
            </Link>
          </li>
          <li>
            <Link className={style["navbar__link"]} to="/providers">
              Добавить поставщика
            </Link>
          </li>
          <li>
            <Link className={style["navbar__link"]} to="/">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <Button
        buttonClass="button_white"
        text="Связаться"
        width={buttonWidth}
        handleClick={handleOpenPopUpBuy}
      />
      <a
        className={style["footer__politics"]}
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      >
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
