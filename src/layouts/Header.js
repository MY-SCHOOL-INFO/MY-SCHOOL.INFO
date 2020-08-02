import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { isMobile } from "react-device-detect";
import "../css/Header.css";

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return isMobile ? (
    <header>
      <Navbar expand="md" color="faded" dark>
        <NavbarBrand id="header__title" href="/">
          <img alt="홈페이지" src="./logo512.png"></img> MY-SCHOOL.INFO
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="navbar-right" href="/">
                시간표 확인하기
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-right" href="/about">
                개발자
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  ) : (
    <header>
      <Navbar expand="md" variant="light">
        <NavbarBrand id="header__title" href="/">
          <img alt="홈페이지" src="./logo512.png"></img> MY-SCHOOL.INFO
        </NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink className="navbar-right" href="/">
              시간표 확인하기
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar-right" href="/about">
              개발자
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
