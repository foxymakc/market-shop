import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us__container">
        <h2 className="about-us__title">Добро пожаловать на Market Shop</h2>
        <p className="about-us__text">
          Мы находимся по адресу: г.М , ул.М, д 1
        </p>
        <p className="about-us__text">Режим работы: 9:00 - 20:00</p>
        <div className="about-us__map-container">
          <iframe
            title="Map"
            frameBorder="0"
            width="100%"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A2584eee6cb3bdedbf08c32cfcde92f266038295fa2a0186a2d5c9a9daf8ae4ce&amp;source=constructor"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
