import logo from "./logo.svg";
import "./App.scss";
import NameTag from "./components/nameTag";
import Input from "./components/Input";

function App() {
  // eslint-disable-next-line no-console
  console.log("hi");

  return (
    
    <div className="App">
      <header className="App-header">
      <Input placeholder="enter here" type="text"></Input>
        <h1 className="name title">Names List</h1>
        <NameTag firstName="peter" lastName="johnson"></NameTag>
        <NameTag firstName="john" lastName="johnson"></NameTag>
        <NameTag firstName="jill" lastName="jillson"></NameTag>
        <NameTag ></NameTag>
      </header>
    </div>
  );
}

export default App;
