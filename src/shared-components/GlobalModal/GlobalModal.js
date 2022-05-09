import { useEffect, useRef } from "react";
import MyDialog from "../../pages/Tests/ControlTest/MyDialog";
import { useDispatch, useSelector } from "react-redux";
import { closeGlobalModal } from "../../redux";

function GlobalModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.globalModal.isOpen);
  const title = useSelector((state) => state.globalModal.title);
  const description = useSelector((state) => state.globalModal.description);
  const dialogRef = useRef();

  useEffect(() => {
    if (isOpen === true) {
      dialogRef.current.showModal();
    }
  }, [isOpen]);

  const handleClosed = () => {
    dispatch(closeGlobalModal());
  };

  const handleClick = () => {
    dialogRef.current.closeModal();
  };

  return (
    <MyDialog ref={dialogRef} onClosed={handleClosed}>
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>

        <button onClick={handleClick}>Close Me</button>
      </div>
    </MyDialog>
  );
}

export default GlobalModal;
