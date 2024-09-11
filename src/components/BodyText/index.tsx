import "./index.css";
import { Typography } from "@mui/material";
import { BodyTextProps } from "./types";

function BodyText({ variant = "body1", ...props }: BodyTextProps) {
  return <Typography className="body-text" variant={variant} {...props} />;
}

export default BodyText;
