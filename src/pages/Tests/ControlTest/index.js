import InputTest from "./InputTest";
import RadioTest from "./radioTest";
import CheckboxTest from "./CheckboxTest";
import DropDownTest from "./DropDownTest";
import MyDialog from "./MyDialog";
import { useRef } from "react";

function ControlTest() {
  const dialogRef = useRef();

  const handleClick = () => {
    dialogRef.current.showModal();
  };

  const handleShow = () => {
    dialogRef.current.show();
  };

  const handleClose = (v) => {
    dialogRef.current.closeModal();
  };

  return (
    <div>
      <InputTest />
      <RadioTest />
      <CheckboxTest />
      <DropDownTest />

      <button onClick={handleClick}>Open Modal</button>
      <button onClick={handleShow}>Open</button>

      <MyDialog ref={dialogRef} onClose={handleClose}>
        <>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, fuga
          laboriosam distinctio temporibus culpa laudantium perferendis inventore
          maxime, eos, quibusdam accusantium itaque quos animi et qui? Dolorem
          iusto quibusdam debitis!

          <button onClick={handleClose}>Close</button>
        </>
      </MyDialog>
    </div>
  );
}

export default ControlTest;
