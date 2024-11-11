import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FooterContacts from "./Contacts";
import "./index.css";
import FooterNavigate from "./Navigate";

function FooterContent() {
  const contactsInfo = [
    {
      title: "+55 (27) 99731-7545",
      href: "/",
      icon: LocalPhoneIcon,
    },
    {
      title: "igorlimadeveloper@gmail.com",
      href: "/",
      icon: MailIcon,
    },
  ];

  const navLinks = [
    {
      label: "Sobre",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/",
    },
  ];

  return (
    <div className="footer-content">
      <FooterContacts contactsInfo={contactsInfo} />
      <FooterNavigate navLinks={navLinks} />
    </div>
  );
}

export default FooterContent;
