import { AiFillCloseCircle } from "react-icons/ai";
import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar, colaborador, }) => {
    return (
        //um bloco com imagem e cor de fundo e outro bloco com as informações, dentro de um bloco principal.
        
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className="deletar" 
                onClick={() => aoDeletar(colaborador.id)}
                // onClick={aoDeletar(colaborador.id)}
            />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
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