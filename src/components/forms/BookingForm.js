import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useUI } from "../../context/ui.context";
import ReservationCard from "../ReservationCard";

const BookingForm = () => {
  const { closeModal } = useUI();
  return (
    <ReservationCard title="Reservation Form">
      <Form>
        <FormGroup>
          <Label tag="div">
            Name <Input type="text" placeholder="Enter Full Name" />
          </Label>

          <Label tag="div">
            Email
            <Input type="email" placeholder="Enter Email" />
          </Label>

          <Label tag="div">
            Phone
            <Input type="text" placeholder="Enter Phone" />
          </Label>
        </FormGroup>
      </Form>
      <button type="button" onClick={() => closeModal()}>
        Cancel
      </button>
    </ReservationCard>
  );
};

export default BookingForm;
