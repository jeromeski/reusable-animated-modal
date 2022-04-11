import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManagedModal from "./components/common/modal/managed-modal";
import { ManagedUIContext } from "./context/ui.context";
import Home from "./pages/Home";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <ManagedUIContext>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <ManagedModal />
      </ManagedUIContext>
    </BrowserRouter>
  );
}
