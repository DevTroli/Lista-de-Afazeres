import styled, { createGlobalStyle } from 'styled-components'
import varievaeis from './varievaeis'
import { Botao } from '../components/Tarefas/styles'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 14rem auto;
`

export const MainContainer = styled.main`
  padding: 0 2.5rem;
  height: 100vh;
  overflow-y: scroll;
`

export const TituloForm = styled.h2`
  dispaly: block;
  margin-top: 2.5rem;
  magin-bottom: 3rem;
  font-size: 1.125rem;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 0.5rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${varievaeis.verde};
`

export default EstiloGlobal
