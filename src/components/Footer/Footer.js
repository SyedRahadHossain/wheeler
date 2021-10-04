import React from "react";
import { NavLink } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="bg-dark p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex justify-content-center align-content-center">
                <h3 className="text-white text-start">
                  Wheeler
                  <br />
                  <span className="fs-6">
                    Best driving school in town! <br />
                    Snatch the enroll offer and <br />
                    join with the Wheeler family.
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-md-2">
              <div className="d-flex flex-column align-items-end">
                <div className="">
                  <h3 className="text-white me-2">
                    <i className="fab fa-twitter-square"></i>
                  </h3>
                  <h3 className="text-white me-2">
                    <i className="fab fa-facebook-square"></i>
                  </h3>
                  <h3 className="text-white me-2">
                    <i className="fab fa-youtube-square"></i>
                  </h3>
                  <h3 className="text-white me-2">
                    <i className="fab fa-instagram-square"></i>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="d-flex flex-column align-items-start">
                <NavLink className="fs-6 text-white" to="/home">
                  Home
                </NavLink>
                <NavLink className="fs-6 text-white" to="/allServices">
                  Services
                </NavLink>
                <NavLink className="fs-6 text-white" to="/about">
                  About Us
                </NavLink>
                <NavLink className="fs-6 text-white" to="/enroll">
                  Enroll Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <small className="text-white ">© copyright to Wheeler 2021</small>
      </div>
    </div>
  );
};

export default Footer;
