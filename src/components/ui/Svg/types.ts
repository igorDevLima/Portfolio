import React, { HTMLAttributes } from "react";
import { Without } from "../../../types/globals";

export interface SvgProps extends HTMLAttributes<SVGElement> {
  element: React.ReactElement;
}

export interface SvgPropsWithoutElement extends Without<SvgProps, "element"> {}
