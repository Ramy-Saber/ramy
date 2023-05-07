import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import img from "../img/r1.jpej.jpeg"
import img1 from "../img/r2.jpej.jpeg"

function About() {
  const { t } = useTranslation();

  return (
    <div className="aboutUS">
      <div className="utility">
        <div className="container">
          <div className="ul">
            <h1>{t("about_nav")}</h1>
            <span>
              {t("home")} <i className="fa fa-chevron-right"></i> {t("about_nav")}
            </span>
          </div>
        </div>
      </div>
      <div className="solution en">
        <div className="container">
          <div className="pro">
            {/* <div>
              <span>{t("about_company")}</span>
              <h1>{t("professional")}</h1>
            </div>
            <p>{t("professional_des")}</p> */}
          </div>
          <div className="fast">
            <div className="best">
              <div className="smart">
                <h2>{t("fast")}</h2>
                {/* <i className="fa-solid fa-stopwatch"></i> */}
              </div>
              <p>{t("fast_des")}</p>
              {/* <Link to="/Services" className="read">{t("READ")}</Link> */}
            </div>
            <div className="best">
              <div className="smart">
                <h2>{t("best")}</h2>
                {/* <i className="fa-solid fa-bahai"></i> */}
              </div>
              <p>{t("best_des")}</p>
              {/* <Link to="/Services" className="read">{t("READ")}</Link> */}
            </div>
            <div className="best">
              <div className="smart">
                <h2>{t("smart")}</h2>
                {/* <i className="fa-solid fa-hands-asl-interpreting"></i> */}
              </div>
              <p>{t("smart_des")}</p>
              {/* <Link to="/Services" className="read">{t("READ")}</Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="brands en">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h1>{t("build")}<span>{t("build_1")}</span>{t("build_2")}<span>{t("build3")}</span></h1>
                <p>{t("build_des")}</p>
                {/* <p>{t("build_des_1")}</p> */}
              </div>
            </div>
            <div className="col-md-6">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="corporate en">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="brand">
                <img alt="" src={img} />
                {/* <div>
                  <h2>{t("creating")}<br />{t("brand")}<br />{t("identity")}</h2>
                </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="style">
                {/* <span>{t("CORPORATE")}</span>
                <h1>{t("CORPORATE_header")}</h1> */}
                <p>{t("CORPORATE_des")}</p>
                {/* <div>
                  <h3>01. {t("endless")}</h3>
                  <h3>02. {t("creative")}</h3>
                </div>
                <Link to="/Services" className="VIEW_MORE">{t("about")}</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="agency">
        <div className="container">
          <div className="works">
            <div className="text-center">
              <span>{t("works")}</span>
              <h1>{t("works_our")}</h1>
            </div>
            <div className="book">
              <div className="select">
                <i className="fa-brands fa-usps"></i>
                <h2>{t("select")}</h2>
                <p>{t("select_des")}</p>
              </div>
              <div className="select">
                <i className="fa-regular fa-square-check"></i>
                <h2>{t("book")}</h2>
                <p>{t("book_des")}</p>
              </div>
              <div className="select">
                <i className="fa-solid fa-money-bill-1-wave"></i>
                <h2>{t("payment")}</h2>
                <p>{t("payment_des")}</p>
              </div>
              <div className="select">
                <i className="fa-solid fa-otter"></i>
                <h2>{t("Enjoy")}</h2>
                <p>{t("Enjoy_des")}</p>
              </div>
            </div>
            <div className="text-center">
              <p>{t("works_des")}<a href="tel: 01154258770">01154258770</a></p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="appointment en">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span>{t("appointment")}</span>
              <h1>{t("appointment_header")}</h1>
              <p>{t("appointment_des")}</p>
            </div>
            <div className="col-md-6">
              <div className="location">
                <i className="fa-solid fa-map-location-dot"></i>
                <div>
                  <h2>{t("location")}</h2>
                  <p>{t("location_des")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="location">
                <i className="fa-solid fa-envelope-open-text"></i>
                <div>
                  <h2>{t("address")}</h2>
                  <a href="mailto: info@peposaqer.com">info@dart.com</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="location">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <h2>{t("Phone")}</h2>
                  <a href="tel: 01154258770">01154258770</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="location">
                <i className="fa-regular fa-clock"></i>
                <div>
                  <h2>{t("Work_Hours")}</h2>
                  <p>{t("Work_Hours_des")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="creative">
        <div className="container">
          <h1><span>{t("creative_1")}</span>{t("creative_2")}<br />
          <span>{t("creative_3")}</span>{t("creative_4")}</h1>
        </div>
      </div> */}
  
    </div>
  );
}

export default About;