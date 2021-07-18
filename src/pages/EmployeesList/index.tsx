import { useCallback, useRef } from "react";
import Button from "../../components/Button";
import EmployeesModal, { ModalHandles } from "../../components/EmployeesModal";
import EmployeesModalContent from "../../components/EmployeesModalContent";
import {
  Container,
  EmployeesButton,
  EmployeesButtonContainer,
  EmployeesContent,
  EmployeesTitle,
} from "./styles";

export const EmployeesList = () => {
  const modalRef = useRef<ModalHandles>(null);

  const openModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  const closeModal = useCallback(() => {
    modalRef.current?.closeModal();
  }, []);

  return (
    <Container>
      <EmployeesTitle>Employees List</EmployeesTitle>

      <EmployeesButtonContainer>
        <EmployeesButton type="button" onClick={openModal}>
          Add Employee
        </EmployeesButton>
      </EmployeesButtonContainer>

      <EmployeesContent>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01321547</td>
              <td>Douglas</td>
              <td>douglas@gmail.com</td>
              <td>
                <Button color=" #32CD32">Update</Button>
                <Button color="red">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>01321547</td>
              <td>Douglas</td>
              <td>douglas@gmail.com</td>
              <td>
                <Button color=" #32CD32">Update</Button>
                <Button color="red">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>01321547</td>
              <td>Douglas</td>
              <td>douglas@gmail.com</td>
              <td>
                <Button color=" #32CD32">Update</Button>
                <Button color="red">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>01321547</td>
              <td>Douglas</td>
              <td>douglas@gmail.com</td>
              <td>
                <Button color=" #32CD32">Update</Button>
                <Button color="red">Delete</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </EmployeesContent>

      <EmployeesModal ref={modalRef}>
        <EmployeesModalContent closeModal={closeModal} />
      </EmployeesModal>
    </Container>
  );
};
