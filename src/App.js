import logo from "./logo.svg";
import "./App.scss";

function App() {
  // eslint-disable-next-line no-console
  console.log("hi");

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        <h3 className="name">Peter</h3>
        <h3 className="name">John</h3>
        <h3 className="name">Jill</h3>
      </header>
    </div>
  );
}

export default App;
