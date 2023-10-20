import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Vue.JS',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Enteder o uso do Vue.js para minhas aplicações',
      1
    ),
    new Tarefa(
      'Estudar Nuxt.JS',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Enteder o uso do Nuxt.js para minhas aplicações',
      2
    ),
    new Tarefa(
      'Estudar React.JS',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDO,
      'Enteder o uso do React.js para minhas aplicações',
      3
    )
  ],
  reducers: {
    remover(state, action: PayloadAction<number>) {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
