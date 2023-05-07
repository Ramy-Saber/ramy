import React, { useState,
useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import i18n from "i18next";
import New from "../Data/news";

function News() {
  const { t } = useTranslation();

  return (
    <div className="blog-news">
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
      <div className="blog en">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="time">
                <span>{t("NEWS_BLOG")}</span>
                <p>{t("News_1")}</p>
                <span>{t("NEWS_BLOG_1")}</span>
                <p>{t("News_2")}</p>
                <span>{t("NEWS_BLOG_2")}</span>
                <p>{t("News_3")}</p>
                <span>{t("NEWS_BLOG_3")}</span>
                <span>{t("News_4")}</span>
                <ul>
                  <li>{t("News_5")}</li>
                  <li>{t("News_6")}</li>
                  <li>{t("News_7")}</li>
                  <li>{t("News_8")}</li>
                  <li>{t("News_9")}</li>
                </ul>
                <span>{t("NEWS_BLOG_4")}</span>
                <p>{t("News_10")}</p>
              </div>
            </div>
            {New.map((x, index) => (
                <div className="col-md-6" key={index}>
                  <div className="step">
                    <Link to="#!" className="new" style={{ backgroundImage: `url(${x.src})` }}>
                      <strong>{x.span}</strong>
                    </Link>
                    <Link to="#!">{x.step}</Link>
                    {/* <span><i className="fa-solid fa-clock"></i>{x.time}</span> */}
                    <p>{i18n.language === "en"
                            ? x.description
                            : x.description_ar}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <div className="creative">
        <div className="container">
          <h1><span>{t("creative_1")}</span>{t("creative_2")}<br />
          <span>{t("creative_3")}</span>{t("creative_4")}</h1>
        </div>
      </div> */}
    </div>
  );
}

export default News;
