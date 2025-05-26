import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="Dashboard flex h-screen w-full bg-slate-100">
        <aside
          className={`Sidebar ${sidebarOpen ? "open" : ""} w-[20%] h-full bg-gradient-to-b from-rose-100 to-rose-200 border-r border-rose-300 shadow-md flex flex-col justify-between overflow-y-auto`}
        >
          <Sidebar />
        </aside>

        <main className="Content flex-1 p-8 overflow-auto">
          <Outlet /> {/* Routed content renders here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
