import {
  Flex,
  Box,
  Text,
  Tag,
  AvatarGroup,
  Avatar,
  MenuButton,
  Menu,
  Stack,
} from "@chakra-ui/react";

import { ExcessLabel } from "../";

import { VerticalDots } from "../../../../public/icons";
import { ProjectEditActions } from "../project-edit-actions";

export function RFP() {
  return (
    <Flex
      p="24px 20px"
      borderRadius="base"
      border="2px solid"
      borderColor="#F0F0F0"
      gap="3"
      flexDir="column"
      w="291px" // This is going to be a prop
      flexShrink="0"
    >
      <Flex>
        <Text size="md" color="gray.neutral.800" fontWeight="500" mr="auto">
          University of Toronto&rsquo;s LSM
        </Text>
        <Menu>
          <MenuButton>
            <VerticalDots ml="auto" w="24px" h="24px" />
          </MenuButton>
          <ProjectEditActions />
        </Menu>
      </Flex>
      <Box>
        <Text size="xs" color="gray.neutral.500">
          Registrar&rsquo;s Office
        </Text>
        <Text size="xs" color="gray.neutral.500">
          Last Updated: 6 Dec 2024
        </Text>
      </Box>
      <Stack direction="row" gap="0">
        <AvatarGroup size="sm" max={4}>
          <Avatar name="Ryan Florence" />
          <Avatar name="Segun Adebayo" />
          <Avatar name="Kent Dodds" />
          <Avatar
            style={{ marginInlineEnd: "-0.75rem" }} // Going to add this automatically to the last element
            name="Prosper Otemuyiwa"
          />
        </AvatarGroup>
        <ExcessLabel fontSize="12px" label="+4" />
      </Stack>
      <Tag
        bg="brand.25"
        color="gray.neutral.800"
        style={{ alignSelf: "baseline" }}
      >
        In progress
      </Tag>
    </Flex>
  );
}
