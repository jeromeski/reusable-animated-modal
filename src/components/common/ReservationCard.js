import { Card, CardBody, CardTitle } from "reactstrap";

const ReservationCard = ({ children }) => {
  return (
    <Card className="m-5">
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default ReservationCard;
