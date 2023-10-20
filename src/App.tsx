import EstiloGlobal, { Container } from './styles'
import ListaDeTarefas from './containers/ListaDeTarefas'
import BarraLateral from './containers/BarraLatersl'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
