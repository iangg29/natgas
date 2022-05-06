import React from "react";
import { Helmet } from "react-helmet";
import Title from "../components/Title/Title";

type Props = {
  title: string;
  headTitle: string;
  children: JSX.Element | JSX.Element[];
  padding: boolean;
};

const Page = ({ children, headTitle, title, padding }: Props): JSX.Element => {
  return (
    <div
      className={`container mx-auto py-10 dark:text-gray-100 ${
        padding ? "px-10" : null
      }`}
    >
      <Helmet>
        <title>{headTitle} | NatGas</title>
      </Helmet>
      <Title title={title} />
      <div className="py-5">{children}</div>
    </div>
  );
};

export default Page;
