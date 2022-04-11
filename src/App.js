import React,{ useState } from "react";
import './App.css';

function App() {
  //propriedades
  const [mostrarCardResultado, setMostrarCardResultado] = useState(false);
  const [acerto, setAcerto] = useState(0);
  const [perguntaAtual, setPerguntaAtual] = useState(0);

  const perguntas = [
    {
      text: "Aperte no azul:",
      options: [
        {id: 0, text: "Amarelo", isCorrect: false},
        {id: 1, text: "Azul", isCorrect: true},
        {id: 2, text: "Preto", isCorrect: false},
        {id: 3, text: "Cinza", isCorrect: false},
      ],
    },
    {
      text: "Aperte no amarelo:",
      options: [
        {id: 0, text: "Amarelo", isCorrect: true},
        {id: 1, text: "Azul", isCorrect: false},
        {id: 2, text: "Preto", isCorrect: false},
        {id: 3, text: "Cinza", isCorrect: false},
      ],
    },
    {
      text: "Aperte no preto:",
      options: [
        {id: 0, text: "Amarelo", isCorrect: false},
        {id: 1, text: "Azul", isCorrect: false},
        {id: 2, text: "Preto", isCorrect: true},
        {id: 3, text: "Cinza", isCorrect: false},
      ],
    },

  ];

  const optionClicked = (isCorrect) => {
    if(isCorrect) {
      setAcerto(acerto + 1);
      console.log(acerto);
    }

    if(perguntaAtual + 1 < perguntas.length){
      setPerguntaAtual(perguntaAtual +1);
    
    }else{
      setMostrarCardResultado(true);
    }

  }

  const reininciarJogo = () =>{
    setAcerto(0);
    setPerguntaAtual(0);
    setMostrarCardResultado(false);
  };
  return (
    <div className="App">
      <h1>Color quiz</h1>
      <h2>Acerto: {acerto}</h2>
      {mostrarCardResultado ? (
        //resultado final
        <div className='card-resultado'>
          <h1>Resultado Final</h1>
          <h2>Acertou {acerto} de {perguntas.length} perguntas - ({(acerto/perguntas.length)*100}%)</h2>
          <button onClick={() => reininciarJogo()} >Reininciar</button>

        </div>
      )
        : (
        //questão atual
        <div className='card-central'>
          <h2>Pergunta {perguntaAtual +  1} de {perguntas.length} </h2>
          <h3 className='texto-pergunta'>{perguntas[perguntaAtual].text} </h3>
          <ul>
            {perguntas[perguntaAtual].options.map((options) => 
                {
                  return (
                    <li onClick={() => optionClicked(options.isCorrect)} key={options.id}>{options.text}</li>
                  );
                }
              )
            }
          </ul>
        </div>
        )

      }





    </div>

  );
}

export default App;
