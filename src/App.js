import logo from "./logo.svg";
import "./App.css";
import { MyComponent } from "./components/MyComponent";
import { SecondComponent } from "./components/SecondComponent";
import { ThirdComponent } from "./components/ThirdComponent";

function App() {
  const medicalRecord = {
    height: "160",
    bloodGroup: "RhO+",
    allergies: "None",
    dad: "dasd",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Estructura inicial del proyecto y limpia.</p>
        <SecondComponent />
        <ThirdComponent name="Inés" lastName="Oliveros" card={medicalRecord} />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
