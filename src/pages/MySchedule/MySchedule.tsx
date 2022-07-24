import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Alert, AlertTitle, Grid, Paper, Box } from "@mui/material";
import { Container, Title } from "../../components";
import ImageCard from "./component/ImageCard";
import {MyScheduleButton} from "./component/MyScheduleButton";
import {GuideText} from "./component/GuideText";


const MySchedule = () => {
    
    return (
        <Container>
            <Container maxWidth="sm">
            <MyScheduleButton/>
            <ImageCard/>
            <GuideText/>
            </Container>
        </Container>
    );
};

export {MySchedule};