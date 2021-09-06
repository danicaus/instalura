import { Button } from '../src/components/commons/Button'
import Footer from '../src/components/commons/Footer'
import Menu from '../src/components/commons/Menu'
import Text from '../src/components/foundation/Text'

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flex: '1',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu />
      <div>
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
      </div>
      <Footer />
    </div>
  )
}
