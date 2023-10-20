import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefas'
import { MainContainer } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { Tarefas } = useSelector((state: RootReducer) => state)
  return (
    <MainContainer>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {Tarefas.map((t) => (
          <li key={t.Titulo}>
            <Tarefa
              prioridade={t.Prioridade}
              titulo={t.Titulo}
              status={t.Status}
              descricao={t.Descricao}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
