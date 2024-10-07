import Button from "..";
import { LabelButtonProps } from "./types";

function LabelButton({ ...props }: LabelButtonProps) {
  return <Button variant="text" {...props} />;
}

export default LabelButton;
