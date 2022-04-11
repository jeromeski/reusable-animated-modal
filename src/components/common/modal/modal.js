import React from "react";
import Portal from "@reach/portal";
import { motion, AnimatePresence } from "framer-motion";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import { useUI } from "../../../context/ui.context";
import { Col, Row } from "reactstrap";
import useOnClickOutside from "../../../utils/use-click-outside";

const Modal = ({ children, open, onClose }) => {
  const { closeModal } = useUI();
  // const modalRootRef = React.useRef();
  const modalInnerRef = React.useRef();
  useOnClickOutside(modalInnerRef, () => closeModal());

  React.useEffect(() => {
    if (modalInnerRef.current) {
      if (open) {
        disableBodyScroll(modalInnerRef.current);
      } else {
        enableBodyScroll(modalInnerRef.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);
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
          <Row className="h-100">
            <Col className="d-flex justify-content-center align-items-center">
              <div ref={modalInnerRef}>{children}</div>
            </Col>
          </Row>
        </div>
      )}
    </Portal>
  );
};

export default Modal;
