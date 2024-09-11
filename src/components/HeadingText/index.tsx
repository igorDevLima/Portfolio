import "./index.css";
import { Typography } from "@mui/material";
import { HeadingTextProps } from "./types";

function HeadingText({ variant = "h1", ...props }: HeadingTextProps) {
  return <Typography className="heading-text" variant={variant} {...props} />;
}

export default HeadingText;
