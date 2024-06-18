import * as yup from "yup";

const AddSchema = yup.object().shape({
  name: yup
    .string()
    .required("Введите ФИО")
    .matches(/^[а-яА-Яa-zA-Z][а-яА-Яa-zA-Z\s]{1,50}$/, "Неверный формат"),
  tel: yup
    .string()
    .required("Введите номер телефона")
    .matches(/^\+?[\d\s]{10,16}$/, "Неверный формат номера телефона"),
  company: yup.string().required("Введите название компании"),
  link: yup.string().notRequired(),
  message: yup.string().notRequired(),
});

export default AddSchema;
