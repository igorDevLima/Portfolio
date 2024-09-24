import { Grid2 } from "@mui/material";
import { SectionProps } from "./types";

function Section({ ...props }: SectionProps) {
  return (
    <Grid2
      container
      alignItems="center"
      justifyContent="space-between"
      {...props}
    />
  );
}

export default Section;
