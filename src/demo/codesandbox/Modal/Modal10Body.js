import { useState, useEffect } from "react";
import "./modal.scss";

const Modal10Body = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      await new Promise((r) => setTimeout(r, 1000));
      const n = Math.floor(Math.random() * 100) + 1;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${n}`
      );
      const json = await res.json();
      setData(json);
    })();
  }, []);

  return (
    <div className="modal-body">
      {data ? (
        <>
          <h1 style={{ fontSize: 20 }}>
            {data.id}: {data.title} 🧐
          </h1>
        </>
      ) : (
        <>
          <div className="modal-skeleton">
            <div className="skeleton-indicator">
              <div className="shadow" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal10Body;
