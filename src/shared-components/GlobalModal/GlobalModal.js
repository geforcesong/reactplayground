import { useEffect, useRef } from "react";
import MyDialog from "../../pages/Tests/ControlTest/MyDialog";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalModalRef } from "../../redux";

function GlobalModal() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.globalModal.title);
  const description = useSelector((state) => state.globalModal.description);
  const dialogRef = useRef();

  useEffect(() => {
    dispatch(setGlobalModalRef(dialogRef));
  }, []);

  return (
    <MyDialog ref={dialogRef}>
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    </MyDialog>
  );
}

export default GlobalModal;
