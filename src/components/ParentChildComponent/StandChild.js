import { useEffect } from "react";

function StandChild() {
  const message = "I am stand child";
  useEffect(() => {
    console.log("hahaha");
    return ()=>{
        console.log('unregistered StandChild');
    }
  }, []);

  return <h2>{message}</h2>;
}

export default StandChild;
