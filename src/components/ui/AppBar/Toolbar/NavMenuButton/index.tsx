import MenuIcon from "@mui/icons-material/Menu";
import { NavMenuButtonProps } from "./types";
import { IconButton } from "@mui/material";

function NavMenuButton({ ...props }: NavMenuButtonProps) {
  return (
    <IconButton
      size="large"
      aria-label="options"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      {...props}
    >
      <MenuIcon />
    </IconButton>
  );
}

export default NavMenuButton;
