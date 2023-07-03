import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Nav_1(props) {
  const { t, i18n } = useTranslation();
  const [header, setHeader] = useState("header-home");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header-home");
    } else if (window.scrollY > 270) {
      return setHeader("header-home2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const [lang, setLang] = useState("");

  const detectLang = () => {
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
      changeLayout(localStorage.getItem("lang"));
    } else {
      localStorage.setItem("lang", "en");
      setLang("en");
      changeLayout("en");
    }
    i18n.changeLanguage(lang);
  };

  const [value, setValue] = useState("en");
  const handleOnclick = (lang) => {
    const __lang = lang === "ar" ? "ar" : "en";
    i18n.changeLanguage(__lang);
    localStorage.setItem("lang", __lang);
    changeLayout(__lang);
    setLang(__lang);
    setValue(__lang);
  };

  const changeLayout = (lang) => {
    if (lang === "ar") {
      document.querySelectorAll(".en").forEach((el) => {
        el.classList.add("ar");
        el.classList.remove("en");
      });
    } else {
      document.querySelectorAll(".ar").forEach((el) => {
        el.classList.add("en");
        el.classList.remove("ar");
      });
    }
  };

  useEffect(() => {
    detectLang();
  }, []);

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <>
      <header className={`${header} navbar navbar-expand-lg center-nav transparent navbar-dark caret-none en`}>
        <div className="container">
          <div className="nav-top">
            <div className="navbar-brand">
              <img alt="" src={Logo} className="logo-dark" />
            </div>
            <div>
              <ul className="navbar-nav nav-hide e">
                <li className="nav-item">
                  <NavLink to="/" onClick={handleClose} activeClassName="active" className="nav-link fromRight">
                    {t("home")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/About" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("about_nav")}
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/Services" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("Services")}
                  </NavLink>
                </li>
                {/* <li className="nav-item ">
                  <NavLink to="/projects" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("projects")}
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink to="/News" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("NEWS_nav")}
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink to="/Careers" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("Careers")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Contact" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("contact")}
                  </NavLink>
                </li> */}
              </ul>
            </div>
            <div className="navbar-other d-flex justify-content-end en">
              <ul className="navbar-nav flex-row align-items-center justify-content-end">
                {/* <li className="nav-item">
                  <Link
                    to ="#!"
                    className="nav-link border-none"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    onClick={handleShow1}
                  >
                    <i className="fa fa-circle-info"></i>
                  </Link>
                </li> */}
                <select
                  value={value}
                  onChange={(e) => {
                    // props?.changeLang?.();
                    handleOnclick(lang === "en" ? "ar" : "en");
                  }}
                  className="nav-item dropdown language-select text-uppercase"
                >
                  <option value="en" className="nav-item">
                    <Link className="dropdown-item" to="#!">
                      En
                    </Link>
                  </option>
                  <option value="ar" className="nav-item">
                    <Link className="dropdown-item" to="#!">
                      Ar
                    </Link>
                  </option>
                </select>
                <li className="nav-item d-lg-none">
                  <button
                    className="hamburger offcanvas-nav-btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                    onClick={handleShow}
                  >
                    <i className="fa-solid fa-bars-staggered"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title>
              <Link to="/" onClick={handleClose}>
              <img
                src={Logo}
                srcSet=""
                alt=""
              />
            </Link>
              <Link to="#!" onClick={handleClose} >
                <i className="fa-solid fa-times close" data-bs-dismiss="offcanvas" aria-label="Close"></i>
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="d-flex justify-content-between h-100 flex-column p-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/"  onClick={handleClose} activeClassName="active" className="nav-link fromRight">
                    {t("home")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/About" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("about_nav")}
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/Services" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("Services")}
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/projects" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("projects")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/News" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("NEWS_nav")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Careers" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("Careers")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Contact" onClick={handleClose} activeClassName="active" className="nav-link">
                    {t("contact")}
                  </NavLink>
                </li>
              </ul>
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <Link
                    to="mailto:info@gymmeclub.com"
                    className="link-inverse"
                  >
                    info@gymmeclub.com
                  </Link>
                  <br /> 00 (123) 456 78 90 <br />
                  <nav className="nav social social-white mt-4">
                    <Link
                      target="_blank"
                      to="#!"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link
                      target="_blank"
                      to="#!"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      target="_blank"
                      to="#!"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link
                      target="_blank"
                      to="#!"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

          </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas show={show1} onHide={handleClose1} className="offcanvas offcanvas-end text-inverse one" id="offcanvasRight">
          <Offcanvas.Header>
            <Offcanvas.Title>
              <Link to="/" onClick={handleClose1}>
              <img
                src={Logo}
                srcSet=""
                alt=""
              />
            </Link>
              <Link to="#!" onClick={handleClose1} >
                <i className="fa-solid fa-times close" data-bs-dismiss="offcanvas" aria-label="Close"></i>
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="widget mb-8">
              <p>{t("about_description")}</p>
            </div>
            <div className="widget mb-8">
              <h4 className="widget-title text-white mb-3">{t("contact")}</h4>
              <Link to="mailto:info@gymmeclub.com" target="_blank" className="d-block">
                info@gymmeclub.com
              </Link>
              <Link to="mailto:support@gymmeclub.com" target="_blank" className="d-block">
                support@gymmeclub.com
              </Link>
            </div>
            <div className="widget mb-8">
              <h4 className="widget-title text-white mb-3">{t("Links")}</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" onClick={handleClose1}>{t("Home")}</Link>
                </li>
                <li>
                  <Link to="/About" onClick={handleClose1}>{t("about_nav")}</Link>
                </li>
                <li>
                  <Link to="/FAQ" onClick={handleClose1}>{t("FAQ")}</Link>
                </li>
                <li>
                  <Link to="/Privacy" onClick={handleClose1}>{t("Privacy")}</Link>
                </li>
                <li>
                  <Link to="/Terms" onClick={handleClose1}>{t("terms")}</Link>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h4 className="widget-title text-white mb-3">{t("Follow")}</h4>
              <nav className="nav social social-white">
                <Link
                  target="_blank"
                  to="#!"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  target="_blank"
                  to="#!"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link 
                  target="_blank"
                  to="#!"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link
                  target="_blank"
                  to="#!"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </nav>
            </div>

          </Offcanvas.Body>
        </Offcanvas>

      </header>
    </>
  );
}

export default Nav_1;