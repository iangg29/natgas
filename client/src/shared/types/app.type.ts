import React from "react";

export type NatGasFormElement = React.FormEvent<HTMLFormElement>;

export type VacationsRangeInputs = {
  maximum: number;
  minimum: number;
  days: number;
};
