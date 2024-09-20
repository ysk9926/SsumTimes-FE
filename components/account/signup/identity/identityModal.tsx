import { Button, ModalContent } from "@nextui-org/react";

interface IIdentityModal {
  onClose: () => void;
  setIdentityState: (value: boolean) => void;
}

export default function IdentityModal({ onClose, setIdentityState }: IIdentityModal) {
  const handleIdentityState = () => {
    setIdentityState(true);
    onClose();
  };
  return (
    <ModalContent>
      {(onClose) => (
        <div className=" h-[600px]">
          <Button onPress={handleIdentityState}>상태 변경</Button>
        </div>
      )}
    </ModalContent>
  );
}
