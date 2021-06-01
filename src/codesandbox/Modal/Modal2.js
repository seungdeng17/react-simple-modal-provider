import { useState } from "react";
import Modal, { modalAnimation } from "react-simple-modal-provider";
import "./modal.scss";

export default ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <Modal
      id={"Modal2"}
      consumer={children}
      state={state}
      setState={setState}
      duration={250}
      animation={modalAnimation.scaleUp}
    >
      <div className="modal-body">
        😁
        <button onClick={() => setState(false)}>Close</button>
      </div>
    </Modal>
  );
};
