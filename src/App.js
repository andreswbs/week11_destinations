import React, {useState} from "react";
import "./styles.css";
import Counter from './Counter'

export default function App() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [counterThree, setCounterThree] = useState(0);

  const increaseAllButtons = () => {
    setCounterOne(p => p+1)
    setCounterTwo(p => p+1)
    setCounterThree(p => p+1)
  }

  const decreaseAllButtons = () => {
    setCounterOne(p => p-1)
    setCounterTwo(p => p-1)
    setCounterThree(p => p-1)
  }
  return (
    <>
      <div className="block">
        <h1>Make It Count</h1>
        Your goal: implement a page showing <strong>3 counters</strong>
        <br />
        <ul>
          <li>every counter has a + and a - button</li>
          <li>
            for every counter, clicking on + will increase the count number on
            that single counter
          </li>
          <li>
            for every counter, clicking on - will decrease the count number on
            that single counter
          </li>
          <li>
            the page will have 2 extra buttons "decrease all" and "increase all"
          </li>
          <li>
            clicking on "increase all" will increase the count of one unit on
            all the counters
          </li>
          <li>
            clicking on "decrease all" will decrease the count of one unit on
            all the counters
          </li>
        </ul>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/state-and-lifecycle.html"
        >
          Help
        </a>
      </div>

      <div class="block">
        <div>
          <div>Counter 1</div>
          <button onClick={()=>{setCounterOne(p => p+1)}} >+</button>
          {counterOne}
          <button onClick={()=>{setCounterOne(p => p-1)}}>-</button>
        </div>
        <div>
          <div>Counter 2</div>
          <button onClick={()=>{setCounterTwo(p => p+1)}} >+</button>
          {counterTwo}
          <button onClick={()=>{setCounterTwo(p => p-1)}}>-</button>
        </div>
        <div>
          <div>Counter 3</div>
          <button onClick={()=>{setCounterThree(p => p+1)}} >+</button>
          {counterThree}
          <button onClick={()=>{setCounterThree(p => p-1)}}>-</button>
        </div>

        <div>
          <button onClick={increaseAllButtons}>Increase All</button>
          <button onClick={decreaseAllButtons}>Decrease All</button>
        </div>
        
      </div>
    </>
  );
}
