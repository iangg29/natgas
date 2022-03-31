import React from "react";
import { Helmet } from "react-helmet";

type Props = {
  title: string;
  headTitle: string;
  children: JSX.Element | JSX.Element[];
};

const Page = ({ children, headTitle, title }: Props): JSX.Element => {
  return (
    <div className="p-0 dark:text-gray-100 md:px-10">
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
