import { useContext } from "react";
import { UserContext } from "./UserContext";
import { BusinessContext } from "./BusinessContext";


const ChildComponent2 = () => {
    const {value, setValue} = useContext(UserContext);
    const {count, dispatch} = useContext(BusinessContext);

    return (
        <div>
            <h2>This is Child component222</h2>
            <div>{value}</div>

            <h3>Reducer Data is: {count}</h3>

            <button onClick={()=>dispatch({type:'ADD', payload: 3})}>Add 3</button>
            <button onClick={()=>dispatch({type:'SUB', payload: 5})}>Sub 5</button>
        </div>
    );
}

export default ChildComponent2;