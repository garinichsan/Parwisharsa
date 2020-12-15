/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, } from "react";


// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

const IndexNavbar = ({user,auth,handleSignIn,handleSignOut}) => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            target="_blank"
            title="Komunitas Pariwisata Milik Kita"
          >
            Parwisharsa
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/in.garin/"
                target="_blank"
                title="Follow me on Instagram"
              >
                <i className="fa fa-instagram mt-1" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/garinichsan"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github mt-1" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/garinichsan/"
                target="_blank"
                title="Connect with my LinkedIn"
              >
                <i className="fa fa-linkedin mt-1" />
                <p className="d-lg-none">LinkedIn</p>
              </NavLink>
            </NavItem>
            {auth ? (
            
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  onClick={handleSignOut}
                  target="_blank"
                  title="Sign Out"
                  style={{cursor: 'pointer'}}
                >
                  <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={user.picture}
                      style={{width:"30px", padding: "0", margin:"0"}}
                    />
                  <p className="d-lg pl-1">Sign Out</p>
                </NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  onClick={handleSignIn}
                  target="_blank"
                  title="Sign In to Google"
                  style={{cursor: 'pointer'}}
                >
                  <i className="fa fa-google mt-1" />
                  <p className="d-lg">Sign In</p>
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
