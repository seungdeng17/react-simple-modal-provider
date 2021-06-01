import { useState } from "react";
import Modal, { modalAnimation, useModal } from "../../lib";
import "./modal.scss";

export default ({ children }) => {
  const [state, setState] = useState(false);
  const { open: openModal7 } = useModal("Modal7");

  return (
    <Modal
      id={"Modal6"}
      consumer={children}
      state={state}
      setState={setState}
      duration={250}
      animation={modalAnimation.scaleUp}
    >
      <div
        style={{ width: "6em", height: "4em", fontSize: "3em" }}
        className="modal-body"
        onClick={openModal7}
      >
        🤩
        <p style={{ margin: 10 }}>Click Me!</p>
      </div>
    </Modal>
  );
};
