import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefas'
import { MainContainer } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.Tarefas)
  return (
    <MainContainer>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {itens.map((t) => (
          <li key={t.Titulo}>
            <Tarefa
              id={t.id}
              Prioridade={t.Prioridade}
              Titulo={t.Titulo}
              Status={t.Status}
              Descricao={t.Descricao}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
