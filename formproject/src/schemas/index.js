import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen pozitif sayı giriniz")
    .integer("Lütfen yaşınızı tam sayı giriniz")
    .required("Yaşınızı giriniz"),
  password: yup
    .string()
    .min(5, "Lütfen minumum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen kurrallara uygun şifre giriniz",
    })
    .required("Şifre Giriniz"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar Şifresini Giriniz"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı minumum 3 karakter uzunluğunda olmalıdır")
    .required("Kullanıcı Adı girmek zorunludur"),
  university: yup
    .string()
    .oneOf(["paü", "gsu", "odtu", "itu"], "Lütfen üni seçiniz")
    .required("Uni seçmek zorundasınız"),
  isAccepted: yup.boolean().oneOf([true], "Lütfen check box işaretleyiniz"),
});
