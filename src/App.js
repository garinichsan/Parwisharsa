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
import React, { useState, useEffect } from "react";

import axios from 'axios';

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Tambah from "components/Tambah.js";
import List from "components/ListObjek.js";

import {BACKEND} from 'config';


function Index() {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  const backend = BACKEND;
  
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get(
          backend + 'session', { withCredentials: true }
        );
        if(result.data.authenticated){
          setUser(result.data.user);
          console.log(result.data.user);
          setAuth(true);
        }
    };
    fetchData();
  }, [user,auth,backend]);

  const handleSignIn = () => {
    window.open( backend + 'google' ,"_self");
  };

  const handleSignOut = () => {
    setAuth(false);
    window.open( backend + 'logout' ,"_self");
  };

  return (
    <>
      <IndexNavbar user={user} auth={auth} handleSignIn={handleSignIn} handleSignOut={handleSignOut} />
      <IndexHeader />

      <Tambah auth={auth} user={user}/>
      <List user={user} />

      <DemoFooter />
    </>
  );
}

export default Index;
