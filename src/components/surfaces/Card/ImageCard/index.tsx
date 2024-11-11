import { CardActions, CardContent, CardMedia } from "@mui/material";
import Card from "..";
import { ImageCardProps } from "./types";
import Button from "../../../inputs/Button";

function ImageCard({
  image,
  alt,
  height,
  children,
  cardAction,
  ...props
}: ImageCardProps) {
  return (
    <Card {...props}>
      <CardMedia component="img" image={image} alt={alt} height={height} />
      <CardContent>{children}</CardContent>
      {cardAction && (
        <CardActions>
          <Button className="gradient-text" {...cardAction}/>
        </CardActions>
      )}
    </Card>
  );
}

export default ImageCard;
