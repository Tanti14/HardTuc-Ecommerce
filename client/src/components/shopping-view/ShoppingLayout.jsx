import React from "react";
import { Outlet } from "react-router-dom";
import { ShoppingHeader } from "./ShoppingHeader";

export const ShoppingLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* ShoppingView Header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
};
