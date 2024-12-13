import { Container, Flex } from "@chakra-ui/react";

import { Filter, View } from "../../components/ui";

export default {
  title: "Components / Filter",
  decorators: [
    (story: Function) => (
      <Container maxW="container.xl" mt="40px" mx="auto">
        {story()}
      </Container>
    ),
  ],
};

export const Basic = () => {
  return (
    <Flex padding="0px 80px 16px 80px">
      <Filter />
      <View />
    </Flex>
  );
};
