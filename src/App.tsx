import React from "react";
import Main from "./pages/Main/Main";
import {Container, Paper} from "@mui/material";
import { ST_Footer, ST_Header } from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routerData from "./router";
import BottomTabBar from "./layout/component/BottomTabBar";

const App = () => (
    <BrowserRouter>
      <ST_Header />
      <Container maxWidth="md">
        <Routes>
        {
          routerData.map((route)=>(<Route path={route.url} element={route.component} />))
        } 
      </Routes>
      <ST_Footer />
      <BottomTabBar/>
      </Container>
    </BrowserRouter>
);

export default App;
