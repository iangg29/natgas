import React from "react";
type Props = {
  label: string;
  action: any;
};
const PrimaryButton = ({ label, action }: Props): JSX.Element => {
  return (
    <button onClick={action} className="primary-button">
      {label}
    </button>
  );
};

export default PrimaryButton;