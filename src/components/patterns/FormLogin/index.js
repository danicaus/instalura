import React from 'react';
import { useRouter } from 'next/router';
import Button from '../../commons/Button';
import TextField from '../../form/TextField';
import useForm from '../../../infra/hooks/form/useForm';
import loginService from '../../../services/login/loginService';

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
  });

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        onChange={form.handleChange}
        value={form.inputValue.usuario}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.inputValue.senha}
        onChange={form.handleChange}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  );
}
