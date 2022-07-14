import React from "react";
import { LayoutProps } from "../../models/layout";
import Header from "../Header";

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
