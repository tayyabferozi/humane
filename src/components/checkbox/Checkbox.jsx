import React from "react";

import "./Checkbox.scss";

const Checkbox = ({ text }) => {
  return (
    <label class="checkbox-container">
      <input type="checkbox" />
      {text}
      <span class="checkmark"></span>
    </label>
  );
};

export default Checkbox;
