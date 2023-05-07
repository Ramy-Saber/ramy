import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import ContactForm from "../forms/contactForm";
import img from "../img/contemporary-looking-office-e1640485287148-pi295zyog3thhuz7k0uascuajfhd1ufks4vr87jp3c.jpg"

function Contact() {

  const { t } = useTranslation();
  return (
    <>
      <div className="utility">
        <div className="container">
          <div className="ul">
            <h1>{t("contact")}</h1>
            <span>
              {t("home")} <i className="fa fa-chevron-right"></i> {t("contact")}
            </span>
          </div>
        </div>
      </div>
      <div className="info en">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="have">
                <h1>{t("Contact_Info")}</h1>
                <h3><i className="fa-solid fa-location-dot"></i>{t("location_des")}</h3>
                <a href="tel: 01154258770"><i className="fa-solid fa-phone-volume"></i>01154258770</a>
                <a href="mailto: info@email.com"><i className="fa-solid fa-envelope-open-text"></i>info@email.com</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="have">
                <h1>{t("Stay_Connected")}</h1>
                <p>{t("connect_des")}</p>
                <div className="row">
                  <div className="col-md-6">
                    <a href="#!"><i className="fab fa-facebook-square"></i>Facebook</a>
                  </div>
                  <div className="col-md-6">
                    <a href="#!"><i className="fab fa-instagram"></i>Instagram</a>
                  </div>
                  <div className="col-md-6">
                    <a href="#!"><i className="fab fa-twitter"></i>Twitter</a>
                  </div>
                  <div className="col-md-6">
                    <a href="#!"><i className="fab fa-tiktok"></i>Tik Tok</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="com">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img} alt="" />
            </div>
            <div className="col-md-6">
              <div className="review">
                <span>{t("review")}</span>
                <h1>{t("review_header")}</h1>
                <p>{t("review_des")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="have en">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <span>{t("have")}</span>
                <h1>{t("have_header")}</h1>
                <p>{t("have_des")}</p>
                <h3><i className="fa-solid fa-location-dot"></i>{t("location_des")}</h3>
                <a href="tel: 01154258770"><i className="fa-solid fa-phone-volume"></i>01154258770</a>
                <a href="mailto: info@email.com"><i className="fa-solid fa-envelope-open-text"></i>info@email.com</a>
              </div>
            </div>
            <div className="col-lg-6"><ContactForm /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
