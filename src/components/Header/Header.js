import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-wrap row">
      <h1 className="col col-md-3">Health</h1>
      <h1 className="col col-md-6">Chapter</h1>
      <h1 className="col col-md-3">Stats</h1>
    </div>
  );
};

export default Header;
