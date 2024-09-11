import {
  AppBar as MuiAppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HeadingText from "../HeadingText";
import MenuItem from "../MenuItem";
import { AppBarProps } from "./types";
import useUuid from "../../hooks/useUuid";

function AppBar({ menuItems, sx, ...props }: AppBarProps) {
  const { uuidv4 } = useUuid();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MuiAppBar
      sx={{
        display: { xs: "flex", md: "none" },
        background: "var(--color-background-default)",
        ...sx,
      }}
      {...props}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="options"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {menuItems.map((item) => (
                <MenuItem key={uuidv4()} item={item} />
              ))}
            </Menu>
          </Box>
          <HeadingText
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </HeadingText>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
