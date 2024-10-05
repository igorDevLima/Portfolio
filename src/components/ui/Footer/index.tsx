import "./index.css";
import { FooterProps } from "./types";
import FooterTitle from "./FooterTitle";
import FooterContent from "./FooterContent";

function Footer({ ...props }: FooterProps) {

  return (
    <footer {...props}>
      <FooterTitle
        heading={"Quer levar seu projeto para o próximo nível?"}
        subTitle="Vamos Conversar!"
      />
      <FooterContent />
    </footer>
  );
}

export default Footer;
