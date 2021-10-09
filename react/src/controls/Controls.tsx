import React from "react";
// TODO: These styles are actually globals when imported and used like this
import "./Controls.css";

export default function Controls({ currency }: any) {
  return (
    <div className="controls">
      <div className="currency">{currency}</div>
      <input
        className="total"
        type="number"
        min="1"
        step="any"
        placeholder="Total"
      />
    </div>
  );
}
