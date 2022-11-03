import React, { useEffect, useState, useRef } from "react";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./SelectBox.scss";

const SelectBox = ({ value, onChange, items }) => {
  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, () => {
    setDropdownState((prevState) => ({ ...prevState, showItems: false }));
  });

  const [dropdownState, setDropdownState] = useState({
    items: items || [],
    showItems: false,
    // selectedItem: items && items[0],
  });

  const dropDown = () => {
    setDropdownState((prevState) => ({
      ...prevState,
      showItems: !prevState.showItems,
    }));
  };

  const selectItem = (item) => {
    setDropdownState((prevState) => ({
      ...prevState,
      showItems: false,
    }));
    onChange({ target: item });
  };

  useEffect(() => {
    if (value) onChange({ target: { value: value || (items && items[0]) } });
  }, [value]);

  return (
    <div className="select-box--box" ref={dropdownRef}>
      <div className="select-box--container">
        <div className="select-box--selected-item" onClick={dropDown}>
          {value}
        </div>
        <div className="select-box--arrow">
          <img
            src={require("../../images/arrow-down.png")}
            alt="arrow"
            className={`arrow ${dropdownState.showItems ? "invert" : ""}`}
          />
        </div>

        <div
          style={{ display: dropdownState.showItems ? "block" : "none" }}
          className={"select-box--items"}
        >
          {dropdownState.items.map((item) => (
            <div
              key={item.id}
              onClick={() => selectItem(item)}
              className={dropdownState.selectedItem === item ? "selected" : ""}
            >
              {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
