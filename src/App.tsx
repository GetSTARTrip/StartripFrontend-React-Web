import React from "react";
import Main from "./pages/Main";
import {Container, Paper} from "@mui/material";
import { Header, Footer, BottomTabBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routerData from "./router";

const App = () => (
    <BrowserRouter>
      <Header />
      <Container maxWidth="md">
        <Routes>
        {
          routerData.map((route)=>(<Route path={route.url} element={route.component} />))
        } 
      </Routes>
      <Footer />
      <BottomTabBar/>
      </Container>
    </BrowserRouter>
);

export default App;
