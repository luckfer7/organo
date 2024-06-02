import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo}) => {
    return (
        //um bloco com imagem e cor de fundo e outro bloco com as informações, dentro de um bloco principal.

        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'> 
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
        
    )
}

export default Colaborador 