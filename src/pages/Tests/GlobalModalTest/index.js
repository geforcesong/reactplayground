import { useDispatch } from "react-redux";
import { openGlobalModal } from "../../../redux";
import License from "../../../components/License";

function GlobalModalUsage() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      openGlobalModal({
        title: "Hello world",
        component: License,
        lazyComponentPath: "test1/TestLazy1",
      })
    );
  };

  const handleClick1 = () => {
    dispatch(
      openGlobalModal({
        title: "Hi There",
        description: "Give me a good reason please?",
        lazyComponentPath: "TestLazyLoadComponent",
      })
    );
  };
  return (
    <div>
      <button onClick={handleClick}>Test 1</button>

      <button onClick={handleClick1}>Test 2</button>
    </div>
  );
}

export default GlobalModalUsage;
