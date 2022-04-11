import React from "react";
import { useUI } from "../../context/ui.context";
import Card from "../common/card";

const BookingForm = () => {
  const { closeModal } = useUI();
  return (
    <Card>
      <form>
        <div>
          <input type="text" name="fullName" placeholder="Enter Full Name" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Enter Email" />
        </div>
        <div>
          <input type="text" name="phone" placeholder="Enter Phone Number" />
        </div>
      </form>
      <button type="button" onClick={() => closeModal()}>
        Cancel
      </button>
    </Card>
  );
};

export default BookingForm;
