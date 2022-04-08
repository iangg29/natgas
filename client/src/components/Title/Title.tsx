import React from "react";

type Props = {
  title: any;
};

const Title = ({ title }: Props) => {
  return <div className="title-general">{title}</div>;
};

export default Title;
