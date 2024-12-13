import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Avatar,
} from "@chakra-ui/react";

import { ChevronDown } from "../../../../public/icons";

interface FilterPillWithMultiSelectProps {
  title: string;
}

export function FilterPillItemCheckbox({
  title,
}: FilterPillWithMultiSelectProps) {
  return (
    <Menu closeOnSelect={false}>
      <Flex
        alignItems="center"
        _hover={{
          borderRadius: "2px",
          bg: "brand.25",
        }}
      >
        <MenuButton padding="6px 4px 6px 8px">
          <Flex gap="2" alignItems="center">
            <Text fontSize="sm" color="gray.neutral.500">
              {title}
            </Text>
            <ChevronDown w="20px" h="20px" color="gray.neutral.400" />
          </Flex>
        </MenuButton>
      </Flex>
      <MenuList
        borderRadius="12px"
        boxShadow="0px 4px 8px 0px rgba(167, 167, 167, 0.25)"
        border="1px solid"
        borderColor="#EDEDED"
        w="333px"
        p="6"
      >
        <Flex alignItems="center" mb="6">
          <Text fontWeight="bold"> {title}</Text>
        </Flex>
        <Flex
          className="member-list-scroll"
          gap="5"
          maxH="351px"
          overflowY="scroll"
          flexDir="column"
        >
          <MenuOptionGroup type="checkbox">
            <MenuItemOption value="email">
              <Flex gap="10px" alignItems="center">
                <Avatar
                  name="L D"
                  fontSize="17.228px"
                  fontWeight="600"
                  w="36px"
                  h="36px"
                />
                <Box>
                  <Text lineHeight="normal">Leonardo Decapti</Text>
                  <Text
                    fontSize="12px"
                    lineHeight="normal"
                    color="gray.neutral.500"
                  >
                    Leonardo@gmail.com
                  </Text>
                </Box>
              </Flex>
            </MenuItemOption>
            <MenuItemOption value="phone">
              <Flex gap="10px" alignItems="center">
                <Avatar
                  name="L D"
                  fontSize="17.228px"
                  fontWeight="600"
                  w="36px"
                  h="36px"
                />
                <Box>
                  <Text lineHeight="normal">Leonardo Decapti</Text>
                  <Text
                    fontSize="12px"
                    lineHeight="normal"
                    color="gray.neutral.500"
                  >
                    Leonardo@gmail.com
                  </Text>
                </Box>
              </Flex>
            </MenuItemOption>
          </MenuOptionGroup>
        </Flex>
      </MenuList>
    </Menu>
  );
}
