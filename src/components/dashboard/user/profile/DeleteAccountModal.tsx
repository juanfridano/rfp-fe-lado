import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

import DeleteAccountForm from "./DeleteAccountForm";

interface DeletePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function DeletePasswordModal({ isOpen, onClose }: DeletePasswordModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent mt="200px">
        <ModalHeader>Delete account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <DeleteAccountForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default DeletePasswordModal;
