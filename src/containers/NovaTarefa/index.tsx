// import { useDispatch } from 'react-redux'
// import { FormEvent, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// import { MainContainer, BotaoSalvar, TituloForm } from '../../styles/index'
// import { Campo } from '../../styles/index'
// import { Form, Opcoes, Opcao, ErrorText, FieldWrapper } from './styles'
// import * as enums from '../../utils/enums/Tarefa'
// import { adicionar } from '../../store/reducers/tarefas'

// const NovaTarefa = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [tituloTarefa, settitulo] = useState('')
//   const [Descricao, setDescricao] = useState('')
//   const [Prioridade, setprioridade] = useState(enums.Prioridade.NORMAL)
//   const [errors, setErrors] = useState({ titulo: '', descricao: '' })

//   const validateForm = () => {
//     const newErrors = { titulo: '', descricao: '' }
//     let isValid = true

//     if (tituloTarefa.trim() === '') {
//       newErrors.titulo = 'O título é obrigatório'
//       isValid = false
//     }

//     if (Descricao.trim() === '') {
//       newErrors.descricao = 'A descrição é obrigatória'
//       isValid = false
//     }

//     setErrors(newErrors)

//     return isValid
//   }

//   const mudaTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {
//     settitulo(e.target.value)
//     validateForm()
//   }

//   const mudaDescricao = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setDescricao(e.target.value)
//     validateForm()
//   }

//   const AddTarefa = (evento: FormEvent) => {
//     evento.preventDefault()

//     if (validateForm()) {
//       dispatch(
//         adicionar({
//           Titulo: tituloTarefa,
//           Prioridade,
//           Status: enums.Status.PENDENTE,
//           Descricao
//         })
//       )
//       navigate('/')
//     }
//   }

//   return (
//     <MainContainer>
//       <TituloForm>Nova Tarefa</TituloForm>
//       <Form onSubmit={AddTarefa}>
//         <FieldWrapper className={errors.titulo ? 'temErro' : ''}>
//           <Campo
//             value={tituloTarefa}
//             onChange={(e) => settitulo(e.target.value)}
//             type="text"
//             placeholder="Título"
//             className="campo" // Adicione a classe 'campo' aqui
//             onKeyUp={mudaTitulo}
//           />
//           {errors.titulo && (
//             <ErrorText className="errorText">{errors.titulo}</ErrorText>
//           )}
//         </FieldWrapper>
//         <FieldWrapper className={errors.descricao ? 'temErro' : ''}>
//           <Campo
//             value={Descricao}
//             onChange={(e) => setDescricao(e.target.value)}
//             as="textarea"
//             name="descricao"
//             placeholder="Descrição da tarefa"
//             className="campo" // Adicione a classe 'campo' aqui
//             onKeyUp={mudaDescricao}
//           />
//           {errors.descricao && (
//             <ErrorText className="errorText">{errors.descricao}</ErrorText>
//           )}
//         </FieldWrapper>

//         <Opcoes>
//           <p>Prioridade</p>
//           {Object.values(enums.Prioridade).map((Prioridade) => (
//             <Opcao key={Prioridade}>
//               <input
//                 type="radio"
//                 name="prioridade"
//                 value={Prioridade}
//                 onChange={(e) =>
//                   setprioridade(e.target.value as enums.Prioridade)
//                 }
//                 id={Prioridade}
//                 defaultChecked={Prioridade === enums.Prioridade.NORMAL}
//               />
//               <label htmlFor={Prioridade}>{Prioridade}</label>
//             </Opcao>
//           ))}
//         </Opcoes>
//         <BotaoSalvar type="submit">Adicionar</BotaoSalvar>
//       </Form>
//     </MainContainer>
//   )
// }

// export default NovaTarefa

import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { MainContainer, BotaoSalvar, TituloForm } from '../../styles/index'
import { Campo } from '../../styles/index'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { adicionar } from '../../store/reducers/tarefas'

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
`

const FieldWrapper = styled.div`
  margin-bottom: 16px;
  &.has-error {
    margin-bottom: 8px; /* Ajusta o espaçamento vertical se houver erro */
  }
`

const NovaTarefa = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [tituloTarefa, settitulo] = useState('')
  const [Descricao, setDescricao] = useState('')
  const [Prioridade, setprioridade] = useState(enums.Prioridade.NORMAL)
  const [errors, setErrors] = useState({ titulo: '', descricao: '' })

  const validateForm = () => {
    const errors = { titulo: '', descricao: '' }
    let isValid = true

    if (tituloTarefa.trim() === '') {
      errors.titulo = 'O título é obrigatório'
      isValid = false
    }

    if (Descricao.trim() === '') {
      errors.descricao = 'A descrição é obrigatória'
      isValid = false
    }

    setErrors(errors)

    return isValid
  }

  const mudaTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {
    settitulo(e.target.value)
  }

  const mudaDescricao = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescricao(e.target.value)
  }

  const mudaTituloKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    mudaTitulo(e as unknown as React.ChangeEvent<HTMLInputElement>)
    validateForm()
  }

  const mudaDescricaoKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    mudaDescricao(e as unknown as React.ChangeEvent<HTMLTextAreaElement>)
    validateForm()
  }

  const AddTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    if (validateForm()) {
      dispatch(
        adicionar({
          Titulo: tituloTarefa,
          Prioridade,
          Status: enums.Status.PENDENTE,
          Descricao
        })
      )
      navigate('/')
    }
  }

  return (
    <MainContainer>
      <TituloForm>Nova Tarefa</TituloForm>
      <Form onSubmit={AddTarefa}>
        <FieldWrapper className={errors.titulo ? 'temErro' : ''}>
          <Campo
            value={tituloTarefa}
            onChange={mudaTitulo}
            onKeyUp={mudaTituloKeyUp}
            type="text"
            placeholder="Título"
          />
          {errors.titulo && <ErrorText>{errors.titulo}</ErrorText>}
        </FieldWrapper>
        <FieldWrapper className={errors.descricao ? 'temErro' : ''}>
          <Campo
            value={Descricao}
            onChange={mudaDescricao}
            onKeyUp={mudaDescricaoKeyUp}
            as="textarea"
            name="descricao"
            placeholder="Descrição da tarefa"
          />
          {errors.descricao && <ErrorText>{errors.descricao}</ErrorText>}
        </FieldWrapper>
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((Prioridade) => (
            <Opcao key={Prioridade}>
              <input
                type="radio"
                name="prioridade"
                value={Prioridade}
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
