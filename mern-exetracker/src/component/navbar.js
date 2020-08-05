import React from "react";

//Bootstarp
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navi = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Exepapp</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Exercises</Nav.Link>
          <Nav.Link href="/create">Create Exercise Log</Nav.Link>
          <Nav.Link href="/user">Create User</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navi;
