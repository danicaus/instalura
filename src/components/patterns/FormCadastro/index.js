/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import Button from '../../commons/Button';
import TextField from '../../form/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = useState({
    name: '',
    username: '',
  });

  function handleInputValue(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.username.length === 0 || userInfo.name.length === 0;

  function handleForm(event) {
    event.preventDefault();
    setIsFormSubmited(true);

    const userDTO = {
      name: userInfo.name,
      username: userInfo.username,
    };

    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    })
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          return respostaDoServidor.json();
        }
        throw new Error('Não foi possível cadastrar o usuário agora :(');
      })
      .then((respostaConvertidaEmObjeto) => {
        setSubmissionStatus(formStates.DONE);
        console.log(respostaConvertidaEmObjeto);
      })
      .catch((error) => {
        setSubmissionStatus(formStates.ERROR);
        console.error(error);
      });
  }

  return (
    <form
      onSubmit={handleForm}
    >
      <TextField
        name="name"
        value={userInfo.name}
        placeholder="Nome"
        onChange={handleInputValue}
      />

      <TextField
        name="username"
        value={userInfo.username}
        placeholder="Usuário"
        onChange={handleInputValue}
      />

      <Button
        type="submit"
        disabled={isFormInvalid}
        variant="primary.main"
        display="block"
        fullWidth
      >
        Cadastrar
      </Button>

      <Text
        tag="p"
        variant="paragraph1"
        color="tertiary.light"
      >
        Já tem uma conta?
        <Text
          tag="a"
          color="secondary.main"
          textAlign="center"
        >
         &#32;Entrar
        </Text>
      </Text>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Lottie
            width="100px"
            height="100px"
            config={{ animationData: successAnimation }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Lottie
            width="100px"
            height="100px"
            config={{ animationData: errorAnimation }}
          />
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft="0"
      marginRight="0"
      flex="1"
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{
          md: '0',
        }}
        flex="0"
        value={{
          xs: 12,
          md: 5,
          lg: 4,
        }}
      >
        <Box
          boxShadow="-10px 0 24px #070C0E5a"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex="1"
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="#FFFFFF"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <Text
            tag="h3"
            variant="title"
            color="tertiary.main"
          >
            Pronto para saber da vida dos outros?
          </Text>
          <Text
            tag="p"
            variant="paragraph1"
            color="tertiary.light"
          >
            {/* eslint-disable-next-line max-len */}
            Você está a um passo de saber tudo o que está rolando no bairro, complete seu cadastro agora!
          </Text>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
