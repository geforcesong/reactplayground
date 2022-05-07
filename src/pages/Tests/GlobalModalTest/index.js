import { useSelector, useDispatch } from "react-redux";
import { setGlobalModalData } from "../../../redux";

function GlobalModalUsage() {
  const dispatch = useDispatch();
  const modalRef = useSelector((state) => state.globalModal.globalModalRef);

  const handleClick = () => {
    dispatch(
      setGlobalModalData({
        title: "Hello world",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis?",
      })
    );
    modalRef.current.showModal();
  };

  const handleClick1 = () => {
    dispatch(
      setGlobalModalData({
        title: "Hi There",
        description:
          "Give me a good reason please?",
      })
    );
    modalRef.current.showModal();
  };
  return (
    <div>
      <button onClick={handleClick}>Test 1</button>

      <button onClick={handleClick1}>Test 2</button>
    </div>
  );
}

export default GlobalModalUsage;
