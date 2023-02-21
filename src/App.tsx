import { useState } from "react";
import "./App.css";
import Bar from "./Bar";
import Button from "@mui/material/Button";

function App() {
  const [activeBar, setActiveBar] = useState(0);
  const [state, setState] = useState([25, 50, 75]);

  function handleButtonClick(e: any) {
    let value = Number(e.target.dataset.value);

    // set a temporary version of the state array
    let array = [...state];

    // update the value at the activeBar's index
    array[activeBar] += value;

    // if prevent var values from going below zero
    if (array[activeBar] < 0) {
      array[activeBar] = 0;
    }

    setState(array);
  }

  return (
    <div className="App">
      <h1>Progress Bars Demo</h1>

      {state.map((value, index) => (
        <Bar key={index} value={value} />
      ))}

      <Button onClick={handleButtonClick} variant="contained" type="button" data-value={-25} data-testid="minus-25">-25</Button>
      <Button onClick={handleButtonClick} variant="contained" type="button" data-value={-10} data-testid="minus-10">-10</Button>
      <Button onClick={handleButtonClick} variant="contained" type="button" data-value={+10} data-testid="plus-10">+10</Button>
      <Button onClick={handleButtonClick} variant="contained" type="button" data-value={+25} data-testid="plus-25">+25</Button>
    </div>
  );
}

export default App;
