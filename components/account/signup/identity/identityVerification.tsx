import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import IdentityModal from "./identityModal";

interface IIdentityState {
  identityState: boolean;
  setIdentityState: (value: boolean) => void;
}

export default function IdentityVerification({ identityState, setIdentityState }: IIdentityState) {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button color={identityState ? "success" : "default"} onPress={onOpen}>
        본인인증
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" radius="none" size="xs" hideCloseButton={true}>
        <IdentityModal onClose={onClose} setIdentityState={setIdentityState} />
      </Modal>
    </>
  );
}
