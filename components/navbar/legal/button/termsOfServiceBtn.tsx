"use client";

import { Modal, useDisclosure } from "@nextui-org/react";
import PrivacyPolicyModal from "../modal/privacyPolicyModal";
import TermsOfServiceModal from "../modal/termsOfServiceModal";

export default function TermsOfServiceBtn() {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <span onClick={onOpen}>이용약관</span>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        radius="none"
        size="full"
        className=" max-w-[460px]"
        hideCloseButton={true}
      >
        <TermsOfServiceModal onClose={onClose} />
      </Modal>
    </div>
  );
}
