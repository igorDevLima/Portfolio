import { CardMediaOwnProps } from "@mui/material";
import { CardProps } from "../types";
import { ButtonProps } from "../../../inputs/Button/types";

export interface ImageCardProps extends CardProps, Pick<CardMediaOwnProps, 'image'> {
    alt?: string;
    height?: string | number;
    cardAction?: ButtonProps;
}