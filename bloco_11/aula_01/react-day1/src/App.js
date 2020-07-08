import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    task()
   );
}
const task = () => {
  return (
   compromisso.map(aux => <li>{aux}</li>)
  );
}

const compromisso = ['viajar para SP',
'revisar o carro',
'entregar trabalho'
]
export default App;
