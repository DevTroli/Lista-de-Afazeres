import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MainContainer, BotaoSalvar, TituloForm } from '../../styles/index'
import { Campo } from '../../styles/index'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { Tarefa } from '../../models/Tarefa'
import { adicionar } from '../../store/reducers/tarefas'

const NovaTarefa = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, settitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setprioridade] = useState(enums.Prioridade.NORMAL)

  const AddTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      9
    )
    dispatch(adicionar(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <TituloForm>Nova Tarefas</TituloForm>
      <Form onSubmit={AddTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => settitulo(e.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          as="textarea"
          name="descricao"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((Prioridade) => (
            <Opcao key={Prioridade}>
              <input
                type="radio"
                name="prioridade"
                value={prioridade}
                onChange={(e) =>
                  setprioridade(e.target.value as enums.Prioridade)
                }
                id={Prioridade}
                defaultChecked={Prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={Prioridade}>{Prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Adicionar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default NovaTarefa
