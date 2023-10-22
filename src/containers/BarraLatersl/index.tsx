import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../components/FiltroCard'
import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

import * as enums from '../../utils/enums/Tarefa'
import * as S from './styles'
import { Campo } from '../../styles/index'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.Filtro)
  return (
    <S.Aside>
      <div>
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
      </div>
    </S.Aside>
  )
}

export default BarraLateral
