import "./index.css";
import Typography from "../Typography";
import { HeadingTextProps } from "./types";

function HeadingText({ variant = "h1", ...props }: HeadingTextProps) {
  return <Typography variant={variant} {...props} />;
}

export default HeadingText;
