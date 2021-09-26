import React from 'react';
import Button from '../../commons/Button';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { WebsitePageContext } from '../../wrappers/WebsitePage';

export default function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Grid.Container
      marginTop={{
        xs: '32px',
        md: '75px',
      }}
    >
      <Grid.Row>
        <Grid.Col
          offset={{
            xs: 0,
            md: 1,
          }}
          value={{
            xs: 12,
            md: 5,
          }}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Compartilhe momentos e conecte-se com amigos
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá.
            Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
          </Text>
          <Button
            display="block"
            margin={{
              xs: 'auto',
              md: 'initial',
            }}
            variant="primary.main"
            onClick={() => websitePageContext.toggleModalCadastro()}
          >
            Cadastrar
          </Button>
        </Grid.Col>
        <Grid.Col
          value={{
            xs: 12,
            md: 6,
          }}
        >
          <img
            alt="Demonstração do App rodando em um celular, com o perfil do Nicolas Cage aberto"
            style={{ display: 'block', margin: 'auto' }}
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
