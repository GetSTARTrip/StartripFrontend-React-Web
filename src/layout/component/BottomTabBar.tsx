import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, Paper, BottomNavigationAction } from "@mui/material";
import { Favorite, Home, Person } from "@mui/icons-material";

const BottomTabBar = () => {
  const [value, setValue] = useState("Home");
  const navigate = useNavigate();
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label="My Schedule"
          icon={<Favorite />}
          onClick={() => navigate("/myschedule")}
        />
        <BottomNavigationAction
          label="MyInfo"
          icon={<Person />}
          onClick={() => navigate("/login")}
        />
      </BottomNavigation>
    </Paper>
  );};

export default BottomTabBar;