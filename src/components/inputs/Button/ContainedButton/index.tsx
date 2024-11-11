import "./index.css";
import Button from "..";
import { ContainedButtonProps } from "./types";

function ContainedButton({
  sx,
  textColor = "var(--color-background-default)",
  ...props
}: ContainedButtonProps) {
  return (
    <Button
      sx={{
        background: "var(--color-text-primary)",
        borderTopRightRadius: "0px",
        borderTopLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        borderBottomLeftRadius: "0px",
        ...sx,
      }}
      variant="contained"
      className="contained-button"
      textColor={textColor}
      {...props}
    />
  );
}

export default ContainedButton;
