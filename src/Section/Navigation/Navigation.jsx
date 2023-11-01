import React from 'react'
import { Nav } from 'rsuite';


const Navbar = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 50 }}>
        <Nav.Item eventKey="home" href="/">Home</Nav.Item>
        <Nav.Item eventKey="casestudy" href='/casestudy'>Case Study</Nav.Item>
        <Nav.Item eventKey="approach" href='process'>Process</Nav.Item>
        <Nav.Item eventKey="products">Contact</Nav.Item>
        <Nav.Item eventKey="about">About</Nav.Item>
      </Nav>
    );
  };
function Navigation() {
    const [active, setActive] = React.useState('home');

  return (
    
    <div>
      <Navbar appearance="subtle" active={active} onSelect={()=>setActive(setActive)} />
    </div>
  )
}

export default Navigation