import React, {useState, useEffect} from 'react'

function Text() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`New number: ${count}`);
    }, [count]);
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Click!</button>
        <p>Number: {count}</p>
    </div>
  )
}

export default Text