import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainPage.css";
import icon1 from "./cart.png";
import icon2 from "./acc.png";
import img1 from "./pc.png";
import img2 from "./fp.jpg";

function MainPage() {
  return (
    <div>
      <Navbar
        className="color-nav"
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand className="logo">Logo</Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className="collapse">
          <Nav>
            <NavDropdown className="PC" title="PCs" id="nav-dropdown">
              <NavDropdown.Item className="PCitem1" href="#products/tea">
                item1
              </NavDropdown.Item>
              <NavDropdown.Item className="PCitem1" href="#products/coffee">
                item2
              </NavDropdown.Item>
              <NavDropdown.Item className="PCitem1" href="#products/chocolate">
                item3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="PCitem1" href="#products/promo">
                Promo
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="components" title="Components" id="nav-dropdown">
              <NavDropdown.Item className="Compitem1" href="#products/tea">
                item1
              </NavDropdown.Item>
              <NavDropdown.Item className="Compitem1" href="#products/coffee">
                item2
              </NavDropdown.Item>
              <NavDropdown.Item
                className="Compitem1"
                href="#products/chocolate"
              >
                item3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="Compitem1" href="#products/promo">
                Promo
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="peripherals" title="Peripherals" id="nav-dropdown">
              <NavDropdown.Item className="Pitem1" href="#products/tea">
                item1
              </NavDropdown.Item>
              <NavDropdown.Item className="Pitem1" href="#products/coffee">
                item2
              </NavDropdown.Item>
              <NavDropdown.Item className="Pitem1" href="#products/chocolate">
                item3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="Pitem1" href="#products/promo">
                Promo
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="aboutus" href="#contact-us" id="nav-dropdown">
              About Us
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">
            <img
              src={icon1}
              width="70"
              height="70"
              className="icon1"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src={icon2}
              width="70"
              height="70"
              className="icon2"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">
        <Container>
          <Row>
            <Col className="col1" sm={10}>
              <span className="textAbove">
                Personal
                <br /> Computers
                <br /> Made Easy
              </span>
              <br />
              <Col className="textBelow">
                We Build Custom PCs
                <br />
                around your Budget
              </Col>
              <Button className="btn" variant="outline-secondary" size="lg">
                Start Your Build!
              </Button>
            </Col>
            <Col className="col2" sm={4}>
              <img src={img2} className="img2" alt="React Bootstrap logo" />
            </Col>
          </Row>
        </Container>
      </div>
      <div></div>
    </div>
  );
}
export default MainPage;
