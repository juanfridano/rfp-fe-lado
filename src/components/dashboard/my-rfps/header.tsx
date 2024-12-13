import { Heading, Flex, Button } from "@chakra-ui/react";

import { TiPlus } from "../../../../public/icons";

export function MyRfpsHeader() {
  return (
    <Flex padding="80px 80px 40px 80px">
      <Heading as="h1" size="sm" fontWeight="600">
        My RFPs
      </Heading>
      <Button ml="auto" variant="link" leftIcon={<TiPlus />}>
        Create New RFP
      </Button>
    </Flex>
  );
}
