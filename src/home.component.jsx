import React from "react";
import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <h1 className="subtitle"> Shop Now</h1>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <h1 className="subtitle"> Shop Now</h1>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Sneakers</h1>
            <h1 className="subtitle"> Shop Now</h1>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Women</h1>
            <h1 className="subtitle"> Shop Now</h1>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Men</h1>
            <h1 className="subtitle"> Shop Now</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;