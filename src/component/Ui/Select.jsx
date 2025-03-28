import React from "react";

export default function Select({ options, value, onChange, className = "" }) {
  return (
    <select
      className={`w-full p-2 border rounded ${className}`}
      value={value}
      onChange={onChange}
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
