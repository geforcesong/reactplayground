import { useReducer } from "react";
import { BusinessContext } from "./BusinessContext";
import { BusinessReducer } from "./BusinessReducer";

const BusinessProvider = (props) => {
    const [count, dispatch] = useReducer(BusinessReducer, 0);

    return <BusinessContext.Provider value={{ count, dispatch }}>{props.children}</BusinessContext.Provider>
};

export { BusinessProvider };
