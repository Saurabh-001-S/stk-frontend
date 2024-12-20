import React, { useState } from "react";

interface InputProps {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  placeholder,
  type,
}) => {
  // @ts-ignore#
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
        {/* {type === "password" && (
          <div className="absolute right-4 top-2 z-50">
            {showPassword === "password" ? (
              <EyeOff
                color="#4b586c"
                onClick={() => setShowPassword("password")}
              />
            ) : (
              <Eye color="#4b586c" onClick={() => setShowPassword("text")} />
            )}
          </div>
        )} */}
      </div>
    </>
  );
};

export default Input;
