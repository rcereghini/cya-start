import React from "react";
import OptionButton from './OptionButton/OptionButton'
import "./optionBox.css";

const OptionBox = (props) => {
  return (
    <div className="option-box">
        <OptionButton option = {props.options[0]}/>
        <OptionButton option = {props.options[1]}/>
        <OptionButton option = {props.options[2]}/>
    </div>
  );
};

export default OptionBox;
