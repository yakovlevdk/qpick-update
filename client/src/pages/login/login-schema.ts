import * as yup from "yup";
export const loginSchema =  yup.object().shape({
    email: yup
      .string()
      .email("Некорректный формат почты")
      .required("Поле обязательно"),
    password: yup
      .string()
      .required("Поле обязательно")
      .min(8, "Минимально 8 символов")
      .max(32, "Максимум 32 символа"),
  });