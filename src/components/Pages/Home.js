import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import Slide from "./Slide";
import "../translations/i18n";
import bg7 from "../img/57357.jpg";
import bg8 from "../img/covertina.jpg";
import bg9 from "../img/jaf.jpg";
import view from "../img/designers-working-on-a-project.jpg";
import aboutimg1 from "../img/sei-49T0rSuc2Gg-unsplash.jpg";
import aboutimg2 from "../img/rumman-amin-3DZplIxvyh4-unsplash.jpg";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CountUp from 'react-countup';
import Countter from "../Data/countter"
import i18n from "i18next";
import "../translations/i18n";
import News from "../Data/news";
import client from "../Data/client";
import VisibilitySensor from 'react-visibility-sensor';
import Projects from "../Data/projects";
import Team from "../Data/Team";
import question from "../Data/question"

function Home() {
  const { t } = useTranslation();
  const List = News.filter((d) => d.selected === false);
  const List2 = News.filter((d) => d.selected === true);
  const project = Projects.filter((d) => d.selected === true);
  const questions = question.filter((d) => d.selected === true);

  return (
    <div className="home">
      <div className="">
        <div
          className="swiper-container swiper-hero dots-over"
          data-margin="0"
          data-autoplay="true"
          data-autoplaytime="5000"
          data-nav="true"
          data-dots="true"
          data-items="1"
        >
          <>
            <Swiper
              slidesPerView={1}
              pagination={true}
              navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
              }}
              modules={[Pagination, Navigation]}
              className="swiper-wrapper"
            >
              <SwiperSlide>
                <div
                  className="swiper-slide"
                  // data-image-src="./assets/img/photos/bg7.jpg"
                  style={{ backgroundImage: `url(${bg7})` }}
                >
                  <div className="container h-100">
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                  // data-image-src="./assets/img/photos/bg8.jpg"
                  style={{ backgroundImage: `url(${bg8})` }}
                >
                  <div className="container h-100">
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                  // data-image-src="./assets/img/photos/bg9.jpg"
                  style={{ backgroundImage: `url(${bg9})` }}
                >
                  <div className="container h-100">
                    
                  </div>
                </div>
              </SwiperSlide>
              <Link to="#!" className="image-swiper-button-next">
                <i className="fa fa-arrow-right"></i>
              </Link>
              <Link to="#!" className="image-swiper-button-prev">
                <i className="fa fa-arrow-left"></i>
              </Link>
            </Swiper>
          </>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="about en">
            <div className="row">
              <div className="col-md-6">
                <div className="company">
                  <span className="about_company">{t("about_company")}</span>
                  <h1 className="about_header">{t("about_header")}</h1>
                  <p className="about_description">{t("about_description")}</p>
                  <div className="about-img">
                    <img src={aboutimg1} alt="" />
                    {/* <div className="red"><span>3+ <br/><strong className="about_Experience">{t("about_Experience")}</strong></span></div> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="team">
                  <div className="about-img">
                    <img src={aboutimg2} alt="" />
                  </div>
                  <div className="trust">
                    <div>
                      <h1 className="Team"><i className="fa fa-seal-exclamation"></i>{t("Team")}</h1>
                      <p className="team_description">{t("team_description")}</p>
                    </div>
                    <div>
                      <h1 className="Company"><i className="fa fa-users-medical"></i>{t("Company")}</h1>
                      <p className="Company_description">{t("Company_description")}</p>
                    </div>
                  </div>
                  <div className="about-link">
                    <Link className="more LEAREN_MORE" to="/about">{t("LEAREN_MORE")}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="we en">
            <div className="row">
              <div className="col-md-6">
                <div className="tec">
                  <div>
                    <CircularProgressbar value={88} text={"88%"} />
                    <h5>{t("Advertising")}</h5>
                  </div>
                  <div>
                    <CircularProgressbar value={96} text={"96%"} />
                    <h5>{t("Design")}</h5>
                  </div>
                  <div>
                    <CircularProgressbar value={92} text={"92%"} />
                    <h5>{t("Technology")}</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <span>{t("DO")}</span>
                  <h1>{t("Make")}</h1>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="services en">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="SERVICES">{t("SERVICES")}</span>
              <h1 className="Best_Services">{t("Best_Services")}</h1>
              <p className="Services_description">{t("Services_description")}</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="best">
                <i className="fa-solid fa-lightbulb"></i>
                <h1 className="Business">{t("Business")}</h1>
                <p className="Business_description">{t("Business_description")}</p>
                <Link to="/Services" className="LEAREN_MORE">{t("LEAREN_MORE")}</Link>
              </div>
              <div className="best">
                <i className="fa-solid fa-chalkboard-user"></i>
                <h1 className="Branding">{t("Branding")}</h1>
                <p className="Branding_description">{t("Branding_description")}</p>
                <Link to="/Services" className="LEAREN_MORE">{t("LEAREN_MORE")}</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 top">
              <div className="best">
                <i className="fa-solid fa-bars-progress"></i>
                <h1 className="Strategy">{t("Strategy")}</h1>
                <p className="Strategy_description">{t("Strategy_description")}</p>
                <Link to="/Services" className="LEAREN_MORE">{t("LEAREN_MORE")}</Link>
              </div>
              <div className="best view">
                <img src={view} alt="" />
                <div>
                  <p className="Know">{t("Know")}</p>
                  <Link to="/Services" className="VIEW_MORE">{t("VIEW_MORE")}</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="best">
                <i className="fa-solid fa-chalkboard-user"></i>
                <h1 className="Planning">{t("Planning")}</h1>
                <p className="Planning_description">{t("Planning_description")}</p>
                <Link to="/Services" className="LEAREN_MORE">{t("LEAREN_MORE")}</Link>
              </div>
              <div className="best">
                <i className="fa-solid fa-bars-progress"></i>
                <h1 className="Risk">{t("Risk")}</h1>
                <p className="Risk_description">{t("Risk_description")}</p>
                <Link to="/Services" className="LEAREN_MORE">{t("LEAREN_MORE")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="container">
          <div className="our">
            <div>
              <span className="TESTIMONIAL">{t("TESTIMONIAL")}</span>
              <h1 className="Said">{t("Said")}</h1>
            </div>
            <Slide /> 
          </div>
          <div className="test">
            <Swiper
              slidesPerView={1}
              navigation={true}
              modules={[ Navigation]}
              className="mySwiper"
            >
                {client.map((x, index) => (
                  <SwiperSlide key={index}>
                    <div className="client">
                      <p>{i18n.language === "en"
                                ? x.description
                                : x.description_ar}</p>
                      <div className="quote">
                        <div className="qu">
                          <img src={x.src} alt="" />
                          <div>
                            <h1>{i18n.language === "en"
                                  ? x.name
                                  : x.name_ar}</h1>
                            <span>Client</span>
                          </div>
                        </div>
                        <i className="fa-solid fa-quote-right"></i>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="count en">
            <div className="row">
              {Countter.map((x, index) => (
                <div className="col-md-3" key={index}>
                  <h1>{i18n.language === "en"
                            ? x.name
                            : x.name_ar}</h1>
                  <CountUp start={0} end={x.end} delay={.3} duration={4}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                    <h6>{i18n.language === "en"
                            ? x.span
                            : x.span_ar}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span>{t("projects")}</span>
              <h1>{t("Featured_projects")}</h1>
              <p>{t("projects_des")}</p>
            </div>
            {project.map((x, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <Link to="#!">
                    <div className="pro" style={{ backgroundImage: `url(${x.src})` }}>
                      <div>
                        <h1>{x.step}</h1>
                        <span>{x.name}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              <div className="col-md-12 mt-5">
                <Link to="/projects" className="VIEW_MORE">{t("VIEW_MORE")}</Link>
              </div>
          </div>
        </div>
      </div>
      <div className="request">
        <div>
          <span className="">{t("REQUEST")}</span>
          <h1>{t("REQUEST_header")}</h1>
          <p>{t("REQUEST_description")}</p>
          <Link className="VIEW_MORE" to="/Services">{t("REQUEST_link")}</Link>
        </div>
      </div>
      <div className="blog en">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="time">
                <span>{t("NEWS_BLOG")}</span>
                <h1>{t("News")}</h1>
              </div>
              {List.map((x, index) => (
                  <div className="step" key={index}>
                    <Link to="/News">{x.step}</Link>
                    <span><i className="fa-solid fa-clock"></i>{x.time}</span>
                  </div>
                ))}
            </div>
            {List2.map((x, index) => (
                <div className="col-md-4" key={index}>
                  <div className="step">
                    <Link to="/News" className="new" style={{ backgroundImage: `url(${x.src})` }}>
                      <strong>{x.span}</strong>
                    </Link>
                    <Link to={x.link}>{x.step}</Link>
                    <span><i className="fa-solid fa-clock"></i>{x.time}</span>
                    <p>{i18n.language === "en"
                            ? x.description
                            : x.description_ar}</p>
                  </div>
                </div>
              ))}
              <div className="col-md-12 mt-5 text-center">
                <Link to="/News" className="VIEW_MORE">{t("VIEW_MORE")}</Link>
              </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container">
          <div className="row">
              <div className="col-md-12">
                <span>{t("Team")}</span>
                <h1>{t("Team_header")}</h1>
                <p>{t("Team_des")}</p>
              </div>
              {Team.map((x, index) => (
                <div className="col-md-4" key={index}>
                  <div className="team-div" style={{ backgroundImage: `url(${x.src})` }}>
                    <div className="media">
                      <a href={x.facebook} target="_blank" >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href={x.inst} target="_blank" >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href={x.link} target="_blank" >
                        <i className="fa-solid fa-globe"></i>
                      </a>
                    </div>
                    <div className="person">
                      <h1>{x.name}</h1>
                      <span>{x.title}</span>
                    </div>
                    <div className="overlay"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="FAQ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span>{t("FAQ")}</span>
              <h1>{t("FAQ_des")}</h1>
            </div>
              {questions.map((x, index) => (
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
              <div className="col-md-12 mt-5">
                <Link to="/FAQ" className="VIEW_MORE">{t("VIEW_MORE")}</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
