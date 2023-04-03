import React from "react";
import { useParams } from "react-router-dom";

export default function CurrentProductCard() {
   let params = useParams();
   console.log(params)
  return <div>CurrentProductCard</div>;
}
