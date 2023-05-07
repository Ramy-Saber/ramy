import React from "react";
import { useParams } from "react-router";
import projects from "../Data/projects";
import "../translations/i18n";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import i18n from "i18next";

function SingleProject() {
    const { t } = useTranslation();
    const params = useParams();
    const x = projects.filter((d) => d.id === parseInt(params.id))[0];

    return (
        <>
            <div className="single">
                <img src={x.src1} alt="" />
            </div>
            <div className="art">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pro-des">
                                <h1>{x.step}</h1>
                                <p>{x.des}</p>
                                <a href={x.link} target="_blank" >{t("View_Website")}</a> 
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pro-logo">
                                <img alt="" src={x.logo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="web mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <h2>{x.name}</h2> */}
                            <h2>{x.name1}</h2>
                            <h2>{x.name2}</h2>
                            <p>{x.short_des}</p>
                        </div>
                        {/* <div className="col-md-12 mb-3">
                            <img alt="" src={x.src1} />
                        </div> */}
                        <div className="col-md-6 mb-5">
                            <img alt="" src={x.src2} />
                        </div>
                        <div className="col-md-6 mb-5">
                            <img alt="" src={x.src3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProject;