import Rainbow from "../hoc/Rainbow";
import UseStateTestHook from "./UseStateTestHook";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import MButton from "../shared-components/MButton";
import useLocalStorage from "./BootstrapComponents/hooks/useLocalStorage";

const About = (props) => {
  // console.log("About props", props);
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");

  const [num, setNum] = useState({});
  const [inputValue, setInputValue] = useState({ name: "George", price: 100 });
  const { name, price } = inputValue;
  const [pig, setPig] = useLocalStorage("pig", () => "b");

  const clickMe = () => {
    setNum({ ...num });
    console.log(inputValue);
    console.log(pig);
    setPig((prev) => prev + 1);
  };

  const handleChange = (e) => {
    const { field, content } = e;
    setInputValue((prev) => {
      return {
        ...prev,
        [field]: content,
      };
    });
  };

  useEffect(() => {
    console.log(`Runs every time: ${new Date()}`);
  }, [num]);

  return (
    <div>
      <h1>This is About page</h1>
      <UseStateTestHook />
      <MButton
        label="Name"
        field="name"
        value={name}
        onChange={handleChange}
        width={100}
        height={30}
      />
      <br />
      <MButton
        label="Price"
        field="price"
        value={price}
        onChange={handleChange}
        width={200}
        height={60}
      />
      {data &&
        data.map((d) => {
          return <p key={d.id}>{d.name}</p>;
        })}

      <button onClick={() => clickMe()}>Click Me</button>
    </div>
  );
};

export default Rainbow(About);
