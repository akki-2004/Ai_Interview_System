import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaLock, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Header = () => {
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleResourcesDropdown = () => {
    setShowResourcesDropdown(!showResourcesDropdown);
    setShowProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowResourcesDropdown(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fw-bold" to="#">
            WiseHireAI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/results">
                  Results
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/history">
                  History
                </Link>
              </li>
              <li
                className={`nav-item dropdown ${
                  showResourcesDropdown ? 'show' : ''
                }`}
                onMouseEnter={toggleResourcesDropdown}
                onMouseLeave={toggleResourcesDropdown}
              >
                <Link
                  className="nav-link dropdown-toggle fs-5"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={showResourcesDropdown}
                >
                  Resources
                </Link>
                <ul
                  className={`dropdown-menu ${
                    showResourcesDropdown ? 'show' : ''
                  }`}
                >
                  <li>
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/help">
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle fs-5"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={showProfileDropdown}
                  onClick={toggleProfileDropdown}
                >
                  <FaUserCircle className="me-2" />
                  Profile
                </Link>
                <ul
                  className={`dropdown-menu dropdown-menu-end profile-dropdown ${
                    showProfileDropdown ? 'show' : ''
                  }`}
                >
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <FaUserCircle className="me-2" />
                      Your Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/change-password">
                      <FaLock className="me-2" />
                      Change Password
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/logout">
                      <FaSignOutAlt className="me-2" />
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-link.dropdown-toggle::after {
          display: none;
        }

        .profile-dropdown {
          left: -110%;
        }

        @media (max-width: 991px) {
          .profile-dropdown {
            position: static;
            float: none;
            left: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Header;