import {
  Stack,
  Title,
  Text,
  Container,
  Center,
  Grid,
  Card,
} from "@mantine/core";
import { IconMail } from "@tabler/icons-react";

export default function ContactUs() {
  return (
    <Container
      size="md"
      py="xl"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Center w="100%" pb={240}>
        <Stack align="center">
          <Title order={1} size="3rem">
            Contact us
          </Title>
          <Grid>
            <Grid.Col>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Stack justify={"center"} align={"center"} p={24}>
                    <IconMail size={64} />
                    <Text fw={500}>Email</Text>
                  </Stack>
                </Card.Section>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Center>
    </Container>
  );
}
