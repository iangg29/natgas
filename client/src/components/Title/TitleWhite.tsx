import React from "react";

type Props = {
  title: string;
};

const TitleWhite = ({ title }: Props) => {
  return <div className="title-white">{title}</div>;
};

export default TitleWhite;
