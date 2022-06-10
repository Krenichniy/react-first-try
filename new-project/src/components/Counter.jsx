import React, {useState} from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);

    function incrementFn() {
    setCount(count + 1);
  }

    function decrementFn() {
    setCount(count - 1);
  }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementFn}>Increment</button>
            <button onClick={decrementFn}>Decrement</button>
        </div>
    )
 }

export default Counter;