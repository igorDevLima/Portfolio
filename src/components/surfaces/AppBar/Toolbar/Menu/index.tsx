import { MenuProps } from "./types";
import { Menu as LibMenu } from "@mui/material";
import MenuItem from "../../../MenuItem";
import useUuid from "../../../../../hooks/utils/useUuid";

export default function Menu({ menuItems, sx, ...props }: MenuProps) {
  const { uuidv4 } = useUuid();

  return (
    <LibMenu
      id="menu-appbar"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx={{ display: { xs: "block", md: "none" }, ...sx }}
      {...props}
    >
      {menuItems.map((item) => (
        <MenuItem key={uuidv4()} item={item} />
      ))}
    </LibMenu>
  );
}
