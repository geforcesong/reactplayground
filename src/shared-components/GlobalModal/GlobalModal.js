import React, { useEffect, useRef, lazy, Suspense } from "react";
import MyDialog from "../../pages/Tests/ControlTest/MyDialog";
import { useDispatch, useSelector } from "react-redux";
import { closeGlobalModal } from "../../redux";
import styles from "./GlobalModal.module.scss";

function GlobalModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.globalModal.isOpen);
  const title = useSelector((state) => state.globalModal.title);
  const description = useSelector((state) => state.globalModal.description);
  const CustomComponent = useSelector((state) => state.globalModal.component);
  const lazyComponentPath = useSelector(
    (state) => state.globalModal.lazyComponentPath
  );
  const dialogRef = useRef();

  useEffect(() => {
    if (isOpen === true) {
      dialogRef.current.showModal();
    }
  }, [isOpen]);

  const handleClosed = () => {
    dispatch(closeGlobalModal());
  };

  const closeClick = () => {
    dialogRef.current.closeModal();
  };

  let LazyComponent = null;
  if (lazyComponentPath) {
    LazyComponent = lazy(() => import("./globalModals/" + lazyComponentPath));
  }

  return (
    <MyDialog ref={dialogRef} onClosed={handleClosed}>
      <div>
        <div onClick={closeClick} className={styles["modal-title"]}>
          {title}
          <div className={styles.cross}>&#9587;</div>
        </div>
        <div className={styles["modal-body"]}>
          {CustomComponent ? <CustomComponent /> : description}
        </div>
        {lazyComponentPath && (
          <Suspense fallback={<>loading...</>}>
            <LazyComponent />
          </Suspense>
        )}
      </div>
    </MyDialog>
  );
}

export default GlobalModal;
