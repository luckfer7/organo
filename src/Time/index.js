import Colaborador from '../componentes/Colaborador'
import './Time.css'

const Time = (props, aoDeletar) => {
    const css = {backgroundColor: props.corSecundaria}

    return (
        (props.colaboradores.length) > 0 ? <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                
                return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>})}
            </div>
        </section>
        : ''
    )
}
//forma de fazer condicionais com react
// (props.colaboradores.length) > 0 ?...
// faz com que a tarja de time só apareça caso seja cadastrado alguem naquele time. Enquanto ninguém é cadastrado em determinado time, a tarja daquele time permanece sem aparecer na tela.

export default Time