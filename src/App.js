import logo from "./logo.svg";
import "./App.scss";
import NameTag from "./components/nameTag";

function App() {
  // eslint-disable-next-line no-console
  console.log("hi");

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        <NameTag firstName="peter" lastName="johnson">Peter</NameTag>
        <NameTag firstName="john" lastName="johnson">John</NameTag>
        <NameTag firstName="jill" lastName="jillson">Jill</NameTag>
      </header>
    </div>
  );
}

export default App;
