import React from 'react'
import { useState, useEffect } from 'react'

function FrontAndBack() {

    const [data, setData] = useState([]);

    function handleClick(){
    // fetch("http://localhost:8080/allbooks")
    fetch("http://api.open-notify.org/astros.json")
        .then((response)=>response.json())
        .then((dat) => {
            setData(dat);
        })
    }
  return (
    <div>
        <button onClick={handleClick}>Fetch Data</button>
        {
            data.map((list)=>{
            return(
                // <p> {`${list.title}  ${list.category}  ${list.author}`}</p>
                <p> {`${list.message}  ${list.number}`}</p>
            )
})
        }
    </div>
  )
}

export default FrontAndBack