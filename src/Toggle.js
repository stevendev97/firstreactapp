import React, { useState } from 'react'

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    return (
      <div>
        <p>{isOn ? 'ON' : 'OFF'}</p>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>
      </div>
    );
  
}

export default Toggle
