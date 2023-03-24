import React, { useState, useEffect } from "react";
import { listLinkBuyers, listLinkCompany, listLinkSotial } from "../../utils/consts";
import FooterListWrap from "../FooterListWrap/FooterListWrap";
import "./Footer.css";

function Footer() {
  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      return setActiveDropdown(true);
    }
    window.addEventListener(
      "resize",
      (window.fn = resizeWindow((evt) => {
        if (evt.currentTarget.innerWidth <= 700) {
          return setActiveDropdown(true);
        }
        return setActiveDropdown(false);
      }))
    );
    return () => window.removeEventListener("resize", window.fn);
  }, []);

  function resizeWindow(callback) {
    let blockedCall = false;
    return function () {
      if (blockedCall) return;
      const context = this;
      const args = arguments;
      blockedCall = true;
      setTimeout(() => {
        callback.apply(context, args);
        blockedCall = false;
      }, 600);
    };
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-left">
          <FooterListWrap
            title={"Покупателям"}
            listLink={listLinkBuyers}
            activeDropdown={activeDropdown}
          />
          <FooterListWrap
            title={"Компания"}
            listLink={listLinkCompany}
            activeDropdown={activeDropdown}
          />
        </div>

        <div className="footer__sotial-container">
          <FooterListWrap
            title={"Мы в соцсетях"}
            listLink={listLinkSotial}
            sotial={true}
            activeDropdown={activeDropdown}
          />
          <p className="footer__text">
            <span className="footer__copyright-text">© 2010-2023</span> Market
            Shop — товары для дома. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
