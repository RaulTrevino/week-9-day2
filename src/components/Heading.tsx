import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';

export default function Heading(): JSX.Element {
  return (
    <>
      <Navbar sticky='top' data-bs-theme='dark' className='header'>
        <Container>
        <Navbar.Brand href='/'>testing...</Navbar.Brand></Container>
        <Nav.Item>
          <Nav.Link href='/'>it works</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/'>Nice!</Nav.Link>
        </Nav.Item>
      </Navbar>
    </>
  );
}
