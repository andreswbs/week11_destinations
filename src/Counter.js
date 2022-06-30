import React from 'react'

function Counter(props) {
    return (
        <div>
            <div>Counter </div>
            <button onClick={()=>{props.setCounter(p => p+1)}} >+</button>
            {props.counter}
            <button onClick={()=>{props.setCounter(p => p-1)}}>-</button>
        </div>
    )
}



