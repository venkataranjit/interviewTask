import React, { useState } from "react";
import * as motion from "motion/react-client";
import "./modal.scss";
const Modal = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <h2>Modal</h2>
      <button onClick={() => setModal(true)}>Modal Box</button>
      {modal ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className="modal"
          style={{ display: modal && "block" }}
        >
          <span className="close" onClick={() => setModal(false)}>
            X
          </span>
          <p>This is Modal Content</p>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};
export default Modal;
