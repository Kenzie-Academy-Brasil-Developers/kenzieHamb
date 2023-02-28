import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('email inválido').email(),
  password: yup
    .string()
    .required('Senha obrigatória')
    .matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
    .min(6, 'a senha precisa conter no minimo 6 digitos'),
    confirmPassword: yup
    .string()
    .required('Campo obrigatório')
    .oneOf(
      [yup.ref('confirmPassword')],
      'A Confirmação de senha deve ser igual a senha'
    ),
});
