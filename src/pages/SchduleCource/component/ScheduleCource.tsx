import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Alert, AlertTitle, Grid, Paper, Box } from "@mui/material";
import { Container, Title } from "../../../components";
import { AddButton } from "./AddButton";
import { TitleText } from "./TitleText";
import ContentCard from "./ContentCard";

const ScheduleCource = () => {

    const testData = [
        {
            whereInfo: "출발",
            title: "국립 고궁 박물관",
            content: "서울시 종로구",
            image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        },
        {
            whereInfo: "도보 15분 이동 🏃🏻",
            title: "하나 공방",
            content: "서울시 종로구",
            image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
        },
        {
            whereInfo: "도보 3분 이동 🏃🏻",
            title: "국립 민속 박물관",
            content: "서울시 종로구",
        },
    ];
    
    return (

        <Container>
            <TitleText/>
            <AddButton/>
            {
                testData.map((object) => (
                <ContentCard 
                    whereInfo = {object.whereInfo}
                    header={object.title} 
                    content={object.content} 
                    image={object.image} 
                    xs={10}  // xs?
                />))
            }
            <AddButton/>
        </Container>
    );
};

export {ScheduleCource};