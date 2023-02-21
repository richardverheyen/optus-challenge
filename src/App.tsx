import { useState } from 'react'
import './App.css'
import Bar from './Bar'

function App() {
  const [activeBar, setActiveBar] = useState(0);
  const [state, setState] = useState([25, 50, 75]);

  return (
    <div className="App">
      <h1>Progress Bars Demo</h1>

      {
        state.map((value, index) => (
          <Bar key={index} value={value} />
        ))
      }
      
    </div>
  )
}

export default App
