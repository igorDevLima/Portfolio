import { AppBar as LibAppBar, Container } from "@mui/material";
import { AppBarProps } from "./types";
import Toolbar from "./Toolbar";
import { useTheme } from "../../../hooks/style/useTheme";

function AppBar({ menuItems, sx, ...props }: AppBarProps) {
  const { handleChangeTheme } = useTheme();

  return (
    <LibAppBar
      sx={{
        display: { xs: "flex", md: "none" },
        background: "var(--color-background-default)",
        ...sx,
      }}
      {...props}
    >
      <Container maxWidth="xl">
        <button onClick={handleChangeTheme}>mudar tema</button>
        <Toolbar menuItems={menuItems} />
      </Container>
    </LibAppBar>
  );
}

export default AppBar;
