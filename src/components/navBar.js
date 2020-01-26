import React from "react"
import logo from "../images/ATW_Logo.svg"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="170"
            height="75"
            className="d-inline-block mr-3"
          />
          <h1 className="d-inline-block">Volunteer Portal</h1>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="check-in-out">Check In/Out</Nav.Link>
            <Nav.Link href="#">See Logged Hours</Nav.Link>
            <Nav.Link href="#">Add Volunteer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
