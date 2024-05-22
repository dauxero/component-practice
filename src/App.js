import logo from "./logo.svg";
import "./App.css";
import { MyComponent } from "./components/MyComponent";
import { SecondComponent } from "./components/SecondComponent";
import { ThirdComponent } from "./components/ThirdComponent";

function App() {
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
