import "./App.css";
import Contador from "./components/contador.jsx";
import Form from "./components/form.jsx";
import World from "./components/palabra.jsx";
import Card from "./components/card.jsx";
import Lista from "./components/lista.jsx";
import imagen from "./img/feli.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <World />
        <Card
          name={"felipe"}
          apellido={"coltrinari"}
          profesion={"tecnico"}
          img={imagen}
        />
        <Contador />
        <Lista />
        <Form />
      </header>
    </div>
  );
}

export default App;
