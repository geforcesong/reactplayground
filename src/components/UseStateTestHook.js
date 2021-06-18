import { useState } from 'react';

const UseStateTestHook = () => {
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(26);

    const handleClick = () => {
        setName('Luigi');
        setAge(39);
    }

    return (
        <div>
            My name is {name} and {age} years old! <button onClick={handleClick}>Change</button>
        </div>
    );
}

export default UseStateTestHook;