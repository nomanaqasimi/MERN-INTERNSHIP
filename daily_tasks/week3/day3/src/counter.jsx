import { useState } from "react";
import './App.css'

function CounterApp() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
<h1>Counter: {count}</h1>
<div>
<button onClick={() => setCount(count + 1)}>+</button>
<button onClick={() => setCount(count - 1)}>-</button>
</div>
</div>
   </>
  )
}
export default CounterApp