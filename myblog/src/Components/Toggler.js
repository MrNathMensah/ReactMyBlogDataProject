import React from 'react'
import { useState } from 'react'

function Toggler() {
    const [toggleValue, setToggleValue] = useState(false);

    function changeColor(){
        setToggleValue(!toggleValue)
    }
     const color = toggleValue? 'green' : 'red';
  return (
    <div style={{ backgroundColor: color, width:'600px', height:'100px'}}>
        <h2 onClick={changeColor} style={{ color:toggleValue? false:'white'}}>Hello</h2>
        <button onClick={changeColor}>
            Change Color
        </button>
    </div>
  )
}

export default Toggler