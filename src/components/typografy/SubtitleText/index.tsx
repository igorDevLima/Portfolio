import Typography from "../Typography";
import { SubtitleTextProps } from "./types";

function SubtitleText({ variant = "subtitle1", ...props }: SubtitleTextProps) {
  return <Typography variant={variant} {...props} />;
}

export default SubtitleText;
