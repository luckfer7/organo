import Colaborador from '../componentes/Colaborador'
import './Time.css'

// const Time = (props, aoDeletar, mudarCor) => {
//     const css = {backgroundColor: props.corSecundaria}

//     return (
//         (props.colaboradores.length) > 0 ? <section className='time' style={css}>
//             <input onChange={evento => mudarCor(evento.target.value, props.nome)} value={props.corPrimaria} type='color' className='input-cor' />
//             <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
//             <div className='colaboradores'>
//                 {props.colaboradores.map(colaborador => {
                
//                 return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>})}
//             </div>
//         </section>
//         : ''
//     )
// }

const Time = ({ nome, cor, corSecundaria, colaboradores, aoDeletar, mudarCor }) => {
    const css = { backgroundColor: corSecundaria };
  
    return (
      colaboradores.length > 0 && (
        <section className="time" style={css}>
          <input onChange={evento => mudarCor(nome, evento.target.value)} value={cor} type="color" className="input-cor" />
          <h3 style={{ borderColor: cor }}>{nome}</h3>
          <div className="colaboradores">
            {colaboradores.map(colaborador => (
              <Colaborador
                key={colaborador.nome}
                corDeFundo={cor}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={aoDeletar}
              />
            ))}
          </div>
        </section>
      )
    );
  };
//forma de fazer condicionais com react
// (props.colaboradores.length) > 0 ?...
// faz com que a tarja de time só apareça caso seja cadastrado alguem naquele time. Enquanto ninguém é cadastrado em determinado time, a tarja daquele time permanece sem aparecer na tela.
//novo código dado pelo chatgpt pois eu não estava conseguindo fazer a mudança de cor nos cards.

export default Time