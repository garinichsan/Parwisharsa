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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,Button } from "reactstrap";

import bgimg from "assets/img/antoine-barres.jpg";
import foglow from "assets/img/fog-low.png";
import clouds from "assets/img/clouds.png";

// core components
function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + bgimg + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Parwisharsa</h1>
              <div className="fog-low">
                <img alt="..." src={foglow} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={foglow} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Komunitas pariwisata dari kita, untuk kita!
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + clouds + ")",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
