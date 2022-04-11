import { useUI } from "../../../context/ui.context";
import BookingForm from "../../forms/BookingForm";
import Modal from "./modal";

const ManagedModal = () => {
  const { displayModal, closeModal, modalView } = useUI();
  return (
    <Modal open={displayModal} onClose={closeModal}>
      {modalView === "RESERVATION_VIEW" && <BookingForm />}
    </Modal>
  );
};

export default ManagedModal;
