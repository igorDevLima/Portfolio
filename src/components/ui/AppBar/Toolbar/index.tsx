import { Box, Toolbar as MuiToolbar } from "@mui/material";
import SvgLogo from "../../Svg/SvgLogo";
import { ToolbarProps } from "./types";
import { useState } from "react";
import NavMenuButton from "./NavMenuButton";
import Menu from "./Menu";

function Toolbar({ menuItems, ...props }: ToolbarProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MuiToolbar disableGutters {...props}>
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
    </MuiToolbar>
  );
}

export default Toolbar;
