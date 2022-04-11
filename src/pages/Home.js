import React from "react";
import { useUI } from "../context/ui.context";

const Home = () => {
  const { setModalView, openModal, closeModal } = useUI();

  return (
    <React.Fragment>
      <div>
        <h1>Hello World</h1>
        <button type="button" onClick={openModal}>
          Show Modal
        </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
