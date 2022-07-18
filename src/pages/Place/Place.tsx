import React from "react";
import Typography from "@mui/material";
import { ST_Title } from "components";
import PlaceContent from "./PlaceContent";

const Place = () => {
  return(
    <>
      <ST_Title title="명소 정보"></ST_Title>
      <PlaceContent />
    </>
  );
};

export default Place;