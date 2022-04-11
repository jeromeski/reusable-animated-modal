import { Card, CardBody, CardTitle } from "reactstrap";

const ReservationCard = ({ children }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>Reservation Form</CardTitle>
        {children}
      </CardBody>
    </Card>
  );
};

export default ReservationCard;
