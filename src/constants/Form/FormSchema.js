import * as yup from "yup";

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Введите имя")
    .matches(/^[а-яА-Яa-zA-Z][а-яА-Яa-zA-Z\s]{1,50}$/, "Неверный формат"),
  tel: yup
    .string()
    .required("Введите номер телефона")
    .matches(/^\+?[\d\s]{10,16}$/, "Неверный формат номера телефона"),
  mail: yup
    .string()
    .required("Введите E-mail")
    .matches(
      /^([a-zA-Z0-9][a-zA-Z0-9_.-]{1,62}[a-zA-Z0-9])@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9][a-zA-Z\-0-9]{1,56}[a-zA-Z0-9]\.){1,3}[a-zA-Z]{2,64}))$/,
      "Неверный формат E-mail"
    ),
  question: yup.string().notRequired(),
});

export default FormSchema;
