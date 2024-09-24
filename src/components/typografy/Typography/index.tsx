import { Typography as MuiTypography, TypographyProps } from "@mui/material";

function Typography({ ...props }: TypographyProps) {
  return <MuiTypography fontFamily='"Sora", sans-serif' {...props} />;
}

export default Typography;
