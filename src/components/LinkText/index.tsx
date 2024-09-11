import "./index.css";
import Typography from "../Typography";
import { LinkTextProps } from "./types";
import { useNavigate } from "react-router-dom";

function LinkText({ variant = "body1", href, ...props }: LinkTextProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <Typography
      className="link-text"
      onClick={handleClick}
      variant={variant}
      {...props}
    />
  );
}

export default LinkText;
