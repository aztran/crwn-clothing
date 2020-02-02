import React from "react";
import { withRouter } from "react-router-dom";
// import "./menu-item.styles.scss";

import {
  MenuItemCOntainer,
  BackgroundImageContainer,
  ContentSubTitle,
  ContentTitle,
  ContentContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  //   console.log(match);
  return (
    <MenuItemCOntainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      //   onClick={() => console.log(match, linkUrl, history)}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
        <ContentSubTitle className="subtitle">Shop Now</ContentSubTitle>
      </ContentContainer>
    </MenuItemCOntainer>
  );
};

export default withRouter(MenuItem);
