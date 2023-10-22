import styled from 'styled-components'
import varievaeis from '../../styles/varievaeis'

import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

const retornaCor = (props: TagProps): string => {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE)
      return varievaeis.amarelo2
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return varievaeis.vermelho
  } else {
    if (props.status === enums.Status.PENDENTE) return varievaeis.laranja
    if (props.status === enums.Status.CONCLUIDO) return varievaeis.verde
  }
  return '#537188'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin-bottom: 2.25rem;
  border-radius: 1rem;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
`
export const Titulo = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  margin-left: 0.25rem;
`
export const Tag = styled.span<TagProps>`
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  font-weight: bold;
  background-color: ${(props) => retornaCor(props)};
  color: #f9f9f9;
  border-radius: 0.5rem;
  margin-right: 1rem;
  display: inline-block;
`
export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-family: 'Roboto Mono', monospace;
  dipslay: block;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  resize: none;
  border: none;
  background-color: transparent;
`
export const BarraAcoes = styled.div`
  boder-top: 1px solid rgba (0, 0, 0, 0.1);
  padding-top: 1rem;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${varievaeis.vermelho};
`
