import React from "react";
import { Form, FormGroup } from "reactstrap";
import { useUI } from "../../context/ui.context";
import ReservationCard from "../ReservationCard";

const BookingForm = () => {
  const { closeModal } = useUI();
  return (
    <ReservationCard title="Reservation Form">
      <Form>
        <FormGroup>
          <input type="text" name="fullName" placeholder="Enter Full Name" />
        </FormGroup>
        <FormGroup>
          <input type="email" name="email" placeholder="Enter Email" />
        </FormGroup>
        <FormGroup>
          <input type="text" name="phone" placeholder="Enter Phone Number" />
        </FormGroup>
      </Form>
      <button type="button" onClick={() => closeModal()}>
        Cancel
      </button>
    </ReservationCard>
  );
};

export default BookingForm;
