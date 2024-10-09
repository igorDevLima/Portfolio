import { AppBar as MuiAppBar, Container } from "@mui/material";
import { AppBarProps } from "./types";
import Toolbar from "./Toolbar";

function AppBar({ menuItems, sx, onChangeTheme, ...props }: AppBarProps) {
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
        <button onClick={onChangeTheme}>mudar tema</button>
        <Toolbar menuItems={menuItems} />
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
