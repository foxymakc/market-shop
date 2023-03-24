import React from "react";
import "./Requisites.css";
import { listRequisites } from "../../utils/consts";

export default function Requisites() {
  return (
    <div className="requisites">
      <div className="requisites__container">
        <h3 className="requisites__title">Реквизиты ООО «Market Shop»</h3>
        <ul className="requisites__list">
          {listRequisites.map((field) => (
            <li key={field.title} className="requisites__field">
              <p className="requisites__field-title">{field.title}</p>
              <p className="requisites__field-text">{field.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
