import { EmployeesList } from './pages/EmployeesList';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const App = () => {
  return (
    <>
      <GlobalStyle />
      <EmployeesList />
    </>
  )
}

export default App
