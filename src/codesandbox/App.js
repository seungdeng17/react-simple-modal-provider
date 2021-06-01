import { ModalProvider } from "../lib";
import modals from "./Modal";
import Panel from "./Panel";
import "./app.scss";

export default function App() {
  return (
    <ModalProvider value={modals}>
      <Panel />
    </ModalProvider>
  );
}
