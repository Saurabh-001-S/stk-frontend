import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const Input = ({ label, onChange, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState("password");
  return (
    <>
      <label
        htmlFor="placeholder"
        className="block text-sm font-medium text-left py-2"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type === "password" ? showPassword : type}
          id={placeholder}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-2 py-1 border rounded border-slate-200"
          required
        />
      </div>
    </>
  );
};

export default Input;
