import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefas'
import { MainContainer, TituloForm as Titulo } from '../../styles/index'
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

  const exibeResultadoFiltrados = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefas(s) foram encontrada(s) como: todas ${complemento}`
    } else {
      mensagem = `${quantidade} tarefa(s) foram encontrada(s) como: "${criterio} - ${valor}" ${complemento}`
    }
    return mensagem
  }

  const Tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltrados(Tarefas.length)

  return (
    <MainContainer>
      <Titulo as="P">{mensagem}</Titulo>
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
