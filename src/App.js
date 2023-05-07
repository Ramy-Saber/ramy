import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./components/Sass/App.scss";
import Home from "./components/Pages/Home";
import About from "./components/Pages/about";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
import "./components/translations/i18n";
import i18n from "i18next";
import Footer from "./components/Footer/Footer";
import Services from "./components/Pages/Services";
import News from "./components/Pages/News";
import Careers from "./components/Pages/Careers";
import Contact from "./components/Pages/Contact";
import Privacy from "./components/Pages/Privacy";
import Terms from "./components/Pages/Terms";
import FAQ from "./components/Pages/FAQ";
import Projects from "./components/Pages/projects";
import ScrollToTop from "./components/Pages/ScrollToTop";
import Top from "./components/Pages/backToTop";
import SingleProject from "./components/Pages/SingleProject";
import Social from "./components/Pages/social";

function App() {
  const [lang, setLang] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

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

  const handleOnclick = (lang) => {
    const __lang = lang === "ar" ? "ar" : "en";
    i18n.changeLanguage(__lang);
    localStorage.setItem("lang", __lang);
    changeLayout(__lang);
    setLang(__lang);
  };

  const changeLayout = (lang) => {
    if (lang == "ar") {
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
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Social />
        <Navbar changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}/>
        <Routes>
          <Route
            path="/"
            element={<Home />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
          <Route
            path="/About"
            exact
            element={<About />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
          <Route
            path="/Services"
            exact
            element={<Services />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
          <Route
            path="/News"
            exact
            element={<News />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
          <Route
            path="/Careers"
            exact
            element={<Careers />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
          <Route
            path="/Contact"
            exact
            element={<Contact />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
          <Route
            path="/Privacy"
            exact
            element={<Privacy />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
          <Route
            path="/Terms"
            exact
            element={<Terms />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
          <Route
            path="/FAQ"
            exact
            element={<FAQ />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
          <Route
            path="/Projects"
            exact
            element={<Projects />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
          <Route
              path="/SingleProject/:id"
              exact
              element={<SingleProject />}
              changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
            />
        </Routes>
        <Footer changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}/>
        <Top />
      </BrowserRouter>
    </>
  );
}

export default App;
