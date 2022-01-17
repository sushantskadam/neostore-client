import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Navb.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../config/Myservice";

function Navb({ search, setSearch }) {
  const navigate = useNavigate();
  //   const count = useSelector(state => state.count)
  const count = useSelector((state) => state.count);

  const [login, setLogin] = useState(false);
  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("login")) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    }, 100);
  }, []);
  const logouthandler = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user.email;
    if (JSON.parse(localStorage.getItem("cart"))) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      addCart({ cart, email }).then((res, err) => {
        

        if (res.data.success == true) {
          // alert("Product Added to Cart");
          localStorage.removeItem("login");
          localStorage.removeItem("user");
          localStorage.removeItem("_token");
          localStorage.removeItem("cart");
          navigate("/");
        }
      });
    } else {
      localStorage.removeItem("login");
      localStorage.removeItem("user");
      localStorage.removeItem("_token");
      localStorage.removeItem("cart");

      navigate("/");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark addhovor fontapplynav">
        <div className="container-fluid">
          <a className="navbar-brand font-weight-bold" href="#">
            Neo
            <span style={{ color: "#EA1111", textAlign: "center" }}>STORE</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <a className="nav-link ml-3 mr-3">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </NavLink>{" "}
              </li>
              {!login ? (
                <>
                  <li className="nav-item active">
                    <NavLink
                      to="/login"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <a className="nav-link ml-3 mr-3">
                        Login
                        <span className="sr-only">(current)</span>
                      </a>
                    </NavLink>{" "}
                  </li>
                  <li className="nav-item active">
                    <NavLink
                      to="/signup"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <a className="nav-link ml-3 mr-3">
                        SignUp
                        <span className="sr-only">(current)</span>
                      </a>
                    </NavLink>{" "}
                  </li>
                </>
              ) : (
                <div></div>
              )}
              <li className="nav-item active">
                <NavLink
                  to="/products"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <a className="nav-link ml-3 mr-3">
                    Products
                    <span className="sr-only">(current)</span>
                  </a>
                </NavLink>{" "}
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2 input-field"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              {/* <i className="fa fa-search icon text-danger "></i> */}
              {/* <button
                className="btn btn-outline-danger my-2 my-sm-0"
                type="submit"
              >
                Search
              </button> */}
            </form>
            &nbsp; &nbsp;
            <ul className="navbar-nav">
              {login ? (
                <>
                  {/* <button
                  className="navbar-toggler float-right"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar-list-4"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                > */}
                  {/* <span className="navbar-toggler-icon"></span> */}
                  {/* </button> */}
                  {/* <div className="collapse navbar-collapse" id="navbar-list-4">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a
                          onClick={() => navigate("/forgotpassword")}
                          variant="outline-dark"
                          className="btn shadow-none"
                          href="#"
                        >
                          Forgot Password
                        </a>
                        <a
                          onClick={() => logouthandler()}
                          variant="outline-dark"
                          className="btn shadow-none"
                        >
                          LogOut
                        </a>
                        <a className="dropdown-item" href="#">
                          Log Out
                        </a>
                      </div>
                    </li>
                  </ul>
                </div> */}
                  <li className="nav-item dropdown mr-3 ">
                    <a
                      className="nav-link dropdown-toggle"
                      // href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ color: "white", fontSize: "18px" }}
                    >
                      <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </a>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        onClick={() => navigate("/profile")}
                        variant="outline-dark"
                        className="btn shadow-none w-100 mb-1 border border-danger "
                      >
                        Profile
                      </a>

                      <br />

                      <a
                        onClick={() => logouthandler()}
                        variant="outline-dark"
                        className="btn shadow-none w-100 border border-danger"
                      >
                        LogOut
                      </a>
                    </div>
                  </li>
                </>
              ) : (
                <></>
              )}
              <li className="nav-item active">
                <NavLink
                  to="/cart"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <a className="nav-link">
                    <i className="fa" style={{ fontSize: "20px" }}>
                      &#xf07a;
                    </i>
                    <span className="badge badge-warning" id="lblCartCount">
                      {" "}
                      {count ? count : ""}{" "}
                    </span>{" "}
                    Cart
                    <span className="sr-only">(current)</span>
                  </a>
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navb;
