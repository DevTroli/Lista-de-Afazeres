import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Tarefa } from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  Itens: Tarefa[]
}

const initialState: TarefasState = {
  Itens: [
    {
      Titulo: 'Estudar Vue.JS',
      Prioridade: enums.Prioridade.IMPORTANTE,
      Status: enums.Status.PENDENTE,
      Descricao: 'Enteder o uso do Vue.js para minhas aplicações',
      id: 12
    },
    {
      Titulo: 'Estudar Angular',
      Prioridade: enums.Prioridade.NORMAL,
      Status: enums.Status.PENDENTE,
      Descricao: 'Enteder o uso do Angular para minhas aplicações',
      id: 20
    },
    {
      Titulo: 'Estudar React.JS',
      Prioridade: enums.Prioridade.URGENTE,
      Status: enums.Status.PENDENTE,
      Descricao: 'Enteder o uso do React.JS para minhas aplicações',
      id: 30
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
    },
    adicionar(state, action: PayloadAction<Omit<Tarefa, 'id'>>) {
      const tarefaExiste = state.Itens.find(
        (tarefa) =>
          tarefa.Titulo.toLowerCase() === action.payload.Titulo.toLowerCase()
      )
      if (tarefaExiste) {
        alert('essa tarefa já existe!')
      } else {
        const ultimaTarefa = state.Itens[state.Itens.length - 1]

        const novaTarefa = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }

        state.Itens.push(novaTarefa)
      }
    },
    alterarStatus(
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) {
      const IndexTarefa = state.Itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (IndexTarefa > 0) {
        state.Itens[IndexTarefa].Status = action.payload.finalizado
          ? enums.Status.CONCLUIDO
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, adicionar, alterarStatus } =
  tarefasSlice.actions

export default tarefasSlice.reducer
