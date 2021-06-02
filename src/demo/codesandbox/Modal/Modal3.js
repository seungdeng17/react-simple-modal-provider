import { useState } from "react";
import Modal, { modalAnimation } from "../../../lib";
import "./modal.scss";

export default ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <Modal
      id={"Modal3"}
      consumer={children}
      state={state}
      setState={setState}
      duration={250}
      animation={modalAnimation.slideDown}
      draggable={true}
    >
      <div className="modal-body">
        😍
        <button onClick={() => setState(false)}>Close</button>
      </div>
    </Modal>
  );
};
