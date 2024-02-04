import React from "react";
import { ContentOnImage } from "./ContentOnImage";
import { images } from "../assets/images/images";

export function Footer() {
  return (
    <div>
      <ContentOnImage
        image={images.people}
        imageContainerClassName=""
        className=""
      >
        <div className="h-[70vh] bg-green-900/50"></div>
      </ContentOnImage>
      <div className="py-6 px-4 text-center bg-green-950 text-white">
        Terms and Conditions | Privacy Policy | &copy; {new Date().getFullYear}{" "}
        X-Foundation. All Rights Reserved.
      </div>
    </div>
  );
}
