import React, { useState } from 'react'

function FristComponent() {
    const [counter, setCounter] = useState(0)

    function handelAdd() {
        setCounter(counter + 1)
    }

    function handelDec() {
        setCounter(counter - 1)
    }
    return (
        <div>
            <h2>First component</h2>
            <h2>Counter Value: {counter}</h2>
            <button onClick={handelAdd}>Increase</button>
            <button onClick={handelDec}>Decrease</button>
        </div>
    )
}

export default FristComponent; 