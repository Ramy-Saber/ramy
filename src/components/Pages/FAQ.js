import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import i18n from "i18next";
import question from "../Data/question"

function FAQ() {
  const { t } = useTranslation();

  return (
    <>
      <div className="utility">
        <div className="container">
          <div className="ul">
            <h1>{t("NEWS_BLOG")}</h1>
            <span>
              {t("home")} <i className="fa fa-chevron-right"></i> {t("NEWS_BLOG")}
            </span>
          </div>
        </div>
      </div>
      <div className="FAQ pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span>{t("FAQ")}</span>
              <h1>{t("FAQ_des")}</h1>
            </div>
              {question.map((x, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card accordion-item en">
                    <div className="card-header en" id={x.data_bs_target}>
                      <i className="fa-solid fa-sort-down"></i>
                      <button
                        className="collapsed en"
                        data-bs-toggle="collapse"
                        data-bs-target={"#" + x.aria_labelled}
                        aria-expanded="false"
                        aria-controls={x.aria_labelled}
                      >
                        {i18n.language === "en"
                          ? x.question
                          : x.question_ar}
                      </button>
                    </div>
                    <div
                      id={x.aria_labelled}
                      className="collapse"
                      aria-labelledby={x.data_bs_target}
                      data-bs-target="#accordion-1"
                    >
                      <div className="card-body">
                        <p>
                          {i18n.language === "en" ? x.answer : x.answer_ar}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="creative">
        <div className="container">
          <h1><span>{t("creative_1")}</span>{t("creative_2")}<br />
          <span>{t("creative_3")}</span>{t("creative_4")}</h1>
        </div>
      </div>
    </>
  );
}

export default FAQ;
