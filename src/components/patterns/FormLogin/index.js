import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import Button from '../../commons/Button';
import TextField from '../../form/TextField';
import useForm from '../../../infra/hooks/form/useForm';
import loginService from '../../../services/login/loginService';

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('"Usuário" é obrigatório')
    .min(3, 'Preencha ao menos 3 dígitos'),
  senha: yup
    .string()
    .required('Senha é obrigatória')
    .min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export default function LoginForm() {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService.login({
        username: values.usuario,
        password: values.senha,
      })
        .then(() => {
          router.push('/app/profile');
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        onChange={form.handleChange}
        value={form.inputValue.usuario}
        error={form.errors.usuario}
        onBlur={form.handleBlur}
        isTouched={form.touchedFields?.usuario}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.inputValue.senha}
        onChange={form.handleChange}
        error={form.errors.senha}
        onBlur={form.handleBlur}
        isTouched={form.touchedFields?.senha}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
    </form>
  );
}
