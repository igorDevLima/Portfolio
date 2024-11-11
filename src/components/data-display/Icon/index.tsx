import { IconProps } from "./types";

function Icon({ iconElement: IconElement, sx, ...props }: IconProps) {
  return (
    <IconElement
      sx={{
        color: "var(--color-text-primary)",
        ...sx,
      }}
      {...props}
    />
  );
}
export default Icon;
