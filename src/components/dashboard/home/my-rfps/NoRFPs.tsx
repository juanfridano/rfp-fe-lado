import { Flex, Text, IconButton } from "@chakra-ui/react";

import { PlusSign } from "../../../../../public/icons";

function NoRFPs() {
  return (
    <Flex
      h="200px"
      p="24px 20px"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="20px"
      borderRadius="base"
      border="2px solid"
      borderColor="#F0F0F0"
    >
      <IconButton
        p="7.32px"
        aria-label="Create RFP"
        icon={<PlusSign w="20.487px" h="20.487px" />}
      />
      <Text size="sm" color="brand.700" fontWeight="600">
        Create your first RFP
      </Text>
    </Flex>
  );
}

export default NoRFPs;
