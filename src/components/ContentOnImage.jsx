import React from "react";

export function ContentOnImage({ imageContainerClassName, className, children, image }) {
  return (
    <div className={`${className} relative`}>
      <div className={`absolute -z-10 inset-0 ${imageContainerClassName}`}>
        <img className="w-full h-full object-cover" src={image} />
      </div>
      <div className="z-20">{children}</div>
    </div>
  );
}
