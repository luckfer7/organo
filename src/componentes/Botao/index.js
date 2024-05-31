import './Botao.css'

const Botao = (props) => {
    return (
        <button className='botao'>{props.children}</button>
        // o childrem passa tudo que estiver dentro da tag button. seu comportamento é o mesmo das tags pai e filho.
    )
}

export default Botao