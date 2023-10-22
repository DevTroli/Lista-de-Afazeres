import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

import * as enums from '../../utils/enums/Tarefa'
import * as S from './styles'
import { Campo, Botao } from '../../styles/index'

type Props = {
  mostarFiltros: boolean
}

const BarraLateral = ({ mostarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.Filtro)
  return (
    <S.Aside>
      <div>
        {mostarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Pesquisar"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                legenda="Pendente"
                criterio="prioridade"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDO}
                legenda="Concluído"
                criterio="prioridade"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                legenda="Urgente"
                criterio="prioridade"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                legenda="Importante"
                criterio="prioridade"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                legenda="Normal"
                criterio="prioridade"
              />
              <FiltroCard criterio="todas" legenda="Todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar a lista de tarefas{' '}
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
