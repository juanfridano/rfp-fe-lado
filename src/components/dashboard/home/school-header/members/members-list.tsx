import {
  AvatarGroup,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Text,
  IconButton,
  Flex,
  Box,
  Stack,
} from "@chakra-ui/react";

import { ExcessLabel } from "@/components/ui";
import { ChevronDown, PlusSign } from "../../../../../../public/icons/index";

interface MembersListProps {
  onOpen: () => void;
}

function MembersList({ onOpen }: MembersListProps) {
  return (
    <Menu>
      <MenuButton
        background="transparent"
        color="#414141"
        _hover={{ background: "transparent" }}
        py="2"
        px="1"
        as={Button}
        rightIcon={<ChevronDown color="gray.neutral.500" w="24px" h="24px" />}
      >
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
          <ExcessLabel
            fontSize="12px"
            bgColor="gray.neutral.100"
            color="#414141"
            label="50"
          />
        </Stack>
      </MenuButton>
      <MenuList
        borderRadius="12px"
        boxShadow="0px 4px 8px 0px rgba(167, 167, 167, 0.25)"
        border="1px solid"
        borderColor="#EDEDED"
        w="333px"
        p="6"
      >
        <Flex alignItems="center" mb="6">
          <Text fontWeight="bold">Institution members (53)</Text>
          <IconButton
            variant="unstyled"
            aria-label="Add new member"
            icon={<PlusSign color="gray.500" w="13px" h="13px" />}
            ml="auto"
            onClick={onOpen}
          />
        </Flex>
        <Flex
          className="member-list-scroll"
          gap="5"
          maxH="540px"
          overflowY="scroll"
          flexDir="column"
        >
          <Flex gap="10px" alignItems="center">
            <Avatar
              name="L D"
              size="md"
              fontSize="17.228px"
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
          <Flex gap="10px" alignItems="center">
            <Avatar
              name="L D"
              size="md"
              fontSize="17.228px"
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
          <Flex gap="10px" alignItems="center">
            <Avatar
              name="L D"
              size="md"
              fontSize="17.228px"
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
          <Flex gap="10px" alignItems="center">
            <Avatar
              name="L D"
              size="md"
              fontSize="17.228px"
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
          <Flex gap="10px" alignItems="center">
            <Avatar
              name="L D"
              size="md"
              fontSize="17.228px"
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
          <Flex gap="10px" alignItems="center">
            <Avatar
              name="L D"
              size="md"
              fontSize="17.228px"
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
          <Flex gap="10px" alignItems="center">
            <Avatar
              name="L D"
              size="md"
              fontSize="17.228px"
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
          <Flex gap="10px" alignItems="center">
            <Avatar
              name="L D"
              size="md"
              fontSize="17.228px"
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
          <Flex gap="10px" alignItems="center">
            <Avatar
              name="L D"
              size="md"
              fontSize="17.228px"
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
          <Flex gap="10px" alignItems="center">
            <Avatar
              name="L D"
              size="md"
              fontSize="17.228px"
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
          <Flex gap="10px" alignItems="center">
            <Avatar
              name="L D"
              size="md"
              fontSize="17.228px"
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
        </Flex>
      </MenuList>
    </Menu>
  );
}

export default MembersList;
