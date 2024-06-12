<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TipsCards from './componetnts/TipsCards/TipsCards'

const App = () => {
  const dummyText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ];

  const [cards, setCards] = useState(dummyText);

  const handleClose = (index) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  return (
    <div>
      <h1>Test App</h1>
      <TipsCards data={cards} onClose={handleClose} />
    </div>
  );
};
=======
import { useState } from "react";
import "./App.css";
import MyComponent from "./Component/chat";
import RegistrationForm from "./Component/registration/userRegister";
import BreathingExercise from "./Component/Engadgement/engadgement";
import Quiz from "./Component/Engadgement/quizGame";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ChatComponent></ChatComponent> */}
      {/* <RegistrationForm></RegistrationForm> */}
      {/* <MyComponent></MyComponent> */}

      <BreathingExercise></BreathingExercise>
      <Quiz></Quiz>
    </>
  );
}
>>>>>>> main

export default App;
