import { useContext } from "react";
import { UserContext } from "./UserContext";
import { ColorContext } from "./ColorContext";

const ChildComponent1 = () => {
    const {value, setValue} = useContext(UserContext);
    const {color, setColor} = useContext(ColorContext);

    return (
        <div>
            <h2>This is Child component1</h2>
            <div>{value}</div>
            <div>Color is: {color}</div>
            <button onClick={()=>setValue(value+1)}>Change</button>

            <button onClick={()=>setColor('red_' + color)}>update Color</button>
        </div>
    );
}

export default ChildComponent1;