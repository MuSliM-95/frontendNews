import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Headers from "../header/Headers";
import { Container } from "react-bootstrap";
import styles from "./layout.module.css"


const Layout = () => {
  return (
    <>
      <Headers />
      <Container fluid className={styles.outlet}>
        <Outlet/>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
