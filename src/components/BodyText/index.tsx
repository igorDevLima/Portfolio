import "./index.css";
import Typography from "../Typography";
import { BodyTextProps } from "./types";

function BodyText({ variant = "body1", ...props }: BodyTextProps) {
  return <Typography className="body-text" variant={variant} {...props} />;
}

export default BodyText;
