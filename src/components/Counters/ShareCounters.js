import { useState } from 'react';
import CountBtn from './CountBtn';

function ShareCounters(props) {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }
    return (
      <div>
        <CountBtn name="First" count={count} onclick={handleClick} />
        <CountBtn name="Second" count={count} onclick={handleClick} />
      </div>
    );
}
export default ShareCounters;