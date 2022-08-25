import { Card, Text } from "@nextui-org/react";

function NextUICard(props) {
  return (
    <Card css={{ mw: "400px" }}>
      <Card.Body>
        <Text className="text-center">{props.children}</Text>
      </Card.Body>
    </Card>
  );
}

export default NextUICard;
