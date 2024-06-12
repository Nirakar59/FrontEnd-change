import { useState } from "react";
import "./App.css";
import ChatComponent from "./Component/chat";
import RegistrationForm from "./Component/registration/userRegister";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ChatComponent></ChatComponent> */}
      <RegistrationForm></RegistrationForm>
    </>
  );
}

export default App;
