import logo from "./logo.svg";
import "./App.css";
import { MyComponent } from "./components/MyComponent";
import { SecondComponent } from "./components/SecondComponent";
import { ThirdComponent } from "./components/ThirdComponent";
import { useState } from "react";
import Child from "./components/Child";
import FourthComponent from "./components/FourthComponent";

function App() {
  //? hook nombre
  const [name, setname] = useState("lina");
  const [message, setmessage] = useState("");

  //?funcion addmessage para el hook del name
  const addMessage = (message) => {
    console.log(message);
  };

  const medicalRecord = {
    height: "190",
    bloodGroup: "O+",
    allergies: "None",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Estructura inicial del proyecto y limpia.</p>
        <div>
          <hr />
          <FourthComponent />
          <hr />
        </div>
        <Child name={name} setmessage={setmessage} addMessage={addMessage} />
        <SecondComponent />
        <ThirdComponent
          name="Carlos"
          lastName="Gonzalez"
          card={medicalRecord}
        />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
