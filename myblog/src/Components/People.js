import React from 'react'
import { useState, useEffect } from 'react'


function People() {
    const [data, setData] = useState([]);

    useEffect(()=>{

    })

    function handleClick(){
            //fetching api in react
    // fetch("http://api.open-notify.org/astros.json")
        fetch("/http://localhost:8080/allbooks")
            .then((response)=>response.json())
            .then((data)=>{
    //  setData(data.people);
})
    }
    console.log(data);

return (
    <div>
        {/* <button onClick={handleClick}>Fetch Data</button>
        {
            data.map((list)=>{
            return(
                <p> {`${list.name}  ${list.craft}`}</p>
            )
})
        } */}
    </div>
);
}


export default People