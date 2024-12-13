import { useDisclosure } from "@chakra-ui/hooks";
import * as React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  chakra,
  PortalManager,
  Button,
} from "@chakra-ui/react";

export default {
  title: "Components / Overlay / Modal",
  decorators: [
    (StoryFn: any) => (
      <PortalManager>
        <StoryFn />
      </PortalManager>
    ),
  ],
};

export function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader fontFamily="Inter">Welcome Home</ModalHeader>
          <ModalBody fontFamily="Inter">
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi.
          </ModalBody>
          <ModalFooter gap="3">
            <Button variant="secondary" flex="1" onClick={onClose}>
              Cancel
            </Button>
            <Button flex="1">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function ReturnFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef<any>();

  return (
    <>
      <chakra.div
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
      >
        Some other content that&apos;ll receive focus on close.
      </chakra.div>

      <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </ModalBody>

          <ModalFooter gap="3">
            <Button variant="secondary" flex="1" onClick={onClose}>
              Cancel
            </Button>
            <Button flex="1">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function WithInitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialFocusRef = React.useRef(null);
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialFocusRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>With just the text it&apos;s awesome</p>
            <input
              defaultValue="But with a focussed input it breaks"
              name="name"
              ref={initialFocusRef}
            />
          </ModalBody>

          <ModalFooter gap="3">
            <Button variant="secondary" flex="1" onClick={onClose}>
              Cancel
            </Button>
            <Button flex="1">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
