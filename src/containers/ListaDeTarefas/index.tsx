import Tarefa from '../../components/Tarefas'
import { MainContainer } from './styles'

const Tarefas = [
  {
    Titulo: 'Estudar Vue.JS',
    Prioridade: 'Alta',
    Status: 'Concluído',
    Descricao: 'Enteder o uso do Vue.js para minhas aplicações'
  },
  {
    Titulo: 'Estudar Nuxt.JS',
    Prioridade: 'Baisa',
    Status: 'Pendente',
    Descricao: 'Entender o uso do novo nuxt.js 3 para minhas aplicações'
  },
  {
    Titulo: 'Estudar React.JS',
    Prioridade: 'Média',
    Status: 'Concluído',
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
