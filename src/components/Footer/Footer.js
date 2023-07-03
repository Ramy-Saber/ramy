import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import Logo from "../img/logo.png";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer en">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="tt">
                        <img alt="" src={Logo}/>
                        <p>{t("footer_des_1")}</p>
                        {/* <p>{t("footer_des_2")}</p> */}
                        {/* <p>{t("footer_des_3")}</p> */}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>{t("Links")}</h3>
                            <ul>
                                <li><Link to="/" >{t("home")}</Link></li>
                                <li><Link to="/about" >{t("about_nav")}</Link></li>
                                <li><Link to="/Services" >{t("Services")}</Link></li>
                                <li><Link to="/News" >{t("NEWS_nav")}</Link></li>
                                {/* <li><Link to="/Terms" >{t("terms")}</Link></li> */}
                                {/* <li><Link to="/Privacy" >{t("Privacy")}</Link></li> */}
                            </ul>
                        </div>
                        {/* <div className="col-md-6">
                            <h3>{t("join")}</h3>
                            <p>{t("group")}</p>
                            <Link to="#!" className="Now">{t("now")}</Link>
                        </div>
                        <div className="col-md-12">
                            <h3>{t("Follow")}</h3>
                            <ul className="social">
                                <li><a href="#!"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#!"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#!"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="copyRight">
                        <p>© All Right Reserved © 2022</p>
                        <p>Powered By <a target="_blank" href="https://abdallahsaqer.netlify.app/" ><strong>A.Saqer</strong></a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
