import * as React from "react";

export function Button({ children, variant = "default", ...props }) {
  const base = "px-4 py-2 rounded text-white font-semibold";
  const styles = {
    default: base + " bg-blue-600 hover:bg-blue-700",
    outline: base + " border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
    secondary: base + " bg-gray-500 hover:bg-gray-600",
  };
  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
}
