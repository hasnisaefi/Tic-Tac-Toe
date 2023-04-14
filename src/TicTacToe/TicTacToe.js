import React, { useState } from 'react'
import './TicTacToe.css'

const TicTacToe = () => {
  const [titato, setTitato] = useState('X')
  const [cells, setCells] = useState(Array(9).fill('')) 
  // array fill => mengubah semua elemen dalam array menjadi nilai statis, dari indeks awal (default 0 ) hingga indeks akhir 
  // array fill adl metode dengan mengisi nilai yang kita inginkan untuk mengisi array 
  const [winner, setWinner] = useState()

  const Winner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5,],
        [6, 7, 8,],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6,],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        // console.log(pattern);
        if( 
          squares[pattern[0]] === '' || 
          squares[pattern[1]] === '' || 
          squares[pattern[2]] === '' 
        ) {
        // tdk melakukan apapun
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]])
        }
      });
    }
  };
  
  const handleClick = (num) => {
    console.log(num);
    if(cells[num]) {
      alert('siap di klik')
      return
    }

    let squares = [...cells]

    if (titato === 'X') {
      squares[num] = 'X'
      setTitato('O')
    } else{
      squares[num] = 'O'
      setTitato('X')
    }
    console.log(squares);
    setCells(squares)
    Winner(squares)
  }

  const handleStart = () => {
    setWinner(null)
    setCells(Array(9).fill(''))
  }
  
  const Cell = ({num}) => {
    console.log(num);
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>
  };

  return (
    <div className='container'>
      <table><br/>
        Turn: {titato}
        <tbody style={{
          cursor: 'pointer'
        }}>
          <tr>
            <Cell num={0}/>
            <Cell num={1}/>
            <Cell num={2}/>
          </tr>
          <tr>
            <Cell num={3}/>
            <Cell num={4}/>
            <Cell num={5}/>
          </tr>
          <tr>
            <Cell num={6}/>
            <Cell num={7}/>
            <Cell num={8}/>
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p>{winner} is the winner!</p>
          <button onClick={() => handleStart()}>Play Again</button>
        </>
      )}
    </div>
  )
}

export default TicTacToe
