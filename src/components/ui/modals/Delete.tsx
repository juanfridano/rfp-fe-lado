import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

import { TiTrash } from "../../../../public/icons";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeleteConfirmationModal({
  isOpen,
  onClose,
}: DeleteConfirmationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent mt="118px">
        <ModalHeader>Delete</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">
          <Box
            bg="error.25"
            p="4"
            borderRadius="2px"
            display="inline-block"
            mb="20px"
          >
            <TiTrash color="error.700" w="24px" h="24px" />
          </Box>
          <Text color="gray.neutral.800">
            Are you sure you want to delete X?
          </Text>
        </ModalBody>
        <ModalFooter gap="3">
          <Button variant="destruction" flex="1">
            Delete
          </Button>
          <Button variant="secondary" flex="1" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
