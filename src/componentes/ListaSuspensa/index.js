import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    
    return (
        <div className='Lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                    //pra cada item retorna uma option.
                    //cada opção tem que ter uma chave unica, e o nome dessa chave vai ser a do próprio item.
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa