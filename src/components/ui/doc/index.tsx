import { Flex, Box, Text, Avatar, MenuButton, Menu } from "@chakra-ui/react";

import { VerticalDots } from "../../../../public/icons";
import { ProjectEditActions } from "../project-edit-actions";

interface DOCProps {
  fileExtension: "doc" | "pdf" | "xls";
}

const fileExtensionColors = {
  doc: "brand.500",
  pdf: "error.700",
  xls: "success.700",
};

export function DOC({ fileExtension = "doc" }: DOCProps) {
  return (
    <Flex
      p="6"
      borderRadius="base"
      border="2px solid"
      borderColor="gray.neutral.200"
      gap="3"
      flexDir="column"
      w="291px" // This is going to be a prop
      minH="233px"
      flexShrink="0"
    >
      <Flex wrap="wrap" gap="4">
        <Flex w="100%">
          <Box
            display="flex"
            bg={fileExtensionColors[fileExtension]}
            p="8.5px 5.5px 8.5px 6.5px"
            mr="auto"
            borderRadius="2px"
          >
            <Text color="white" fontWeight="bold" textTransform="uppercase">
              {fileExtension}
            </Text>
          </Box>
          <Menu>
            <MenuButton>
              <VerticalDots ml="auto" w="24px" h="24px" />
            </MenuButton>
            <ProjectEditActions />
          </Menu>
        </Flex>
        <Text
          size="md"
          color="rgba(3, 10, 35, 0.80)"
          fontWeight="600"
          mr="auto"
        >
          Institutional Demographics
        </Text>
      </Flex>
      <Box mt="auto">
        <Flex alignItems="center" gap="2" mb="2">
          <Avatar name="Ryan Florence" w="24px" h="24px" fontSize="10px" />
          <Text size="sm" color="gray.neutral.800">
            Jess Karma
          </Text>
        </Flex>
        <Text size="xs" fontSize="13px" color="gray.neutral.500">
          12 Jan 2024
        </Text>
      </Box>
    </Flex>
  );
}
