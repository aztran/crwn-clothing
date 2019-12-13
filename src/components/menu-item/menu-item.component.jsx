import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  //   console.log(match);
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className={`menu-item ${size} `}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      //   onClick={() => console.log(match, linkUrl, history)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
