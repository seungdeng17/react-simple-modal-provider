import { useState } from "react";
import Modal, { modalAnimation } from "react-simple-modal-provider";
import Modal10Body from "./Modal10Body";

export default ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <Modal
      id={"Modal10"}
      consumer={children}
      state={state}
      setState={setState}
      duration={250}
      animation={modalAnimation.scaleUp}
    >
      <Modal10Body />
    </Modal>
  );
};
