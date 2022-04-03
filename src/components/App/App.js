import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App(props) {

  console.log('app props', props)
  return (
    <div className="App">
      <header className="text-3xl font-bold underline">
        Hello World
      </header>
    </div>
  );
}

export default App;
