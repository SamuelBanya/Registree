import React, { ReactNode } from "react";
import { Grid } from "@mui/material";

type MenuProps = {
  children: ReactNode;
}

const MenuGrid = (props: MenuProps) =>
(
  <Grid
    container
    sx={{
      width: "100%",
      borderRadius: "15px",
      border: "5px solid #FFF",
      backgroundColor: "#3AFF7D",
      marginBottom: "50px"
    }}
  >
    {props.children}
  </Grid>
)

export default MenuGrid;
