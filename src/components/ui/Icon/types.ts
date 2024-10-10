import { SvgIconProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IconProps extends SvgIconProps {
    iconElement: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}