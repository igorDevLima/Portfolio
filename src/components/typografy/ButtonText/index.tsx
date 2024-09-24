import Typography from "../Typography";
import "./index.css";
import { ButtonTextProps } from "./types";

function ButtonText({ ...props }: ButtonTextProps) {
  return <Typography className="button-text" variant="button" {...props} />;
}

export default ButtonText;
