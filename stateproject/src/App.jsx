import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [cor, setCor] = useState('lightblue'); 
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState(''); // Adiciona um novo estado para o nome
  const [time, setTime] = useState(new Date().toLocaleTimeString());

   // Atualiza o horario a cada segundo
   useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Funcao para mudar a cor
  const toggleCor = () => {
    setCor((prevCor) =>
      prevCor === 'lightblue' ? 'lightpink' : 'lightblue'
    );
  };

  return (
    <>
      {/* Botao de cliques */}
      <button onClick={() => setCount((count) => count + 1)}>
        CLICA {count}
      </button>
    
      {/*Mensagem boas-vindas com nome*/}
      <div style={{ 
        display: isVisible ? 'block' : 'none', 
        backgroundColor: cor, // aplica a cor de fundo
        padding: '20px', 
        margin: '10px'
      }}>
        {nome ? `Olá, ${nome}!` : 'Por favor, insira seu nome.'}
      </div>

      {/* Botao que deixa invisível */}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Esconder' : 'Mostrar'}
      </button>

      {/* Botao que muda de cor */}
      <button onClick={toggleCor}>
        {cor === 'lightblue' ? 'Cor 1' : 'Cor 2'}
      </button>

      {/* Campo de entrada para o nome */}
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)} // Atualiza o state com o nome inserido
      />

      {/* Mostrando horário */}
      <div style={{ marginTop: '20px', fontSize: '24px' }}>
        {time}
      </div>
    </>
  );
}

export default App;
