import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  Itens: Tarefa[]
}

const initialState: TarefasState = {
  Itens: [
    {
      Titulo: 'Estudar Vue.JS',
      Prioridade: enums.Prioridade.IMPORTANTE,
      Status: enums.Status.CONCLUIDO,
      Descricao: 'Enteder o uso do Vue.js para minhas aplicações',
      id: 1
    },
    {
      Titulo: 'Estudar Angular',
      Prioridade: enums.Prioridade.NORMAL,
      Status: enums.Status.PENDENTE,
      Descricao: 'Enteder o uso do Angular para minhas aplicações',
      id: 2
    },
    {
      Titulo: 'Estudar React.JS',
      Prioridade: enums.Prioridade.URGENTE,
      Status: enums.Status.CONCLUIDO,
      Descricao: 'Enteder o uso do React.JS para minhas aplicações',
      id: 3
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover(state, action: PayloadAction<number>) {
      state.Itens = state.Itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar(state, action: PayloadAction<Tarefa>) {
      const IndexTarefa = state.Itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (IndexTarefa > 0) {
        state.Itens[IndexTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
