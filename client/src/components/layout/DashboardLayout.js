import React from "react";
import SideBar from "../sideBar/SideBar";
import { Footer } from "./Footer";
import { Header } from "./Header";

const dashboardLayout = ({ children }) => {
  return (
    <div className="dashbord-layout">
      <SideBar />

      <div className="dashboard-main">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default dashboardLayout;
