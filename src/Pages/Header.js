import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import './Header.css'
import Logo from '../Components/imgs/svgviewer-png-output (2).png'
function Header() {
  return (
    <>
    <Navbar  expand="lg">
      <Container >
        <Navbar.Brand href="#" className='me-5'><img src={Logo} style={{ width: '100px' }} alt='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link> <Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link> <Link to="/About">About</Link></Nav.Link>
          </Nav>
            <Button variant="outline-success" className='ms-4 py-2 Sign-in bg-dark border  text-white '>Start for free</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
}

export default Header;

