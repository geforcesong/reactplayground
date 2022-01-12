import { useState } from "react";
import { UserContext } from "./UserContext";
import { ColorContext } from "./ColorContext";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import { BusinessProvider } from "./BusinessProvider";


const ContextHookTesting = () => {
  const [value, setValue] = useState(1);
  const [color, setColor] = useState("pink");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <BusinessProvider>
        <UserContext.Provider value={{ value, setValue }}>
          <div>Context Hook Testing</div>
          <ChildComponent1></ChildComponent1>
          <ChildComponent2></ChildComponent2>
        </UserContext.Provider>
      </BusinessProvider>
    </ColorContext.Provider>
  );
};

export default ContextHookTesting;
