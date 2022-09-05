import React from "react";
import { As, PropsWithAs } from "reakit-utils";

export type ScaleType = {
  [key: string]: string;
};

type BasePropsType = {
  scale?: ScaleType;
  children?: React.ReactNode;
  className?: string;
};

export type BaseType = {
  <Tag extends As>(props: PropsWithAs<BasePropsType, Tag>): JSX.Element;
};
