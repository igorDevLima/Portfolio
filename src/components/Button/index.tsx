import "./index.css";
import MuiButton from "@mui/material/Button";
import { ButtonProps } from "./types";
import ButtonText from "../ButtonText";

function Button({ children, sx, ...props }: ButtonProps) {
  return (
    <MuiButton
      className="button"
      sx={{
        background: "var(--color-text-primary)",
        borderTopRightRadius: "0px",
        borderTopLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        borderBottomLeftRadius: "0px",
        ...sx,
      }}
      {...props}
    >
      <ButtonText sx={{ color: "var(--color-background-default)" }}>
        {children}
      </ButtonText>
    </MuiButton>
  );
}

export default Button;
