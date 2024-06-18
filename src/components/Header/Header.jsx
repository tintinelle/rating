import style from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoOval from "../../images/icons/LogoOval";
import Burger from "../../images/icons/Burger";
import Close from "../../images/icons/CloseBurger";
import useWindowDimensions from "../../services/useWindowDimensions";

const Header = ({ transparent }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <header
      className={`${style["header"]} ${
        transparent && style["header_transparent"]
      }`}
    >
      <Link to="/">
        <LogoOval />
      </Link>
      <button
        className={style["header__button-burger"]}
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
      >
        {isBurgerOpen ? (
          <Close />
        ) : transparent ? (
          <Burger color="#FFFFFF" />
        ) : (
          <Burger color="#AAAAAA" />
        )}
      </button>

      <nav
        className={`${style["navbar"]} ${
          isBurgerOpen && style["navbar_active"]
        }`}
      >
        {width < 1001 && (
          <div className={style["navbar__header"]}>
            {isBurgerOpen && <LogoOval />}
            <button
              className={style["header__button-burger"]}
              onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            >
              {isBurgerOpen ? <Close /> : <Burger />}
            </button>
          </div>
        )}
        <ul className={style["navbar__links"]}>
          <li>
            <Link
              className={`${style["navbar__link"]} ${
                transparent && style["navbar__link_white"]
              }`}
              to="/"
            >
              Купить лиды на банкротство
            </Link>
          </li>
          <li>
            <Link
              className={`${style["navbar__link"]} ${
                transparent && style["navbar__link_white"]
              }`}
              to="/about"
            >
              О Рейтинге
            </Link>
          </li>
          <li>
            <Link
              className={`${style["navbar__link"]} ${
                transparent && style["navbar__link_white"]
              }`}
              to="/providers"
            >
              Добавить поставщика
            </Link>
          </li>
          <li>
            <Link
              className={`${style["navbar__link"]} ${
                transparent && style["navbar__link_white"]
              }`}
              to="/"
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
