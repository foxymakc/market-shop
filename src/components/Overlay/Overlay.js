import React from "react";
import "./Overlay.css";

export default function Overlay({ overlayVivible, setOpenNavCatalog }) {
  return (
    <div
      className={!overlayVivible ? "overlay" : "overlay overlay-active"}
      onClick={() => setOpenNavCatalog(false)}
    ></div>
  );
}
