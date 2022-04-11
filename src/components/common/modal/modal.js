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
import { fadeInOut } from "../../../utils/motion/use-fade-in-out";

const Modal = ({ children, open, onClose }) => {
  const { closeModal } = useUI();
  const modalRootRef = React.useRef();
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
      <AnimatePresence>
        {open && (
          <motion.div
            ref={modalRootRef}
            key="modal"
            initial="from"
            animate="to"
            exit="from"
            variants={fadeInOut(0.25)}
          >
            <div className="modal-base">
              <Row className="h-100">
                <Col className="d-flex justify-content-center align-items-center">
                  <div ref={modalInnerRef}>{children}</div>
                </Col>
              </Row>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Modal;
