import style from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AddSchema from "../../constants/Form/AddSchema";
import { useEffect, useRef } from "react";

const PopUpAdd = ({ onClose }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      company: "",
      link: "",
      message: "",
    },
    mode: "onChange",
    resolver: yupResolver(AddSchema),
  });
  const { errors, isValid } = formState;

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={style["background"]}>
      <section className={style["popup"]} ref={ref}>
        <h2 className={style["popup__title"]}>Добавить компанию в рейтинг</h2>
        <p className={style["popup__description"]}>
          Добавьте свою компанию в рейтинг, заполнив форму
        </p>

        <form
          className={style["form"]}
          onSubmit={handleSubmit((data) => {
            console.log(data);
            // onClick();
          })}
        >
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
              placeholder="ФИО"
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

          <div
            className={`${style["form__input-wrapper"]} ${style["form__input-wrapper_narrow"]}`}
          >
            <input
              {...register("company")}
              type="text"
              id="formCompany"
              className={`${style["form__input"]} ${
                errors.company && style["form__input_error"]
              }`}
              placeholder="Название компании"
            />
            <span className={style["form__error"]}>
              {errors.company?.message}
            </span>
          </div>

          <div
            className={`${style["form__input-wrapper"]} ${style["form__input-wrapper_narrow"]}`}
          >
            <input
              {...register("link")}
              type="text"
              id="formLink"
              className={`${style["form__input"]} ${
                errors.link && style["form__input_error"]
              }`}
              placeholder="Ссылка на сайт"
            />
            <span className={style["form__error"]}>{errors.link?.message}</span>
          </div>

          <div className={style["form__input-wrapper"]}>
            <textarea
              {...register("message")}
              rows="7"
              type="text"
              id="formMessage"
              className={`${style["form__input"]} ${
                errors.message && style["form__input_error"]
              }`}
              placeholder="Краткое описание (до 200 символов)"
              maxLength="200"
            ></textarea>
            <span className={style["form__error"]}>
              {errors.message?.message}
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
      </section>
    </div>
  );
};

export default PopUpAdd;
