import React from "react";
import "./storyBox.css";

const Header = (props) => {
  return (
    <div className="story-box">
     <h2>{props.title}</h2>
     <p>{props.text}</p>
    </div>
  );
};

export default Header;
