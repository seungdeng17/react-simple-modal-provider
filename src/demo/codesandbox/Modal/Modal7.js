import { useState } from "react";
import Modal, { modalAnimation, useModal } from "../../../lib";
import "./modal.scss";

export default ({ children }) => {
  const [state, setState] = useState(false);
  const { open: openModal8 } = useModal("Modal8");

  return (
    <Modal
      id={"Modal7"}
      consumer={children}
      state={state}
      setState={setState}
      duration={250}
      animation={modalAnimation.slideDown}
    >
      <div
        style={{ width: "6em", height: "4em", fontSize: "2.5em" }}
        className="modal-body"
        onClick={openModal8}
      >
        🤗
        <p style={{ margin: 10, fontSize: 25 }}>Click Me!</p>
      </div>
    </Modal>
  );
};
