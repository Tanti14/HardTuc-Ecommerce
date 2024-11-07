import { CommonForm } from "@/components/common/form";
import { registerFormControls } from "@/config";
import React from "react";

export const AuthRegister = () => {
  return <CommonForm formControls={registerFormControls} />;
};
