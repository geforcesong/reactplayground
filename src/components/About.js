import Rainbow from "../hoc/Rainbow";
import UseStateTestHook from "./UseStateTestHook";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

let styles = {
    height: 100
}
let age =0;

const About = (props) => {
  console.log("About props", props);
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [num, setNum] = useState({});
  
  const clickMe = () => {
    setNum({...num});
  };



  useEffect(()=>{
    console.log(`Runs every time: ${new Date()}`);
  }, [num])

  return (
    <div>
      <h1>This is About page</h1>
      <UseStateTestHook />

      {data &&
        data.map((d) => {
          return <p key={d.id}>{d.name}</p>;
        })}


      <button onClick={() => clickMe()}>Click Me</button>
    </div>
  );
};

export default Rainbow(About);
