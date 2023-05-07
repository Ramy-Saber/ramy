import React, { useState,
useEffect } from "react";
import { slice, concat } from "lodash";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import i18n from "i18next";
import Projects from "../Data/projects";
import { buttons } from "./category";

function Project() {
  const { t } = useTranslation();
  const DATA = Projects
  const LIMIT = 6;

const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(DATA, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + 3;
    const newShowMore = newIndex <= DATA.length - 1;
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };
  
  const [activeIndex, setActiveIndex] = useState(0); 

  function handleFilter(e) {
    let typeFilter = e.target.value;
      if(typeFilter !== "all"){
        let filteredFilter = DATA.filter(category => category.type.includes(typeFilter));
        setList(filteredFilter);
        setShowMore(false);
      }else{
        setList(DATA);
        setList((slice(DATA, 0, LIMIT)));
        DATA.length >= 6 ? setShowMore(true) : setShowMore(false);
      }
  }

  const handleToggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="utility">
        <div className="container">
          <div className="ul">
            <h1>{t("projects")}</h1>
            <span>
              {t("home")} <i className="fa fa-chevron-right"></i> {t("projects")}
            </span>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center fillter-buttons">
          {buttons &&
            buttons.map((x, index, e) => (
              <>
                <button key={index} value={x.value} onClick={(e) => {handleToggle(index); handleFilter(e)}} className={activeIndex === index ? "button-item active" : "button-item"}>
                  {i18n.language === "en"
                          ? x.name
                          : x.name_ar}
                </button>
              </>
            ))}
          </div>
            {list.map((x, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <Link to={`/SingleProject/${x.id}`}>
                    <div className="pro" style={{ backgroundImage: `url(${x.src})` }}>
                      <div>
                        <h1>{x.step}</h1>
                        <span>{x.name}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              
          <div className="col-lg-12 text-center">
            {showMore && (
              <button className="more" onClick={loadMore}>
                {" "}
                Load More{" "}
              </button>
            )}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
