import { Card, Text, Row, Button } from "@nextui-org/react";

function NextCard({ title, children, options, onClickLeft, onClickRight }) {
  return (
    <Card css={{ mw: "400px" }}>
      {title && (
        <>
          <Card.Header>
            <Text className="text-center">{title}</Text>
          </Card.Header>
          <Card.Divider />
        </>
      )}
      <Card.Body>
        <Text>{children}</Text>
      </Card.Body>
      {options && (
        <>
          <Card.Divider />
          <Card.Footer>
            <Row justify="center" className="text-center">
              <Button size="sm" light onClick={onClickLeft}>
                {options.left}
              </Button>
              <Button size="sm" color="secondary" onClick={onClickRight}>
                {options.right}
              </Button>
            </Row>
          </Card.Footer>
        </>
      )}
    </Card>
  );
}

export default NextCard;
