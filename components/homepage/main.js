import { Grid } from "@nextui-org/react";
import NextCard from "../ui/card";

function Main() {
  return (
    <Grid.Container gap={2} justify="center" alignItems="center">
      <Grid xs={6}>
        <NextCard title={"About"}>Card 1</NextCard>
      </Grid>
    </Grid.Container>
  );
}

export default Main;
