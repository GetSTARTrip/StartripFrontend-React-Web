import { Container as MUIContainer } from "@mui/material";
import * as React from "react";

const Container = ( props ) => (
  <MUIContainer>
    { props.children }
  </MUIContainer>
);

export default Container;