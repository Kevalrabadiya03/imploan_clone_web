import React from 'react'
import logo from "../image/logo.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <div classNameName="header">
        <div
          classNameName="header-text text"
          style={{
            fontSize: "0.5em",
            backgroundColor: "#243768",
            color: "white",
            textAlign: "center",
            position: "fixed",
            width: "100%",
            zIndex: "500",
            margin:"auto"
          }}
        >
          <b>Consumer Advisory:</b>
          APR Rates Range From 5.99% to 35.99% Maximum APR for qualified
          consumers
        </div>
        <nav
          className="navbar navbar-expand-lg bg-body-"
          style={{ position: "fixed", width: "100%", backgroundColor: "#fff " }}
        >
          <div className="container-fluid">
            <a className="navbar-brand mr-3" href="#">
              <img src={logo} width="auto" height="50px" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul
                className="navbar-nav ms-auto mb-2 mb-lg-0"
                style={{ marginRight: "40px" }}
              >
                <li className="nav-item">
                  <Link to={'/'}
                    className="nav-link "
                    style={{ color: "#262626" }}
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/terms"} className="nav-link" href="#" style={{ color: "#262626" }}>
                    Terms & Condition
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/privacypolicy"} className="nav-link" href="#" style={{ color: "#262626" }}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header