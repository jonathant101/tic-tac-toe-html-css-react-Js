import React from 'react';
import './style.css';

export default function App() {
  const [gameRunning, setGameRunning] = React.useState(true);
  const button = gameRunning ? 'none' : 'inline';
  const [q1, setq1] = React.useState(true);
  const [resultado, setResultado] = React.useState(true);
  const [jogada, setJogada] = React.useState([
    true,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const inputSolve = (quadrante) => {
    gameRunning ? game(quadrante) : null;
  };

  const velha = jogada.filter((ind) => {
    return ind == '';
  }).length;

  const game = (quadrante) => {
    if (jogada[quadrante] === '') {
      const newArray = jogada;
      const AorB = newArray[0] ? 'X' : 'O';
      newArray[quadrante] =
        newArray[quadrante] == '' ? AorB : newArray[quadrante];
      newArray[0] = !newArray[0];
      setJogada(newArray);

      setq1(!q1);
      logica(AorB);
    }
  };

  const logica = (p) => {
    // horizontais ------

    if (jogada[1] == p && jogada[2] == p && jogada[3] == p) {
      setResultado(`${p} ganhou!`);
      setGameRunning(false);
    } else if (jogada[4] == p && jogada[5] == p && jogada[6] == p) {
      setResultado(`${p} ganhou!`);
      setGameRunning(false);
    } else if (jogada[7] == p && jogada[8] == p && jogada[9] == p) {
      setResultado(`${p} ganhou!`);
      setGameRunning(false);
    }

    // vertical  ------
    else if (jogada[1] == p && jogada[4] == p && jogada[7] == p) {
      setResultado(`${p} ganhou!`);
      setGameRunning(false);
    } else if (jogada[2] == p && jogada[5] == p && jogada[8] == p) {
      setResultado(`${p} ganhou!`);
      setGameRunning(false);
    } else if (jogada[3] == p && jogada[6] == p && jogada[9] == p) {
      setResultado(`${p} ganhou!`);
      setGameRunning(false);
    }

    // diagonal ------
    else if (jogada[1] == p && jogada[5] == p && jogada[9] == p) {
      setResultado(`${p} ganhou!`);
      setGameRunning(false);
    } else if (jogada[3] == p && jogada[5] == p && jogada[7] == p) {
      setResultado(`${p} ganhou!`);
      setGameRunning(false);
    }

    // draw
    else if (velha <= 1) {
      setResultado(`Deu Velha`);
      setGameRunning(false);
    }
  };

  const resetGame = () => {
    setGameRunning(true);
    setResultado('');
    setJogada([true, '', '', '', '', '', '', '', '', '']);
  };

  return (
    <div>
      <div className="central">
        {/* div:o1 */}
        <div className="child" onClick={(e) => inputSolve(1)}>
          <span>{jogada[1]}</span>
        </div>
        {/* div:o2 */}
        <div className="child" onClick={(e) => inputSolve(2)}>
          <span>{jogada[2]}</span>
        </div>
        {/* div:o3 */}
        <div className="child" onClick={(e) => inputSolve(3)}>
          <span>{jogada[3]}</span>
        </div>
        {/* div:o4 */}
        <div className="child" onClick={(e) => inputSolve(4)}>
          <span>{jogada[4]}</span>
        </div>
        {/* div:o5 */}
        <div className="child" onClick={(e) => inputSolve(5)}>
          <span>{jogada[5]}</span>
        </div>
        {/* div:o6*/}
        <div className="child" onClick={(e) => inputSolve(6)}>
          <span>{jogada[6]}</span>
        </div>
        {/* div:o7 */}
        <div className="child7" onClick={(e) => inputSolve(7)}>
          <span>{jogada[7]}</span>
        </div>
        {/* div:o8 */}

        <div className="child8" onClick={(e) => inputSolve(8)}>
          <span>{jogada[8]}</span>
        </div>
        {/* div:o9 */}
        <div className="child9" onClick={(e) => inputSolve(9)}>
          <span>{jogada[9]}</span>
        </div>
      </div>
      <button onClick={resetGame} style={{ display: button }}>
        jogar novamente?
      </button>
      <h1>{resultado}</h1>
    </div>
  );
}
