import React, { useEffect, useState } from "react";
import SideBar from "../sideBar/SideBar";
import { Footer } from "./Footer";
import { Header } from "./Header";

const DashboardLayout = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"));
    if (u) {
      setUser(u);
    }
  }, []);
  console.log(user);
  return (
    <div className="dashbord-layout">
      <SideBar currentUser={user} />

      <div className="dashboard-main">
        <Header currentUser={user} />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
