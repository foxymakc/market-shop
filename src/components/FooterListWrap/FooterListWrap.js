import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./FooterListWrap.css";

export default function FooterListWrap({
  title,
  listLink,
  sotial,
  activeDropdown,
}) {
  const [openDropdown, setOpenDropdown] = useState(false);

  function OpenFooterDropdown(e) {
    let ul = e.target.parentElement.nextElementSibling;

    if (!openDropdown) {
      setOpenDropdown(true);
      e.target.innerHTML = "&#11165";
      e.target.previousElementSibling.classList.add(
        "footer__dropdown-title_open"
      );
      ul.classList.add("footer__links_open");
    } else {
      e.target.innerHTML = "&#11167;";
      e.target.previousElementSibling.classList.remove(
        "footer__dropdown-title_open"
      );
      ul.classList.remove("footer__links_open");
      setOpenDropdown(false);
    }
  }

  return (
    <div className="footer__list-wrap">
      <div className="footer__container-dropdown">
        <h3
          className={
            !sotial
              ? "footer__dropdown-title"
              : "footer__dropdown-title footer__dropdown-title-sotial"
          }
        >
          {title}
        </h3>
        {activeDropdown ? (
          <button className="footer__dropdown-btn" onClick={OpenFooterDropdown}>
            &#11167;
          </button>
        ) : (
          ""
        )}
      </div>
      <ul
        className={
          !sotial ? "footer__links" : "footer__links footer__links-sotial"
        }
      >
        {listLink.map((link) => (
          <li key={link.name} className="footer__link-container">
            {sotial ? (
              <a className="footer__link" href={link.src} target="_blank" rel="noreferrer">{link.name}</a>
            ) : (
              <NavLink className="footer__link" to={link.src}>{link.name}</NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
