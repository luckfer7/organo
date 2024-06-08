import { useState } from 'react'
import './Campo.css'
import { type } from '@testing-library/user-event/dist/type'

const Campo = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    const placeholderModificado = `${props.placeholder}...`
    return (
        <div className="campo">
            <label>{props.label}</label>
            <input className='campo-color' type={props.type} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
}

export default Campo 