import { useContext } from "react";
import { UserContext } from "./UserContext";


const ChildComponent2 = () => {
    const {value, setValue} = useContext(UserContext);

    return (
        <div>
            <h2>This is Child component222</h2>
            <div>{value}</div>
        </div>
    );
}

export default ChildComponent2;