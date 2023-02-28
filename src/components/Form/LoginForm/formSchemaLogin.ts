import * as yup from "yup";


export const formSchemaLogin = yup.object().shape({
    email: yup.string().required("email inválido").email(),
    password: yup.string().required("Senha inválida"),
  });
  