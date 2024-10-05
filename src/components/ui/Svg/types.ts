import React, { HTMLAttributes } from "react";
import { Without } from "../../../types";

export interface SvgProps extends HTMLAttributes<SVGElement> {
  element: React.ReactElement;
}

export interface SvgPropsWithoutElement extends Without<SvgProps, "element"> {}
