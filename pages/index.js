import Footer from '../src/components/commons/Footer'
import Menu from '../src/components/commons/Menu'

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
      <Footer />
    </div>
  )
}
