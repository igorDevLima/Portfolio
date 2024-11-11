import { Typography as LibTypography, TypographyProps } from "@mui/material";

function Typography({ ...props }: TypographyProps) {
  return <LibTypography fontFamily='"Sora", sans-serif' {...props} />;
}

export default Typography;
