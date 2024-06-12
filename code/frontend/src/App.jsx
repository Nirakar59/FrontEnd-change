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

export default App;
