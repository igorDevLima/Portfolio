import MuiButton from "@mui/material/Button";
import { ButtonProps } from "./types";
import ButtonText from "../../typografy/ButtonText";

function Button({
  children,
  label,
  textColor,
  ...props
}: ButtonProps) {
  return (
    <MuiButton {...props}>
      {label && <ButtonText sx={{ color: textColor }}>{label}</ButtonText>}
      {children}
    </MuiButton>
  );
}

export default Button;
