import React from "react";
import "./optionButton.css";

const OptionButton = (props) => {
  return (
    <div>
        <button className="option-button">{props.option}</button>
    </div>
  );
};

export default OptionButton;
