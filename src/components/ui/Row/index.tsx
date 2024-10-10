import { Grid2 } from "@mui/material";
import { RowProps } from "./types";
import React from "react";

function Row({ spacing, children, ...props }: RowProps) {
  return (
    <Grid2 container rowSpacing={spacing} {...props} sx={{ width: "max-content" }} alignItems='center'>
      {React.Children.map(children, (child) => (
        <Grid2 key={child?.toString()} size={6} sx={{ width: "max-content" }}>
          {child}
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Row;
