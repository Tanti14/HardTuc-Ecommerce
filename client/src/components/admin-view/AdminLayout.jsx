import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";

export const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full ">
      {/* Admin Sidebar */}
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        {/* Admin Header */}
        <AdminHeader />
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
