import * as yup from "yup";

const ChooseSchema = yup.object().shape({
  name: yup
    .string()
    .required("Введите ФИО")
    .matches(/^[а-яА-Яa-zA-Z][а-яА-Яa-zA-Z\s]{1,50}$/, "Неверный формат"),
  tel: yup
    .string()
    .required("Введите номер телефона")
    .matches(/^\+?[\d\s]{10,16}$/, "Неверный формат номера телефона"),
  city: yup.string().notRequired(),
  debt: yup.string().notRequired(),
  price: yup.string().notRequired(),
});

export default ChooseSchema;
