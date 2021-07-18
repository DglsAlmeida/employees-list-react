import { forwardRef, ForwardRefRenderFunction, ReactNode, useCallback, useImperativeHandle, useState } from "react";
import Modal from "react-modal";

export interface ModalHandles {
  openModal: () => void;
  closeModal: () => void;
}

interface ModalCardProps {
  children: ReactNode;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '600px',
    height: '600px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const EmployeesModal: ForwardRefRenderFunction<ModalHandles, ModalCardProps> = ({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [])
  
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal,
    };
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default forwardRef(EmployeesModal);
