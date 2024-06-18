import style from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import BuySchema from "../../constants/Form/BuySchema";
import { useEffect, useRef } from "react";

const PopUpBuy = ({ onClose }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      city: "",
    },
    mode: "onChange",
    resolver: yupResolver(BuySchema),
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
        <h2 className={style["popup__title"]}>Купить лиды на банкротство</h2>
        <p className={style["popup__description"]}>
          Запишитесь на бесплатную консультацию и заполните ваши контактные
          данные
        </p>

        <form
          className={style["form"]}
          onSubmit={handleSubmit((data) => {
            console.log(data);
            // onClick();
          })}
        >
          <div className={style["form__input-wrapper"]}>
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

export default PopUpBuy;
