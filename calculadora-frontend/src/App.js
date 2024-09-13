import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleNum1Change = (e) => setNum1(e.target.value);
  const handleNum2Change = (e) => setNum2(e.target.value);

  const manejarOperacion = async (operacion) => {
    try {
      const response = await axios.get('http://localhost:8080/api/calculadora/operar', {
        params: {
          num1: num1,
          num2: num2,
          operacion: operacion
        }
      });
      setResultado(response.data.resultado);
    } catch (error) {
      console.error("Error al realizar la operación:", error);
    }
  };

  return (
    <div className="App">
      <h1>Calculadora desarrollada con React, Spring y VSC</h1>

      <div>
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Número 1"
        />
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Número 2"
        />
      </div>

      <div>
        <button onClick={() => manejarOperacion('sumar')}>Sumar</button>
        <button onClick={() => manejarOperacion('restar')}>Restar</button>
        <button onClick={() => manejarOperacion('multiplicar')}>Multiplicar</button>
        <button onClick={() => manejarOperacion('dividir')}>Dividir</button>
      </div>

      <div className="resultado">
        {resultado !== null ? <h3>Resultado: {resultado}</h3> : <h3>Ingrese los numeros para realizar las operaciones</h3>}
      </div>
    </div>
  );
}

export default App;
