import React, { useEffect, useState } from 'react';
import Tile from './Tile';

const Board = () => {
  const [currMoleTile, setCurrMoleTile] = useState(null);
  const [currPlantTile, setCurrPlantTile] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setGame();
  }, []);

  const setGame = () => {
    for (let i = 0; i < 9; i++) {
      // Create tiles
      // For simplicity, assuming 3x3 grid, hardcoding for now
      // In a real scenario, you'd calculate grid dynamically
      // Here we're using Tile component to represent each tile
      let tile = <Tile key={i} id={i.toString()} selectTile={selectTile} />;
      document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
  }

  const getRandomTile = () => {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
  }

  const setMole = () => {
    if (gameOver) return;
    if (currMoleTile) currMoleTile.innerHTML = "";

    let mole = <img src="./monty-mole.png" alt="mole" />;
    let num = getRandomTile();

    if (currPlantTile && currPlantTile.id === num) return;

    setCurrMoleTile(document.getElementById(num));
    currMoleTile.appendChild(mole);
  }

  const setPlant = () => {
    if (gameOver) return;
    if (currPlantTile) currPlantTile.innerHTML = "";

    let plant = <img src="./piranha-plant.png" alt="plant" />;
    let num = getRandomTile();

    if (currMoleTile && currMoleTile.id === num) return;

    setCurrPlantTile(document.getElementById(num));
    currPlantTile.appendChild(plant);
  }

  const selectTile = () => {
    if (gameOver) return;
    if (this === currMoleTile) {
      setScore(score + 10);
      document.getElementById("score").innerText = score.toString();
    } else if (this === currPlantTile) {
      document.getElementById("score").innerText = "GAME OVER: " + score.toString();
      setGameOver(true);
    }
  }

  return (
    <div id="board">
      {/* Tiles will be dynamically rendered here */}
    </div>
  );
}

export default Board;
