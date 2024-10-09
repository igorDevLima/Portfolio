import "./index.css";
import { Outlet } from "react-router-dom";
import Footer from "../../components/ui/Footer";
import { MenuItemType } from "../../types";
import AppBar from "../../components/ui/AppBar";
import Header from "../../components/ui/Header";
import { useTheme } from "../../hooks/style/useTheme";

const menuItems: MenuItemType[] = [
  { label: "sobre", href: "/test" },
  { label: "sobre", href: "/test" },
  { label: "sobre", href: "/test" },
];

function MainLayout() {
  const { handleChangeTheme } = useTheme();

  return (
    <div className="page-container">
      <Header menuItems={menuItems} onChangeTheme={handleChangeTheme} />
      <AppBar
        sx={{ gridArea: "appbar" }}
        menuItems={menuItems}
        onChangeTheme={handleChangeTheme}
      />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
