import React, { useState } from 'react';
import './Calculadora.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Erro');
    }
  };

  const handleClearEntry = () => {
    setInput((prev) => {
      const updated = prev.replace(/(\d+\.?\d*)$/, ''); // remove último número
      return updated;
    });
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Para  inverso de um número  "1/x"
  const handleReciprocal = () => {
    try {
      const result = eval(input);
      if (result === 0) {
        setInput('Erro'); // evitar divisão por zero
      } else {
        setInput((1 / result).toString());
      }
    } catch {
      setInput('Erro');
    }
  };

  // Para inverter sinal (positivo/negativo)
  const toggleSign = () => {
    try {
      const result = eval(input);
      setInput((-result).toString());
    } catch {
      setInput('Erro');
    }
  };

  // Para a porcentagem
  const handlePercentage = () => {
    try {
      const result = eval(input);
      setInput((result / 100).toString());
    } catch {
      setInput('Erro');
    }
  };

  // Para X ao quadrado e raiz de x ao quadrado
  const handleSquare = () => {
    try {
      const result = eval(input);
      setInput((result * result).toString());
    } catch {
      setInput('Erro');
    }
  };

  // Para a raiz quadrada de x
  const handleSqrt = () => {
    try {
      const result = eval(input);
      if (result < 0) {
        setInput('Erro'); // raiz quadrada de número negativo não é real
      } else {
        setInput(Math.sqrt(result).toString());
      }
    } catch {
      setInput('Erro');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        <button onClick={handlePercentage}>%</button>
        <button onClick={handleClearEntry}>CE</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleBackspace}>⌫</button>

        <button onClick={handleReciprocal}>1/x</button>
        <button onClick={handleSquare}>x²</button>
        <button onClick={handleSqrt}>√x</button>
        <button onClick={() => handleClick('/')}>÷</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>×</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={toggleSign}>±</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button class="igual" onClick={handleResult}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
