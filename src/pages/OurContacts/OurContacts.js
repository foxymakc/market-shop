import React from "react";
import "./OurContacts.css";

export default function OurContacts() {
  return (
    <div className="our-contacts">
      <div className="our-contacts__container">
        <h2 className="our-contacts__title">Контакты</h2>
        <p className="our-contacts__text">
          Если у вас есть вопросы, напишите нам на почту market-shop@qwer.ru
        </p>
        <p className="our-contacts__text">
          Контактный телефон: 8-888-888-88-88
        </p>
      </div>
    </div>
  );
}
