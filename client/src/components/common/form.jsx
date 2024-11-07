import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const CommonForm = ({ formControls }) => {
  const renderInputs = (controlItem) => {
    let element = null;

    switch (controlItem.componentType) {
      case "input":
        element = (
          <Input
            type={controlItem.type}
            name={controlItem.name}
            id={controlItem.name}
            placeholder={controlItem.placeholder}
          />
        );
        break;

      default:
        element = (
          <Input
            type={controlItem.type}
            name={controlItem.name}
            id={controlItem.name}
            placeholder={controlItem.placeholder}
          />
        );
        break;
    }
    return element;
  };

  return (
    <form action="">
      <div className="flex flex-col gap-3">
        {formControls.map((control) => (
          <div className="grid w-full gap-1.5" key={formControls.name}>
            <Label className="mb-1" htmlFor={control.name}>
              {control.label}
            </Label>
            {renderInputs(control)}
          </div>
        ))}
      </div>
    </form>
  );
};
