import "./index.css";
import { Outlet } from "react-router-dom";
import AppBar from "../../components/surfaces/AppBar";
import Header from "../../components/layout/Header";
import { ThemeProvider } from "../../providers/themeProvider";
import { MenuItemType } from "../../types/components";
import Footer from "../../components/layout/Footer";

const menuItems: MenuItemType[] = [
  { label: "sobre", href: "/test" },
  { label: "sobre", href: "/test" },
  { label: "sobre", href: "/test" },
];

function MainLayout() {

  return (
    <ThemeProvider>
      <div className="page-container">
        <Header menuItems={menuItems} />
        <AppBar
          sx={{ gridArea: "appbar" }}
          menuItems={menuItems}
        />
        <main className="page-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MainLayout;
