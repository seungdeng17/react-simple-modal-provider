import { useState } from "react";
import Modal from "react-simple-modal-provider";
import "./modal.scss";

export default ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <Modal id={"Modal1"} consumer={children} state={state} setState={setState}>
      <div className="modal-body">😆</div>
    </Modal>
  );
};
