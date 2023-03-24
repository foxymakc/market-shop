import React from "react";
import { useResize } from "../../utils/Hooks/useResize";
import {
  listLinkBuyers,
  listLinkCompany,
  listLinkSotial,
} from "../../utils/consts";
import FooterListWrap from "../FooterListWrap/FooterListWrap";
import "./Footer.css";

function Footer() {
  const activeDropdown = useResize();
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-left">
          <FooterListWrap
            title={"Покупателям"}
            listLink={listLinkBuyers}
            activeDropdown={activeDropdown.isScreenMd}
          />
          <FooterListWrap
            title={"Компания"}
            listLink={listLinkCompany}
            activeDropdown={activeDropdown.isScreenMd}
          />
        </div>

        <div className="footer__sotial-container">
          <FooterListWrap
            title={"Мы в соцсетях"}
            listLink={listLinkSotial}
            sotial={true}
            activeDropdown={activeDropdown.isScreenMd}
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
