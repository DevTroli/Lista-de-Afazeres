import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefas'
import { MainContainer } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { Itens } = useSelector((state: RootReducer) => state.Tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.Filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = Itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.Titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.Prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.Status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return Itens
    }
  }

  const Tarefas = filtraTarefas()

  return (
    <MainContainer>
      <p>
        2 tarefas marcadas como: &quot;categoria&quot; e &quot;{termo}&quot;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {Tarefas.map((t) => (
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
