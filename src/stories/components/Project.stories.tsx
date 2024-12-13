import { Container } from "@chakra-ui/react";

import { Project } from "../../components/ui";

export default {
  title: "Components / Project",
  decorators: [
    (story: Function) => (
      <Container maxW="500px" mt="40px" mx="auto">
        {story()}
      </Container>
    ),
  ],
};

export const Basic = () => {
  return <Project />;
};
