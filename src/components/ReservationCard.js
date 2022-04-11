import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const ReservationCard = ({ title, children }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default ReservationCard;
