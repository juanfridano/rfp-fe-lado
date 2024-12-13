import { Flex, Box, Text, Menu, MenuButton } from "@chakra-ui/react";

import { Check, VerticalDots } from "../../../../public/icons";
import { ProjectEditActions } from "../project-edit-actions";

export function Project() {
  return (
    <Flex
      p="24px 20px"
      borderRadius="base"
      border="2px solid"
      borderColor="#F0F0F0"
      gap="3"
      flexDir="column"
      w="276.5px"
      h="184px"
      flexShrink="0"
      _hover={{
        border: "2px solid",
        borderColor: "brand.600",
      }}
    >
      <Flex gap="7px" alignItems="center">
        <Text size="xs" color="gray.neutral.500">
          12 Dec 2023
        </Text>
        <Check ml="auto" w="24px" h="24px" />
        <Menu>
          <MenuButton>
            <VerticalDots ml="auto" w="24px" h="24px" />
          </MenuButton>
          <ProjectEditActions />
        </Menu>
      </Flex>
      <Box mt="auto">
        <Text size="md" color="gray.neutral.800" fontWeight="500" mb="4px">
          University of Toronto&rsquo;s LSM
        </Text>
        <Flex alignItems="center" gap="8px">
          <Text size="xs" color="gray.neutral.500">
            SSP
          </Text>
          <Box w="5px" h="5px" borderRadius="100%" bg="gray.neutral.500"></Box>
          <Text size="xs" color="gray.neutral.500">
            Academic Tutoring
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
