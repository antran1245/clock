import { Container, Row } from 'react-bootstrap';
import './App.css';
import Time from './components/Clock/Time';

function App() {
  const backgroundStyle = {
    background: "rgb(2,0,36)",
    background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(138,152,1,0.50) 0%, rgba(0,254,255,0.25) 0%)" 
  }
  return (
    <Container fluid className='App' style={backgroundStyle}>
      <Row>hi</Row>
      <Time/>
    </Container>
  );
}


export default App;
