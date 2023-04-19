import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import "./App.css";
import Count from "./components/Count/Count";
import Chip from "./components/Chip/Chip";

function App() {
  const requirements = [
    "html",
    "css",
    "javascript",
    "react js",
    "sass",
    "algoritmos",
    "API",
    "promises",
    "bbdd",
  ];

  return (
    <div className="app-container">
      <h1>Material components</h1>

      <section className="section">
        <h2>Chips</h2>
        <div className="chips-container">
          {requirements.map((elemtent,index) => (
            <Chip title={elemtent} key={index}/>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Contador</h2>
        <Count />
      </section>

      <section className="section">
        <h2>Buttons</h2>
        <p>Botones como componentes</p>
        <Button title="Action 1" />
        <Button title="Action 2" />
        <Button title="Action 3" />
        <Button title="Action 4" disabled={true} />
      </section>

      <section className="section">
        <h2>Cards</h2>
        <p>Cards como componentes</p>
        <Card
          image={
            "https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Nuevazelanda"}
          detail={"Conoce el país del Hobbit"}
        />
        <Card
          image={
            "https://images.pexels.com/photos/1709920/pexels-photo-1709920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Argentina"}
          detail={"Conoce el país del tango"}
        />
      </section>
    </div>
  );
}

export default App;
