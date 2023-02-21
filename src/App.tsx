import { useState } from "react";
import "./App.scss";
import Bar from "./Bar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

  const handleChange = (e: any) => {
    setActiveBar(e.target.value);
  };

  return (
    <Paper className="App">
      <h1>Progress Bars Demo</h1>

      {state.map((value, index) => (
        <Bar key={index} value={value} />
      ))}

      <div className="controls">
        <FormControl fullWidth size="small" sx={{ width: 175 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={activeBar}
            onChange={handleChange}
          >
            <MenuItem value={0}>Progress Bar 1</MenuItem>
            <MenuItem value={1}>Progress Bar 2</MenuItem>
            <MenuItem value={2}>Progress Bar 3</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={handleButtonClick}
          variant="contained"
          type="button"
          data-value={-25}
          data-testid="minus-25"
        >
          -25
        </Button>
        <Button
          onClick={handleButtonClick}
          variant="contained"
          type="button"
          data-value={-10}
          data-testid="minus-10"
        >
          -10
        </Button>
        <Button
          onClick={handleButtonClick}
          variant="contained"
          type="button"
          data-value={+10}
          data-testid="plus-10"
        >
          +10
        </Button>
        <Button
          onClick={handleButtonClick}
          variant="contained"
          type="button"
          data-value={+25}
          data-testid="plus-25"
        >
          +25
        </Button>
      </div>
    </Paper>
  );
}

export default App;
