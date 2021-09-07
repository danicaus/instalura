import Menu from '../src/components/commons/Menu'
import { Button } from '../src/components/commons/Button'
import { Grid } from '../src/components/foundation/layout/Grid'
import Text from '../src/components/foundation/Text'
import Footer from '../src/components/commons/Footer'
import { Box } from '../src/components/foundation/layout/Box'


export default function Home() {
  return (
    <Box
      display="flex"
      flex="1"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Menu />
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px'
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={{
              xs: 0,
              md: 1
            }}
            value={{
              xs: 12,
              md: 5
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
                md: 'left'
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
                md: 'left'
              }}
            >
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
            </Text>
            <Button
              display="block"
              margin={{
                xs: 'auto',
                md: 'initial'
              }}
              variant="primary.main"
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col
            value={{
              xs: 12,
              md: 6
            }}
          >
            <img
              style={{ display: "block", margin: "auto" }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  )
}
