import { useState } from "react";
import Modal from "../../../lib";
import "./modal.scss";

export default ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <Modal
      // essential props
      id={"Modal5"}
      consumer={children}
      state={state}
      setState={setState}
      // optional props
      duration={500}
      animation={{
        type: "transform, opacity",
        base: "transform: rotate(0deg) scale(0.3); opacity: 0;",
        before: "transform: rotate(0deg) scale(0.3); opacity: 0;",
        after: "transform: rotate(360deg) scale(1); opacity: 1;"
      }}
      // allowClickOutside={false}
      overlayColor={"rgba(150, 50, 250, 0.3)"}
      vertical={170}
      // horizontal={100}
      width={340}
      height={220}
      radius={20}
      backgroundColor={"rgba(255, 255, 255, 0.9)"}
    >
      <div className="custom-modal-inner">
        😎
        <button onClick={() => setState(false)}>Close</button>
      </div>
    </Modal>
  );
};
