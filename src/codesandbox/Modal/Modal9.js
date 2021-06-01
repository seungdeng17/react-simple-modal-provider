import { useState } from "react";
import Modal, { modalAnimation } from "react-simple-modal-provider";
import Modal9Body from "./Modal9Body";
import "./modal.scss";

export default ({ children }) => {
  const [state, setState] = useState(false);
  const [data, setData] = useState(null);

  const asyncOpen = async () => {
    await new Promise((r) => setTimeout(r, 700));
    const n = Math.floor(Math.random() * 100) + 1;
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${n}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <Modal
      id={"Modal9"}
      consumer={children}
      state={state}
      setState={setState}
      duration={250}
      animation={modalAnimation.slideDown}
      asyncOpen={asyncOpen}
      // spinner={<span className="custom-spinner">🤪</span>}
      // spinnerColor={"#ffdd59"}
      // spinner={false}
    >
      <div className="modal-body">
        <Modal9Body data={data} />
        🤓
      </div>
    </Modal>
  );
};
