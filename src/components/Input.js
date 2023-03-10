import React from "react";

const Input = ({ label, ...props }) => {
  return (
    <label className="w-full block space-y-1 group">
      <span className="block font-medium text-sm text-gray-700 group-focus-within:text-gray-900 focus:ring-0 focus:outline-none">
        {label}
      </span>
      <input
        className="p-2 w-full border text-sm border-gray-600 block placeholder:text-gray-800 placeholder:text-sm rounded-md focus:border-gray-800 "
        {...props}
      />
    </label>
  );
};

export default Input;
