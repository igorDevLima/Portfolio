import { Grid2 } from "@mui/material";
import { ColumnProps } from "./types";
import React from "react";

function Column({ spacing, children, ...props }: ColumnProps) {
  return (
    <Grid2 container columnSpacing={spacing} {...props} sx={{ width: "max-content", height:"max-content", flexDirection:"column" }}>
      {React.Children.map(children, (child) => (
        <Grid2 key={child?.toString()} size={6} sx={{ width: "max-content" }}>
          {child}
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Column;
