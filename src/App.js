import { Container, Row } from 'react-bootstrap';
import './App.css';
import Time from './components/Clock/Time';

function App() {
  return (
    <Container fluid className='App'>
      <Row>hi</Row>
      <Time/>
    </Container>
  );
}

export default App;
