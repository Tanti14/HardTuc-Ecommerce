import { CommonForm } from "@/components/common/form";
import { registerFormControls } from "@/config";
import React from "react";

export const AuthLogin = () => {
  return <CommonForm formControls={registerFormControls} />;
};
