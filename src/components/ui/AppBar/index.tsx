import { AppBar as MuiAppBar, Container } from "@mui/material";
import { AppBarProps } from "./types";
import Toolbar from "./Toolbar";

function AppBar({ menuItems, sx, ...props }: AppBarProps) {
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
        <Toolbar menuItems={menuItems} />
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
