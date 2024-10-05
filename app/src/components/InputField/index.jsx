import React, { useState } from "react";
import { Textbox } from "react-inputs-validation";
import "./style.css";
// import "react-inputs-validation/lib/react-inputs-validation.min.css";

/**
 *
 * @param {object} props
 * @param {string} props.placeholder
 * @param {"text" | "password" | "email"} props.type
 * @param {boolean} props.required
 * @param {boolean} props.check
 * @param {string} props.value
 * @param {Function} props.onChange
 * @returns
 */
const InputField = ({
  placeholder = "Enter text.",
  type = "text",
  required,
  check,
  onChange,
  value,
}) => {
  const validate =
    type === "password"
      ? {
          reg: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          regMsg:
            "Password must be 8+ characters with 1 uppercase, 1 number, and 1 special character.",
        }
      : {};
  return (
    <>
      <Textbox
        value={value}
        classNameInput="w-full h-[46px] px-[12px] bg-[#0F1011] border border-solid border-[#2C2E33] placeholder:text-[#595A5C] text-[14px] outline-none"
        attributesInput={{
          type,
          placeholder,
        }}
        onChange={(value, e) => {
          onChange && onChange(value);
        }}
        onBlur={() => {}}
        validationOption={{
          ...validate,
          required: required ? "This field is required." : false,
          check,
          customFunc: (value) => {
            if (required && !value) {
              return "This field is required.";
            }
            return true; // Returning true means the validation passed
          },
        }}
      />
    </>
  );
};

export default InputField;
