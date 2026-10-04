import "./App.css";
import Counter from "./components/Counter";
import RandomNumber from "./components/RandomNumber";

function App() {
  return (
    <div className="app">
      <h1>React Utility Dashboard</h1>

      <div className="dashboard">
        <div className="card">
          <Counter />
        </div>

        <div className="card">
          <RandomNumber />
        </div>
      </div>
    </div>
  );
}

export default App;