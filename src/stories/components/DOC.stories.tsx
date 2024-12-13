import { Container, Stack } from "@chakra-ui/react";

import { DOC } from "../../components/ui";

export default {
  title: "Components / DOC",
  decorators: [
    (story: Function) => (
      <Container maxW="500px" mt="40px" mx="auto">
        {story()}
      </Container>
    ),
  ],
};

export const Basic = () => {
  return (
    <Stack gap="4">
      <DOC fileExtension="doc" />
      <DOC fileExtension="pdf" />
      <DOC fileExtension="xls" />
    </Stack>
  );
};
