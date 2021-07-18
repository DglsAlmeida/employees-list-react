import {
  Container,
  EmployeesButton,
  EmployeesButtonContainer,
  EmployeesContent,
  EmployeesTitle,
} from "./styles";

export const EmployeesList = () => {
  return (
    <Container>
      <EmployeesTitle>Employees List</EmployeesTitle>

      <EmployeesButtonContainer>
          <EmployeesButton>Add Employee</EmployeesButton>
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
                  <button>Update</button>
                  <button>Delete</button>
                  <button>View</button>
              </td>
            </tr>
            <tr>
              <td>01321547</td>
              <td>Douglas</td>
              <td>douglas@gmail.com</td>
              <td>
                  <button>Update</button>
                  <button>Delete</button>
                  <button>View</button>
              </td>
            </tr>
            <tr>
              <td>01321547</td>
              <td>Douglas</td>
              <td>douglas@gmail.com</td>
              <td>
                  <button>Update</button>
                  <button>Delete</button>
                  <button>View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </EmployeesContent>
    </Container>
  );
};
