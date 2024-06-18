import style from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ReviewSchema from "../../constants/Form/ReviewSchema";
import { useEffect, useRef } from "react";

const PopUpReview = ({ onClose }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      number: "",
      city: "",
      message: "",
    },
    mode: "onChange",
    resolver: yupResolver(ReviewSchema),
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
        <h2 className={style["popup__title"]}>Написать отзыв</h2>
        <p className={style["popup__description"]}>Напишите отзыв о компании</p>

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
              {...register("city")}
              type="text"
              id="formCity"
              className={`${style["form__input"]} ${
                errors.city && style["form__input_error"]
              }`}
              placeholder="Ваш город"
            />
            <span className={style["form__error"]}>{errors.city?.message}</span>
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
              placeholder="Ваш отзыв (до 200 символов)"
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

export default PopUpReview;
