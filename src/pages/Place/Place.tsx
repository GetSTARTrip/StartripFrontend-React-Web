import React from "react";
import Typography from "@mui/material";
import { Title } from "../../components";
import PlaceContent from "./PlaceContent";

const Place = () => {
  return(
    <>
      <Title title="명소 정보"></Title>
      <PlaceContent />
    </>
  );
};

export default Place;