import React from "react";
import { SvgProps } from "./types";

function Svg({ element, ...props }: SvgProps) {
  return React.cloneElement(element, { ...props });
}

export default Svg;
