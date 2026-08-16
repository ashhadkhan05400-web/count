import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount((c) => c + 1)
  }

  function decrement() {
    setCount((c) => c - 1)
  }

  return (
    <div className="device">
      <div className="top-row">
        <span className="brand">Tally · 01</span>
        <div className="bolts">
          <span className="bolt"></span>
          <span className="bolt"></span>
        </div>
      </div>

      <div className="screen">
        <span className="value">{String(count).padStart(2, '0')}</span>
        <p className="screen-label">Count</p>
      </div>

      <div className="pair">
        <button onClick={decrement} className="btn minus">&minus;</button>
        <button onClick={increment} className="btn plus">+</button>
      </div>
    </div>
  );
}

export default App
