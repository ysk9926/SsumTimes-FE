"use client";

import { Modal, useDisclosure } from "@nextui-org/react";
import PrivacyPolicyModal from "../modal/privacyPolicyModal";

export default function PrivacyPolicyBtn() {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <span onClick={onOpen}>개인정보처리방침</span>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        radius="none"
        size="full"
        className=" max-w-[460px]"
        hideCloseButton={true}
      >
        <PrivacyPolicyModal onClose={onClose} />
      </Modal>
    </div>
  );
}
