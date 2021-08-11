import React from "react";
import { Helmet } from "react-helmet";

export const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To E-Commerce',
  description: "We sell the best graphic cards for cheap",
  keywords: "electronics, graphic cards, buy graphic cards, cheap graphic cards"
}
