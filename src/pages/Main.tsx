import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Alert, AlertTitle, Grid, Paper, Box } from "@mui/material";
import { Container, Title } from "../components";
import ContentCard from "../components/ContentCard";

export default function Main() {
    const [loading, setLoading] = useState(false);

    const mainData = [
        {
            title: "hello world!",
            content: "hello content!",         
        },
        {
            title: "hello world! 22",
            content: "hello content! 22",         
        },
        {
            title: "hello world! 33",
            content: "hello content! 33",         
        },
        {
            title: "hello world! 44",
            content: "hello content! 44",         
        },
    ];
    return (
        <Container>
            <Title title="메인" />
            <Grid container spacing={2}>
                {
                    mainData.map((object) => (<ContentCard header={object.title} content={object.title} image={""} xs={4} />))
                }
            </Grid>
        </Container>
    );
}