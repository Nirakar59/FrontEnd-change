// Cricket.jsx

import React, { useState } from 'react';

function CricketGame({ project }) {
  // State to manage score
  const [score, setScore] = useState({
    win: 0,
    tie: 0,
    loss: 0,
  });

  // Function to reset the score
  const resetScore = () => {
    setScore({
      win: 0,
      tie: 0,
      loss: 0,
    });
    localStorage.clear();
  };

  // Function to simulate computer's choice
  const computerChoice = () => {
    const randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
      return 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
      return 'Ball';
    } else {
      return 'Stump';
    }
  };

  // Function to determine result message
  const resultMsg = (userChoice, computerChoice) => {
    if (userChoice === 'Bat') {
      if (computerChoice === 'Ball') {
        setScore((prevScore) => ({ ...prevScore, win: prevScore.win + 1 }));
        return '==>>>😊 You have won';
      } else if (computerChoice === 'Bat') {
        setScore((prevScore) => ({ ...prevScore, tie: prevScore.tie + 1 }));
        return `===> It's a tie`;
      } else {
        setScore((prevScore) => ({ ...prevScore, loss: prevScore.loss + 1 }));
        return `==>>> 😔 Computer has won`;
      }
    } else if (userChoice === 'Ball') {
      if (computerChoice === 'Bat') {
        setScore((prevScore) => ({ ...prevScore, loss: prevScore.loss + 1 }));
        return `😔 Computer won the cricket`;
      } else if (computerChoice === 'Ball') {
        setScore((prevScore) => ({ ...prevScore, tie: prevScore.tie + 1 }));
        return `It's a tie Match`;
      } else {
        setScore((prevScore) => ({ ...prevScore, win: prevScore.win + 1 }));
        return `😊 You won the match`;
      }
    } else if (userChoice === 'Stump') {
      if (computerChoice === 'Bat') {
        setScore((prevScore) => ({ ...prevScore, loss: prevScore.loss + 1 }));
        return `😔 Computer won the match`;
      } else if (computerChoice === 'Ball') {
        setScore((prevScore) => ({ ...prevScore, win: prevScore.win + 1 }));
        return `😊 You won the match`;
      } else {
        setScore((prevScore) => ({ ...prevScore, tie: prevScore.tie + 1 }));
        return `It's a tie`;
      }
    }
  };

  // Function to handle button click
  const handleButtonClick = (choice) => {
    const computer = computerChoice();
    const result = resultMsg(choice, computer);
    showAll(choice, computer, result);
  };

  // Function to display choices and results
  const showAll = (userChoice, computerChoice, resultMsg) => {
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('#User_move').innerText =
      userChoice !== undefined ? `You have chosen ${userChoice}` : '';

    document.querySelector('#Computer_move').innerText =
      computerChoice !== undefined ? `Computer has chosen ${computerChoice}` : '';

    document.querySelector('#result').innerText =
      resultMsg !== undefined ? `Result: ${resultMsg}` : '';

    document.querySelector('#Score').innerText = `No. of matches : Won: ${score.win}, Tie: ${score.tie}, Loss ${score.loss}`;
  };

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} style={{ maxWidth: '300px' }} />
      <p>{project.description}</p>

      <h2>Bat Ball Stump</h2>

      <button className="button" onClick={() => handleButtonClick('Bat')}>
        Bat
      </button>

      <button className="button" onClick={() => handleButtonClick('Ball')}>
        Ball
      </button>

      <button className="button" onClick={() => handleButtonClick('Stump')}>
        Stump
      </button>

      <button onClick={resetScore}>Clear</button>

      <h3 id="User_move"></h3>
      <h3 id="Computer_move"></h3>
      <h3 id="result"></h3>
      <h3 id="Score"></h3>
    </div>
  );
}

export default CricketGame;
