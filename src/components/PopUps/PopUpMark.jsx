import style from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import MarkSchema from "../../constants/Form/MarkSchema";
import { useEffect, useRef } from "react";

const PopUpMark = ({ onClose }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      number: "",
      mark: "",
    },
    mode: "onChange",
    resolver: yupResolver(MarkSchema),
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
        <h2 className={style["popup__title"]}>Поставьте свою оценку</h2>
        <p className={style["popup__description"]}>Напишите отзыв о компании</p>

        <form
          className={style["form"]}
          onSubmit={handleSubmit((data) => {
            console.log(data);
            // onClick();
          })}
        >
          <div className={style["form__input-wrapper"]}>
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
              {...register("mark")}
              type="text"
              id="formMark"
              className={`${style["form__input"]} ${
                errors.mark && style["form__input_error"]
              }`}
              placeholder="Оценка"
            />
            <span className={style["form__error"]}>{errors.mark?.message}</span>
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

export default PopUpMark;
