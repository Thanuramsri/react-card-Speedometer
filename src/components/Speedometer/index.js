// Write your code here

import {useState} from 'react'
import './index.css'

const Speedometer = () => {
  const [count, setCount] = useState(0)
  const onIncrement = () => {
    setCount(prevCount => prevCount + 10)
  }

  const onDecrement = () => {
    setCount(prevCount => prevCount - 10)
  }

  return (
    <div className="counter-container">
      <h1 className="heading"> SPEEDOMETER </h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        className="image" alt = "speedometer"
      />
      <h1 className="paragraph"> Speed is {count}mph </h1>
      <p className="paragraph"> Min Limit is 0mph, Max Limit is 200mph </p>
      <div>
        <button className="button" type = "button" onClick={onIncrement}>
          Accelerate
        </button>
        <button className="button" type = "button" onClick={onDecrement}>
          Apply Brake
        </button>
      </div>
    </div>
  )
}

export default Speedometer
