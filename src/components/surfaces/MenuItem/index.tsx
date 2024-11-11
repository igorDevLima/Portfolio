import { MenuItem as MuiMenuItem } from "@mui/material";
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
    <MuiMenuItem onClick={handleClick} {...props}>
      <ButtonText sx={{ textAlign: "center" }}>{item.label}</ButtonText>
    </MuiMenuItem>
  );
}

export default MenuItem;
