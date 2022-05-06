import "./MyDialog.scss";
import { useRef, forwardRef, useImperativeHandle } from "react";

const MyDialog = forwardRef((props, ref) => {
  const dialogRef = useRef();

  const closeModal = () => {
    dialogRef.current.setAttribute("closing", "");
    dialogRef.current.addEventListener(
      "animationend",
      () => {
        dialogRef.current.removeAttribute("closing");
        dialogRef.current.close();
      },
      { once: true }
    );
  };

  useImperativeHandle(ref, () => ({
    showModal() {
      dialogRef.current.showModal();
    },
    closeModal,
  }));

  const handleClick = (e) => {
    if (e.target.nodeName === "DIALOG") {
      closeModal();
    }
  };

  return (
    <dialog className="my-dialog" ref={dialogRef} onClick={handleClick}>
      <div>{props.children}</div>
    </dialog>
  );
});

export default MyDialog;
