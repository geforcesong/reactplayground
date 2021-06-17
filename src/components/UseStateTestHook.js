import { useState } from 'react';

const UseStateTestHook = () => {
    const [name, setName] = useState('Mario');

    const handleClick = () => {
        setName('Luigi');
    }

    return (
        <div>
            My name is {name}! <button onClick={handleClick}>Change</button>
        </div>
    );
}

export default UseStateTestHook;