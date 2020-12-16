import React from "react";
import { Header } from "./styles/header";

export default function Headers({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
}
