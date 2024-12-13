import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

interface RenameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import { RenameDocument } from "../";

export function RenameModal({ isOpen, onClose }: RenameModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent mt="118px">
        <ModalHeader>Rename</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">
          <RenameDocument />
        </ModalBody>
        <ModalFooter gap="3">
          <Button variant="secondary" flex="1" onClick={onClose}>
            Cancel
          </Button>
          <Button flex="1">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
