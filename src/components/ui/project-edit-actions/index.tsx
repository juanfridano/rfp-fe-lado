import { MenuList, MenuItem, Text, useDisclosure } from "@chakra-ui/react";

import { TiPencil, TiTrash } from "../../../../public/icons";
import { DeleteConfirmationModal, RenameModal } from "../";

export function ProjectEditActions() {
  const {
    isOpen: isDeleteModalOpen,
    onOpen: onOpenDeleteModal,
    onClose: onCloseDeleteModal,
  } = useDisclosure();
  const {
    isOpen: isRenameModalOpen,
    onOpen: onOpenRenameModal,
    onClose: onCloseRenameModal,
  } = useDisclosure();

  return (
    <>
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
        <MenuItem gap="2" p="2" onClick={onOpenRenameModal}>
          <TiPencil color="#1A3443" w="20px" h="20px" />
          <Text color="gray.neutral.800">Rename</Text>
        </MenuItem>
        <MenuItem gap="2" p="2" onClick={onOpenDeleteModal}>
          <TiTrash color="error.700" w="20px" h="20px" />
          <Text color="error.700">Delete</Text>
        </MenuItem>
      </MenuList>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={onCloseDeleteModal}
      />
      <RenameModal isOpen={isRenameModalOpen} onClose={onCloseRenameModal} />
    </>
  );
}
