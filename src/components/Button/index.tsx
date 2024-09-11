import MuiButton from "@mui/material/Button";
import { ButtonProps } from "./types";
import ButtonText from "../ButtonText";

function Button({ children, ...props }: ButtonProps) {
  return (
    <MuiButton {...props}>
      <ButtonText>{children}</ButtonText>
    </MuiButton>
  );
}

export default Button;
