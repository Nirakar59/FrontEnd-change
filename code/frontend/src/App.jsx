import { useState } from "react";
import "./App.css";
import ChatComponent from "./Component/chat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChatComponent></ChatComponent>

    </>
  );
}

export default App;
