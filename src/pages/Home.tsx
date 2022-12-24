import { Space } from "antd";
import React from "react";
import { Creator } from "../components/Creator";
import { Result } from "../components/Result";

type Props = {};

export const Home = (props: Props) => {
  return (
    <Space size={20} direction="vertical">
      <Creator />
      <Result />
    </Space>
  );
};
