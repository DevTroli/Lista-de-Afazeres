import styled from 'styled-components'

import { Props } from '.'

type PropsSemLegendaeContador = Omit<Props, 'legenda' | 'contador'>

export const Card = styled.div<PropsSemLegendaeContador>`
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#F9F9F9' : '#fcfcfc')};
  border-radius: 0.5rem;
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  display: block;
`
export const Label = styled.span`
  font-size: 0.875rem;
`
