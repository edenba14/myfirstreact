import './App.css';
import {useState} from 'react'

function App() {
  const [color,setColor]=useState('yellow');
  return (
    <div className="App">
      <input style={{backgroundColor:color}} onChange={(e)=>(setColor(e.target.value))}/>
    </div>
  );
}

export default App;
