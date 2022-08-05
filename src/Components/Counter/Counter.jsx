import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
            setCounter(counter + 1);
    }

    return(
        <div>
            {counter === 3 ? new Error('Error!!!') : <button onClick={handleClick}>Counter</button>}
        </div>
    );
}

export default Counter;
