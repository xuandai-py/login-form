import React from "react";

const BlockSection = ({ children, className }) => {
  return <section className={`block-section ${className}`}>{children}</section>;
};
const BlockSectionContent = ({ children, className }) => {
  return <div className={`block-section-content ${className}`}>{children}</div>;
};

const Heading = ({ children, level = 2, className }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={`cvh ${className}`}>{children}</HeadingTag>;
};

const UnoderList = ({ list }) => {
  return (
    <ul>{list && list.map((item, index) => <li key={index}>{item}</li>)}</ul>
  );
};

export { BlockSection, BlockSectionContent, Heading, UnoderList };
