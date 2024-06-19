import style from "./styles.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import useWindowDimensions from "../../services/useWindowDimensions";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormSchema from "../../constants/Form/FormSchema";

const FooterForm = ({ handleOpenPopUpBuy }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      mail: "",
      question: "",
    },
    mode: "onChange",
    resolver: yupResolver(FormSchema),
  });
  const { errors, isValid } = formState;

  const { width } = useWindowDimensions();
  const [buttonWidth, setButtonWidth] = useState("46%");
  useEffect(() => {
    if (width < 1001) setButtonWidth("28%");
  }, [width]);

  return (
    <footer className={style["footer"]}>
      <h2 className={style["footer__title"]}>Рейтинг лидогенераторов БФЛ</h2>
      <div className={style["footer__contacts"]}>
        <h4 className={style["footer__subtitle"]}>Контакты</h4>
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
        </ul>
      </nav>
      <div className={style["footer__button"]}>
        <Button
          buttonClass="button_white"
          text="Связаться"
          width={buttonWidth}
          handleClick={handleOpenPopUpBuy}
        />
      </div>
      <a
        className={style["footer__politics"]}
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      >
        Политика конфиденциальности
      </a>

      <form
        className={style["form"]}
        onSubmit={handleSubmit((data) => {
          console.log(data);
          // onClick();
        })}
      >
        <h4 className={style["form__title"]}>
          Для связи с администрацией рейтинга используйте форму обратной связи
        </h4>
        <div
          className={`${style["form__input-wrapper"]} ${style["form__input-wrapper_narrow"]}`}
        >
          <input
            {...register("name")}
            type="text"
            id="formName"
            className={`${style["form__input"]} ${
              errors.name && style["form__input_error"]
            }`}
            placeholder="Ваше имя"
          />
          <span className={style["form__error"]}>{errors.name?.message}</span>
        </div>

        <div
          className={`${style["form__input-wrapper"]} ${style["form__input-wrapper_narrow"]}`}
        >
          <input
            {...register("tel")}
            type="phone"
            id="formTel"
            className={`${style["form__input"]} ${
              errors.tel && style["form__input_error"]
            }`}
            placeholder="Номер телефона"
          />
          <span className={style["form__error"]}>{errors.tel?.message}</span>
        </div>

        <div className={style["form__input-wrapper"]}>
          <input
            {...register("mail")}
            type="email"
            id="formEmail"
            className={`${style["form__input"]} ${
              errors.mail && style["form__input_error"]
            }`}
            placeholder="Электронная почта"
          />
          <span className={style["form__error"]}>{errors.mail?.message}</span>
        </div>

        <div className={style["form__input-wrapper"]}>
          <textarea
            {...register("question")}
            rows="1"
            type="text"
            id="formQuestion"
            className={`${style["form__input"]} ${
              errors.question && style["form__input_error"]
            }`}
            placeholder="Ваш вопрос"
            maxLength="200"
          />
          <span className={style["form__error"]}>
            {errors.question?.message}
          </span>
        </div>

        <p className={style["form__button-info"]}>
          Нажимая на кнопку “Отправить” вы соглашаетесь с обработкой{" "}
          <a href="http://">персональных данных</a>
        </p>
        <button
          type="submit"
          className={`${style["form__button"]} ${
            !isValid && style["form__button_disabled"]
          }`}
        >
          Отправить
        </button>
      </form>
    </footer>
  );
};

export default FooterForm;
