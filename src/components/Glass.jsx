import React from "react";

export function Glass({ className, glassClassName, children }) {
  return (
    <div className={`${className} relative`}>
      <div className="peer">{children}</div>
      <div className={`${glassClassName} absolute -z-10 inset-0`}></div>
    </div>
  );
}
