import { MenuItem as LibMenuItem } from "@mui/material";
import { MenuItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import ButtonText from "../../typografy/ButtonText";

function MenuItem({ item, ...props }: MenuItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (item.href) {
      navigate(item.href);
    }
  };

  return (
    <LibMenuItem onClick={handleClick} {...props}>
      <ButtonText sx={{ textAlign: "center" }}>{item.label}</ButtonText>
    </LibMenuItem>
  );
}

export default MenuItem;
