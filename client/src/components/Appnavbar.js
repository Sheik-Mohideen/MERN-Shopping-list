import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarText
} from 'reactstrap';


class Appnavbars extends Component
{
 constructor(props)
 {
     super();
     this.state={
         isOpen:false
     }
 }
 
//Instead of binding in react use following syntax
toggle = () =>
{
 this.setState({
    isOpen:!this.state.isOpen
})
}

render()
{
    return(
        <div>
      <Navbar color="dark" dark expand="sm">
          <Container>
          <NavbarBrand  href="/">Shopping List</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/Sheik-Mohideen/MERN-Shopping-list.git">GitHub</NavLink>
            </NavItem>
          
            </Nav>
          <NavbarText>Happy Shopping</NavbarText>
        </Collapse>   
          </Container>
        
      </Navbar>
    </div>
    );
}
}
export default Appnavbars;