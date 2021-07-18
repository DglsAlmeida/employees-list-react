import Button from "../Button";
import { Container, ModalContent, ModalContentInputs, Title, ModalContentButtonContainer } from "./styles";

interface EmployeesModalContentProps {
  closeModal: () => void;
}


const EmployeesModalContent = ({ closeModal }: EmployeesModalContentProps) => {
  return (
    <Container>
      <ModalContent>
        <Title>Add new employee</Title>

        <ModalContentInputs>
        <form>
          <label>Name</label>
          <input type="text"/>
          <label>E-mail</label>
          <input type="text"/>
          <label>Occupation</label>
          <input type="text"/>
          <label>Age</label>
          <input type="text"/>
          
          <ModalContentButtonContainer>
            <Button color="red" onClick={closeModal} type="button">Cancel</Button>
            <Button color=" #32CD32" type="submit">Create</Button>
          </ModalContentButtonContainer>
        </form>
        </ModalContentInputs>
      </ModalContent>
    </Container>
  );
};

export default EmployeesModalContent;
