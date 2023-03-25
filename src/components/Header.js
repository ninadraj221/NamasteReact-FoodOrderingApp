import { useState } from "react";
import { Link } from "react-router-dom";

const title = (
  <img
    className="logo"
    src="https://yt3.googleusercontent.com/ytc/AL5GRJWluou2i4IdCvRkeGEZGj2WY2VevwTjpif4LA2f=s900-c-k-c0x00ffffff-no-rj"
  ></img>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header container">
      {title}

      <ul className="nav-list">
        <li className="list-item">
          <Link to="/" tabIndex={-1}>
            Home
          </Link>
        </li>
        <li className="list-item">
          <Link to="/about-us" tabIndex={-1}>
            About Us
          </Link>
        </li>
        <li className="list-item">
          <Link to="/contact-us" tabIndex={-1}>
            Contact Us
          </Link>
        </li>
        <li className="list-item">
          <Link to="/" tabIndex={-1}>
            Cart
          </Link>
        </li>
        <li className="list-item">
          {isLoggedIn ? (
            <button
              className="login-button"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className="login-button"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          )}

          {/* <button
            className="login-button"
            onClick={() => {
              if (loginButton === "Login") {
                setloginButton("Logout");
              } else {
                setloginButton("Login");
              }
            }}
          >
            {loginButton}
          </button> */}
        </li>
      </ul>
    </div>
  );
};

export default Header;
