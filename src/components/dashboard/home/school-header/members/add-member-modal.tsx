import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

import AddMemberForm from "./add-member-form";

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddMemberModal({ isOpen, onClose }: AddMemberModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent mt="200px">
        <ModalHeader>Add a worker</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AddMemberForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddMemberModal;
