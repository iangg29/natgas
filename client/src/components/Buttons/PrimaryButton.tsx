import React from "react";

type Props = {
  label: string;
  action: () => void;
  bg?: string;
};
const PrimaryButton = ({
  label,
  action,
  bg = "bg-gradient-to-r from-natgas-sec-one to-natgas-sec-two",
}: Props): JSX.Element => {
  return (
    <button onClick={action} className={`primary-button ${bg}`}>
      {label}
    </button>
  );
};

export default PrimaryButton;
