import * as yup from "yup";

const MarkSchema = yup.object().shape({
  tel: yup
    .string()
    .required("Введите номер телефона")
    .matches(/^\+?[\d\s]{10,16}$/, "Неверный формат номера телефона"),
  mark: yup.string().required("Введите оценку"),
});

export default MarkSchema;
