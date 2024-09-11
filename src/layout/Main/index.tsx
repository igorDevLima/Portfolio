import "./index.css";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MenuItemType } from "../../types";
import AppBar from "../../components/AppBar";

const menuItems: MenuItemType[] = [
  { label: "sobre", href: "/test" },
  { label: "sobre", href: "/test" },
  { label: "sobre", href: "/test" },
];

function MainLayout() {
  return (
    <div className="page-container">
      <Header menuItems={menuItems} />
      <AppBar sx={{ gridArea: "appbar" }} menuItems={menuItems} />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
