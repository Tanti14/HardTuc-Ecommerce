import React from "react";

export const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <div>Componente Navbar</div>
      <div className="flex min-h-screen w-full">{children}</div>
      <div>Componente Footer</div>
    </div>
  );
};
