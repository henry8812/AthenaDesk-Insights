/*!

=========================================================
* Athena Desk Insights
=========================================================

* Product Page: https://github.com/henry8812/AthenaDesk-Insights
* Copyright 2023 henry8812 (https://github.com/henry8812)
* Licensed under MIT (https://github.com/henry8812/AthenaDesk-Insights/blob/main/LICENSE.md)

* Coded by henry8812

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://github.com/henry8812">
              henry8812
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/henry8812">
              About Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/henry8812">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://github.com/henry8812"
            target="_blank"
          >
            henry8812
          </a>{" "}
          for better projects.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
