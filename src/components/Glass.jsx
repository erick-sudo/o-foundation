import React from "react";

export function Glass({ onClick, className, glassClassName, children }) {
  return (
    <div
      onClick={() => typeof onClick === "function" && onClick()}
      className={`${className} relative`}
    >
      <div className="peer">{children}</div>
      <div className={`${glassClassName} absolute -z-10 inset-0`}></div>
    </div>
  );
}
