import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <Navbar expand="lg" className={styles.container}>
      <Container>
        <Navbar.Brand >
            <img src={logo} alt='logo' className={styles.logoImg}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className={`${styles.navLinks} ms-auto` }>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#home">Explore Foods</Nav.Link>
            <Nav.Link href="#home">FAQ</Nav.Link>
          </Nav>
                    <Nav className={styles.tel}>
            <Nav.Link >+201066666888</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;