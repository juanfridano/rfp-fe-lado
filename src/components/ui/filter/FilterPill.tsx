import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  IconButton,
} from "@chakra-ui/react";

import { ChevronDown, TiX } from "../../../../public/icons";

interface FilterPillProps {
  title: string;
  options: string[];
}

export function FilterPill({ title, options }: FilterPillProps) {
  const [selected, setSelected] = useState("");

  return (
    <Menu>
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
            {selected && (
              <Text fontSize="sm" fontWeight="500">
                {selected}
              </Text>
            )}
            {!selected && (
              <ChevronDown w="20px" h="20px" color="gray.neutral.400" />
            )}
          </Flex>
        </MenuButton>
        {selected && (
          <IconButton
            aria-label="Search database"
            icon={<TiX color="#9DA4AE" />}
            variant="iconLink"
            onClick={() => setSelected("")}
            w="20px"
            h="20px"
            fontSize="20px"
            bg="transparent"
          />
        )}
      </Flex>
      <MenuList
        pos="relative"
        zIndex="2"
        p="2"
        border="1px solid"
        borderColor="gray.neutral.200"
        boxShadow="0px 16px 16px 0px rgba(0, 0, 0, 0.09)"
        borderRadius="4px"
        minW="199px"
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            gap="2"
            p="2"
            onClick={() => setSelected(option)}
          >
            <Text color="gray.neutral.800">{option}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
