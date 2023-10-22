import * as enums from '../utils/enums/Tarefa'

export class Tarefa {
  Titulo: string
  Prioridade: enums.Prioridade
  Status: enums.Status
  Descricao: string
  id: number

  constructor(
    Titulo: string,
    Prioridade: enums.Prioridade,
    Status: enums.Status,
    Descricao: string,
    id: number
  ) {
    this.Titulo = Titulo
    this.Prioridade = Prioridade
    this.Status = Status
    this.Descricao = Descricao
    this.id = id
  }
}
