import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaLogin } from './formSchemaLogin';
import { ILoginFormValues } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';




const LoginForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<ILoginFormValues>({resolver:yupResolver(formSchemaLogin)});
  const {userLogin} = useContext(UserContext)

  const submit: SubmitHandler<ILoginFormValues> = (formData) =>{
    userLogin(formData)
  }


  return (

  <StyledForm onSubmit={handleSubmit(submit)}>
    <Input label='Email' type='email' register={register("email")} error={errors.email}/>
    <Input label='Senha' type='password' register={register("password")}  error={errors.password}/>

    <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
      Entrar
    </StyledButton>
  </StyledForm>

  )


}





export default LoginForm;
