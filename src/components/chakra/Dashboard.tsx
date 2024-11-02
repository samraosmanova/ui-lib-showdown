import { HStack, Stack, Text, Card, For } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle } from "../ui/skeleton";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import Users from "./Users";

export default () => {
  return (
    <>
    <Text marginBottom={4}>Skeleton demo</Text>
    <HStack gap="5">
      <SkeletonCircle size="12" />
      <Stack flex="1">
        <Skeleton height="5" />
        <Skeleton height="5" width="80%" />
      </Stack>
    </HStack>
    <Text  marginTop={8}>Card demo</Text>
   
    <Stack gap="4" direction="row" wrap="wrap">
      <For each={["subtle", "outline", "elevated"]}>
        {(variant) => (
          <Card.Root width="320px" variant={variant} key={variant}>
            <Card.Body gap="2">
              <Avatar
                src="https://picsum.photos/200/300"
                name="Nue Camp"
                size="lg"
                shape="rounded"
              />
              <Card.Title mb="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">View</Button>
              <Button>Join</Button>
            </Card.Footer>
          </Card.Root>
        )}
      </For>
    </Stack>
    <Text  marginTop={8}>Table demo</Text>
    <Users />
    </>
  );
};
