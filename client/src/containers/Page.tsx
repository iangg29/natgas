import React from "react";
import { Helmet } from "react-helmet";

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
      <h1 className="text-center text-2xl font-bold font-bold text-natgas-azul dark:text-gray-50 md:text-left">
        {title}
      </h1>
      <div className="py-5">{children}</div>
    </div>
  );
};

export default Page;
