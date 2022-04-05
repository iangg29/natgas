import React from "react";
import { Helmet } from "react-helmet";
import Title from "../components/Title/Title";

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
      <Title title={title} />
      <div className="py-5">{children}</div>
    </div>
  );
};

export default Page;
