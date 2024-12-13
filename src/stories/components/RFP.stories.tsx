import { Container } from "@chakra-ui/react";

import { RFP } from "../../components/ui/rfp";

export default {
  title: "Components / RFP",
  decorators: [
    (story: Function) => (
      <Container maxW="500px" mt="40px" mx="auto">
        {story()}
      </Container>
    ),
  ],
};

export const Basic = () => {
  return <RFP />;
};
