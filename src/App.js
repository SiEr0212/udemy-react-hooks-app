import React, { useState} from 'react';
import logo from "./logo.svg";
import "./App.scss";
import NameTag from "./components/nameTag";
import Input from "./components/Input";

const makeGreen = (BaseComponent) => (props) => {
  const addGreen = {
    style: {
      color: "green",
    },
  };
  const newProps = {
    ...props,
    ...addGreen,
  };

  return <BaseComponent {...newProps} />;
};

const removeInline = (BaseComponent) => (props) => {
  const newProps = { ...props };
  delete newProps.style;
  return <BaseComponent {...newProps} />;
};

const GreenNameTag = makeGreen(NameTag);
const CleanNameTag = removeInline(NameTag);

const initialNames = [
  {firstName:"john", lastName: "johnson"},
  {firstName:"peter", lastName: "peterson"},
  {firstName:"jill", lastName: "jillson"}
]

function App() {
  const [names, setNames] = useState(initialNames);
  // eslint-disable-next-line no-console
  console.log("hi");
  const [age, setAge] = useState(21);
  const ageUpHandle = () => {
    setAge(age + 1)

  }
  const ageDownHandle = () => {
    setAge(age -1)
  }
  return (
   
    <div className="App">
      <header className="App-header">
        <Input placeholder="enter here" type="text"></Input>
        <h1 className="name title">Names List</h1>
        <h2>Age: {age}</h2>
        <button onClick={ageUpHandle}>Age up</button>
        <button onClick={ageDownHandle}>Age down</button>
        <br/>
        <GreenNameTag firstName={names[0].firstName} lastName={names[0].lastName}></GreenNameTag>
        <CleanNameTag firstName={names[1].firstName} lastName={names[1].lastName}></CleanNameTag>
        <NameTag firstName={names[2].firstName}  lastName={names[2].lastName}></NameTag>
        <NameTag></NameTag>
      </header>
    </div>
  );
}

export default App;
