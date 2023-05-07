import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import i18n from "i18next";

function Careers() {
  const { t } = useTranslation();

  return (
    <>
      <div className="utility">
        <div className="container">
          <div className="ul">
            <h1>{t("Careers")}</h1>
            <span>
              {t("home")} <i className="fa fa-chevron-right"></i> {t("Careers")}
            </span>
          </div>
        </div>
      </div>
      <div className="creative">
        <div className="container">
          <h1><span>coming</span>Soon</h1>
        </div>
      </div>
    </>
  );
}

export default Careers;
