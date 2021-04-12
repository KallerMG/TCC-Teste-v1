import { Navbar, Nav } from "react-bootstrap";

import logo from "../image/logoi2.png";

const NavebarCreate = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="http://localhost:3000/dashboard">
        <img
          alt=""
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{" "}
        Dashboard
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="http://localhost:3000/pascients">Pacients</Nav.Link>
        <Nav.Link href="#features">Status</Nav.Link>
        <Nav.Link href="#pricing">Alert</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavebarCreate;
