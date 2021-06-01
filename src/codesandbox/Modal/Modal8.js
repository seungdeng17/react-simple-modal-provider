import { useState } from "react";
import Modal, { modalAnimation } from "../../lib";
import "./modal.scss";

export default ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <Modal
      id={"Modal8"}
      consumer={children}
      state={state}
      setState={setState}
      duration={250}
      animation={modalAnimation.slideUp}
    >
      <div
        style={{ width: "6em", height: "4em", fontSize: "2em" }}
        className="modal-body"
      >
        🥳
      </div>
    </Modal>
  );
};
