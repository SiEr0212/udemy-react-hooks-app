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
        <NameTag >Peter</NameTag>
        <NameTag >John</NameTag>
        <NameTag >Jill</NameTag>
      </header>
    </div>
  );
}

export default App;
