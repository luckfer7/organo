import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './Time';

function App() {

  const [times, setTimes] = useState ([
    //a diferença aqui é que aqui cada time receberá uma cor diferente.

    {
      nome: 'Programação',
      cor: '#57c278',
  
    },
    {
      nome: 'Front-End',
      cor: '#82cffa',
     
    },
    {
      nome: 'Data Science',
      cor: '#a6d157',
      
    },
    {
      nome: 'Devops',
      cor: '#e06b69',
      
    },
    {
      nome: 'UX e Design',
      cor: '#db6ebf',
      
    },
    {
      nome: 'Mobile',
      cor: '#ffba05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#ff8a29',
    },
  ])

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador () {
  
    console.log("deletando colaborador")
  }

  function mudarCorDoTime (nome, cor) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor
      }
      return time;
    }))
  }

  return (
    <div className="App">  
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        mudarCor={mudarCorDoTime} 
        key={time.nome} 
        nome={time.nome} 
        cor={time.cor} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        />)}

      {/* pra cada time, dentro da lista de times, a gente cria um componente chamado "time" com o nome(time.nome.)*/}
    </div>
  );
}

//quando tivermos o colaborador cadastrado, teremos acesso a ele
export default App;
