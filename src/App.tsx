import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './components/Celula/Celula.tsx';
import Celula from './components/Celula/Celula.tsx';
import Tabuleiro from './components/Tabuleiro/Tabuleiro.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Index - bem vindo</h1>
    </>
  )
}

export default App
