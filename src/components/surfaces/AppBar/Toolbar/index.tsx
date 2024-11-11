import { Box, Toolbar as LibToolbar } from "@mui/material";
import { ToolbarProps } from "./types";
import { useState } from "react";
import NavMenuButton from "./NavMenuButton";
import Menu from "./Menu";
import SvgLogo from "../../../data-display/Svg/SvgLogo";

function Toolbar({ menuItems, ...props }: ToolbarProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <LibToolbar disableGutters {...props}>
      <Box sx={{ flexGrow: 1 }}>
        <NavMenuButton onClick={handleOpenNavMenu} />
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          menuItems={menuItems}
          onClose={handleCloseNavMenu}
        />
      </Box>
      <SvgLogo />
    </LibToolbar>
  );
}

export default Toolbar;
