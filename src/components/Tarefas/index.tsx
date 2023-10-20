import { useDispatch } from 'react-redux'

import { useEffect, useState } from 'react'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  Titulo,
  Prioridade,
  Status,
  Descricao: DescricaOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [Editando, setEditando] = useState(false)
  const [Descricao, setDescricao] = useState('')

  useEffect(() => {
    if (DescricaOriginal.length > 0) setDescricao(DescricaOriginal)
  }, [DescricaOriginal])

  return (
    <S.Card>
      <S.Titulo>{Titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={Prioridade}>
        {Prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={Status}>
        {Status}
      </S.Tag>
      <S.Descricao
        disabled={!Editando}
        value={Descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {Editando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    Descricao,
                    Prioridade,
                    Status,
                    Titulo
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover
              onClick={() => {
                setEditando(false)
                setDescricao(DescricaOriginal)
              }}
            >
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
