import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";

import AddMemberModal from "./add-member-modal";
import MembersList from "./members-list";

import { UserPlus } from "../../../../../../public/icons";

function Members() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex ml="auto" alignSelf="flex-end" alignItems="center" gap="4">
      <MembersList onOpen={onOpen} />
      <IconButton
        data-group
        aria-label="Add new member"
        bg="gray.neutral.200"
        minW="auto"
        w="32px"
        h="32px"
        borderRadius="full"
        icon={
          <UserPlus
            color="#626262"
            w="16px"
            h="16px"
            _groupHover={{ color: "white" }}
          />
        }
        onClick={onOpen}
      />
      <AddMemberModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default Members;
