import { Box, Text, Heading, Card } from "@radix-ui/themes";

export default function Dashboard() {
  return (
    <Box>
      <Heading mb="2" size="4">
        Typographic principles
      </Heading>
      <Text>
        The goal of typography is to relate font size, line height, and line
        width in a proportional way that maximizes beauty and makes reading
        easier and more pleasant.
      </Text>

      <Box style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card style={{ flex: "1", padding: "20px" }}>
          <Heading size="3">Total Users</Heading>
          <Text size="6">1,234</Text>
        </Card>
        <Card style={{ flex: "1", padding: "20px" }}>
          <Heading size="3">New Signups</Heading>
          <Text size="6">567</Text>
        </Card>
        <Card style={{ flex: "1", padding: "20px" }}>
          <Heading size="3">Active Sessions</Heading>
          <Text size="6">89</Text>
        </Card>
      </Box>
    </Box>
  );
}
