import React from "react";
import Portal from "@reach/portal";
import { motion, AnimatePresence } from "framer-motion";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import { useUI } from "../../../context/ui.context";

const Modal = ({ children, open, onClose }) => {
  const { closeModal } = useUI();
  const modalRootRef = React.useRef();
  const modalInnerRef = React.useRef();
  return (
    <Portal>
      {open && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            padding: 20,
            background: "rgba(0,0,0, .50)"
          }}
        >
          {children}
        </div>
      )}
    </Portal>
  );
};

export default Modal;
