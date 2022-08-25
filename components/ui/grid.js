import { Grid } from "@nextui-org/react";

function NextUIGrid(props) {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid>{props.children}</Grid>
    </Grid.Container>
  );
}

export default NextUIGrid;
