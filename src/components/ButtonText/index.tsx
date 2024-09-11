import "./index.css";
import { Typography } from "@mui/material";
import { ButtonTextProps } from "./types";

function ButtonText({ ...props }: ButtonTextProps) {
  return <Typography className="button-text" variant="button" {...props} />;
}

export default ButtonText;
