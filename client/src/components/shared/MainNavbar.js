import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Hackathon } from '../styles/shared';
import { NavigationItems } from '../styles/shared';
import { NavItems } from '../styles/shared';

const MainNavbar = ({ user, handleLogout }) => {
  
  const rightNavItem = () => {
    if (user) {
      // this is links where you see once login in
     

      return (
        <>
        
          <NavigationItems  onClick={() => handleLogout()}>
          <NavItems>Logout</NavItems>
          </NavigationItems>
      
         
        </>
      )
    } else {
      // link show when not logged in
      return (
        <>
          <NavigationItems >
            <Link to='/login'>
            <NavItems>Login</NavItems>
            </Link>
          </NavigationItems >
          <NavigationItems >
            <Link to='/register'>
            <NavItems>Sing Up</NavItems>
            </Link>
          </NavigationItems >
        </>
      )
    }
  }
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link to='/'><Hackathon>Hackathon 2</Hackathon></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              {/* Links that show up regardless of login or not */}
              { rightNavItem() }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
   
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedMainNavbar;