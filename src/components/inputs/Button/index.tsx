import LibButton from "@mui/material/Button";
import { ButtonProps } from "./types";
import ButtonText from "../../typografy/ButtonText";

function Button({
  children,
  label,
  textColor,
  ...props
}: ButtonProps) {
  return (
    <LibButton {...props}>
      {label && <ButtonText sx={{ color: textColor }}>{label}</ButtonText>}
      {children}
    </LibButton>
  );
}

export default Button;
