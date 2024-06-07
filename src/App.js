import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState ([
    //a diferença aqui é que aqui cada time receberá uma cor diferente.

    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57c278',
  
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82cffa',
     
    },
    {
      id: uuidv4(),    
      nome: 'Data Science',
      cor: '#a6d157',
      
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#e06b69',
      
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#db6ebf',
      
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#ffba05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#ff8a29',
    },
  ])

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novoColaborador = {...colaborador, id: uuidv4()}
    setColaboradores([...colaboradores, novoColaborador])
  }

  function deletarColaborador (id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime (id, cor) {
    setTimes(times.map(time => {
      if (time.id === id) {
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
        id={time.id}
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
