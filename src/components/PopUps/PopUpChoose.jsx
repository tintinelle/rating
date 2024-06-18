import style from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ChooseSchema from "../../constants/Form/ChooseSchema";
import { useEffect, useRef } from "react";

const PopUpChoose = ({ onClose }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      city: "",
      debt: "",
      price: "",
    },
    mode: "onChange",
    resolver: yupResolver(ChooseSchema),
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
        <h2 className={style["popup__title"]} style={{ width: `77%` }}>
          Подобрать маркетолога по банкротству
        </h2>

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

          <div className={style["form__input-wrapper"]}>
            <input
              {...register("city")}
              type="text"
              id="formCity"
              className={`${style["form__input"]} ${
                errors.city && style["form__input_error"]
              }`}
              placeholder="Город"
            />
            <span className={style["form__error"]}>{errors.city?.message}</span>
          </div>

          <div className={style["form__input-wrapper"]}>
            <input
              {...register("debt")}
              type="text"
              id="formDebt"
              className={`${style["form__input"]} ${
                errors.debt && style["form__input_error"]
              }`}
              placeholder="Сумма долга в лиде"
            />
            <span className={style["form__error"]}>{errors.debt?.message}</span>
          </div>

          <div className={style["form__input-wrapper"]}>
            <input
              {...register("price")}
              type="text"
              id="formPrice"
              className={`${style["form__input"]} ${
                errors.price && style["form__input_error"]
              }`}
              placeholder="Приемлемая цена лида"
            />
            <span className={style["form__error"]}>
              {errors.price?.message}
            </span>
          </div>

          <p className={style["form__button-info"]}>
            Нажимая на кнопку “Найти поставщика” вы соглашаетесь с обработкой{" "}
            <a href="http://">персональных данных</a>
          </p>
          <button
            type="submit"
            className={`${style["form__button"]} ${
              !isValid && style["form__button_disabled"]
            }`}
          >
            Найти поставщика
          </button>
        </form>
      </section>
    </div>
  );
};

export default PopUpChoose;
