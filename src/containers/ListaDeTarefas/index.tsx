import Tarefa from '../../components/Tarefas'
import { MainContainer } from './styles'

import * as enums from '../../utils/enums/Tarefa'

const Tarefas = [
  {
    Titulo: 'Estudar Vue.JS',
    Prioridade: enums.Prioridade.URGENTE,
    Status: enums.Status.PENDENTE,
    Descricao: 'Enteder o uso do Vue.js para minhas aplicações'
  },
  {
    Titulo: 'Estudar Nuxt.JS',
    Prioridade: enums.Prioridade.URGENTE,
    Status: enums.Status.PENDENTE,
    Descricao: 'Entender o uso do novo nuxt.js 3 para minhas aplicações'
  },
  {
    Titulo: 'Estudar React.JS',
    Prioridade: enums.Prioridade.IMPORTANTE,
    Status: enums.Status.CONCLUIDO,
    Descricao: 'Entender o uso do React.js para minhas aplicações'
  }
]

const ListaDeTarefas = () => {
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
