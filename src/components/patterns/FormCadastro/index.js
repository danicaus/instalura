/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import Button from '../../commons/Button';
import TextField from '../../Forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

function FormContent() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    user: '',
  });

  function handleInputValue(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.user.length === 0 || userInfo.email.length === 0;

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
    }}
    >
      <TextField
        name="email"
        value={userInfo.email}
        placeholder="Email"
        onChange={handleInputValue}
      />

      <TextField
        name="user"
        value={userInfo.user}
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
