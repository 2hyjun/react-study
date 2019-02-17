import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu: React.FunctionComponent = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Link to='/'>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>{' '}
      </Link>
      <Nav className='mr-auto'>
        <Link to='/' style={{ paddingRight: 20 }}>
          <Navbar.Text>Home</Navbar.Text>
        </Link>
        <Link to='/about' style={{ paddingRight: 20 }}>
          <Navbar.Text>About</Navbar.Text>
        </Link>
        <Link to='/about/developer' style={{ paddingRight: 20 }}>
          <Navbar.Text>About developer</Navbar.Text>
        </Link>
        <Link to='/posts' style={{ paddingRight: 20 }}>
          <Navbar.Text>Post</Navbar.Text>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Menu;
