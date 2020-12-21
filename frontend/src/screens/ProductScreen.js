import React from "react";
import data from "../data";

export default function ProductScreen() {
  const product = data;
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="col-1"></div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
