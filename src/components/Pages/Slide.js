import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import client from "../Data/client";
import i18n from "i18next";
import "../translations/i18n";

export default function Slide() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
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
    </>
  );
}
