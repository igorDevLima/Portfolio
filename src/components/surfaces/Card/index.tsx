import { Card as LibCard } from "@mui/material";
import { CardProps } from "./types";

function Card({ ...props }: CardProps) {
  return <LibCard {...props} />;
}

export default Card;
