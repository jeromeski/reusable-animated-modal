import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const ReservationCard = ({ title, children }) => {
  return (
    <Card>
      <CardHeader tag="h6">{title}</CardHeader>
      <CardBody className="p-4">{children}</CardBody>
    </Card>
  );
};

export default ReservationCard;
