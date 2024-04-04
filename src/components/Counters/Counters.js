import { useState } from 'react';
let c2 = 0;
function Counters(props) {
    const [count, setCount] = useState(0);
    const { name } = props;


    function handleClick() {
      setCount(count + 1);
      c2++;
    }
  
    return (
      <button onClick={handleClick}>
        Clicked <strong>{name}</strong>  {count} times
        Clicked c2 {c2} times
      </button>
    );
  }

export default Counters;